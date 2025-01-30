import mongoose from "mongoose";

const Connection = async (USERNAME, PASSWORD) => {
  const MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@ecom.r8wz0.mongodb.net/ecommerce2?retryWrites=true&w=majority&appName=ecom`;

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

export default Connection;
