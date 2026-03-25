"use server";
const { authOptions } = require("@/lib/authOption");
//==========All add to cart work =============
const { dbConnect, collections } = require("@/lib/dbConnect");
const { getServerSession } = require("next-auth");
const { use } = require("react");

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
