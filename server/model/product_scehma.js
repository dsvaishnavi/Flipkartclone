import mongoose from "mongoose";

const Productschema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});
const Product = mongoose.model('Product', Productschema);


export default Product;
