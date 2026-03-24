const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;
const dbName = process.env.DBNAME;

//ALL COLLECTION NAME
export const collections = {
  PRODUCTS: "products",
  USERS: "users",
  CART: "cart",
};
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//create a function for connect database
//RECEIVE COLLECTION NAME
export const dbConnect = (cname) => {
  return client.db(dbName).collection(cname);
};
