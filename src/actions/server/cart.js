"use server";
const { authOptions } = require("@/lib/authOption");
//=========cart button function=========
const { dbConnect, collections } = require("@/lib/dbConnect");
const { getServerSession } = require("next-auth");

//=======ei function er mardome ekta quantity barabo and ekta quantity comabe========
const cartCollections = dbConnect(collections.CART);
export const handleCart = async ({ product, inc = true }) => {
  const user = await getServerSession(authOptions);

  return { success: true };
};
