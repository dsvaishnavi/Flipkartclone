import { products } from "./constants/data.js"
import Product from "./model/product_scehma.js"

const Defaultdata = async () => {
    try {
      // Delete all existing data in the Product collection
      await Product.deleteMany({});
      
      // Insert new data
      await Product.insertMany(products);
      console.log("Data imported successfully");
    } catch (error) {
      console.log("Error while inserting:", error.message);
    }
  };
  export default Defaultdata;
  