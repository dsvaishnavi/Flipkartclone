import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URI = `mongodb+srv://${username}:${password}@ecom.r8wz0.mongodb.net/ecommerce2?retryWrites=true&w=majority&appName=ecom`;
  try {
    await mongoose.connect(URI);
    console.log("connection succesful");
  } catch (error) {
    console.error("error occured", error.message);
  }
};
export default Connection;
