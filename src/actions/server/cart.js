"use server";

import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

const { authOptions } = require("@/lib/authOption");
//==========All add to cart work =============
const { dbConnect, collections } = require("@/lib/dbConnect");
const { getServerSession } = require("next-auth");
const { cache } = require("react");

const cartCollection = dbConnect(collections.CART);

//inc ta use korsi quantity jorno
export const handleCart = async ({ product, inc = true }) => {
  //console.log user ta object hisabe ache tai amra ekane object hisabe nichi
  const { user } = (await getServerSession(authOptions)) || {};

  //return eta jekane function ta use kora hobe ekane pabo
  if (!user) return { success: false };
  //getCartItem-> user.email && productId
  const query = { email: user?.email, productId: product?._id };
  const isAdded = await cartCollection.findOne(query);
  if (isAdded) {
    //if Exist:Update cart
    const updatedData = {
      $inc: {
        quantity: inc ? 1 : -1,
      },
    };
    const result = await cartCollection.updateOne(query, updatedData);
    //boolean data tai amra boolean convert kore divo
    return { success: result.modifiedCount };
  } else {
    //data jodi na take tahole new data make korbo
    //NOt Exist: insert Cart
    const newData = {
      productId: product?._id,
      email: user?.email,
      title: product?.title,
      quantity: 1,
      image: product?.image,
      //price teke discount price ta - korsi
      price: product?.price - (product.price * product.discount) / 100,
      username: user?.name,
    };

    const result = await cartCollection.insertOne(newData);
    return { success: result.acknowledged };
  }
};

//cart data gola niye astechi  amra kaj korar somoy try korbo try catch follow korthe

export const getCart = async () => {
  const { user } = await getServerSession(authOptions);
  //user jodi na take tahole user data dive na
  if (!user) return [];

  //check korbo jey user login ache tar data mongodb te ache kina
  const query = { email: user?.email };
  const result = await cartCollection.find(query).toArray();
  return result;
};

//delete function
//cache korle server side data delete hobe reload deya chara | amra jeheto ekon api ta client side use korchi tai cache use korte hobe na
export const deleteItemsFormCart = cache(async (id) => {
  const { user } = await getServerSession(authOptions);
  if (!user) return { success: false };
  //id ta jodi 24 er soman na hoy
  if (id.length != 24) {
    return { success: false };
  }
  const query = { _id: new ObjectId(id) };

  const result = await cartCollection.deleteOne(query);
  //cache work
  if (Boolean(result.deletedCount)) {
    revalidatePath("/cart");
  }
  //
  return { success: Boolean(result.deletedCount) };
});

//quantity + - click kaj ta korchi
export const increaseItemDb = async (id, quantity) => {
  const { user } = await getServerSession(authOptions);
  if (!user) return { success: false };
  //user ke 10 tar besi product add korte divo na
  if (quantity > 10) {
    return { success: false, message: "You cant buy 10 product at a time" };
  }

  const query = { _id: new ObjectId(id) };
  //jey data gola update korbo
  const result = await cartCollection.updateOne(query);
};
