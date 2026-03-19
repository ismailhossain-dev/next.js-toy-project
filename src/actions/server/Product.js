//Product work all data and single data
"use server";

import { ObjectId } from "mongodb";

const { dbConnect, collections } = require("@/lib/dbConnect");

// Get Single data form mongodb
// all data getting from mongodb and dbConnect.js
export const getProducts = async () => {
  const products = await dbConnect(collections.PRODUCTS).find().toArray();
  return JSON.parse(JSON.stringify(products));
};

//get single data
export const getSingleProduct = async (id) => {
  if (id.length !== 24) {
    return {};
  }
  const query = { _id: new ObjectId(id) };
  const product = await dbConnect(collections.PRODUCTS).findOne(query);

  return JSON.parse(JSON.stringify(product)) || {};
};
