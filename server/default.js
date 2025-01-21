import { products } from "./constants/data.js";
import Product from "./model/product_scehma.js";

const Defaultdata = async () => {
  try {
    // Delete all existing data (Optional: Uncomment if needed)
    // await Product.deleteMany({});

    // Insert or update each product
    for (const product of products) {
      await Product.updateOne(
        { id: product.id }, // Match by unique id
        { $set: product }, // Update fields
        { upsert: true } // Insert if not found
      );
    }

    console.log("Data imported successfully");
  } catch (error) {
    console.log("Error while inserting:", error.message);
  }
};

export default Defaultdata;
