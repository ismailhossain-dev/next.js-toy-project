//Register work most important
"use server";
import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

//All Register work and send mongodb data
//payload ta paitese register teke
export const postUser = async (payload) => {
  const { email, password, name } = payload;
  //check in payload data is there data or not
  if (!email || !password) return null;

  //check mongodb is there user or not
  const isExist = await dbConnect(collections.USERS).findOne({ email });
  if (isExist) {
    return null;
  }

  //if user not then create new user
  const newUsers = {
    //providerId provide for google login
    providerId: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 14),
    role: "user",
  };

  //if everything ok then inset the mongodb
  const result = await dbConnect(collections.USERS).insertOne(newUsers);

  //ei response ta jodi tik tak dey tahole amra register page toast dekayte parbo

  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};

//login work

export const loginUser = async (payload) => {
  const { email, password } = payload;
  //check there is user or not
  if (!email || !password) return null;

  const user = await dbConnect(collections.USERS).findOne({ email });
  if (!user) return null;
  //check user password tik ase kina
  const isMatched = await bcrypt.compare(password, user.password);
  if (isMatched) {
    return user;
  } //jodi password tik na take
  else {
    return null;
  }
};
