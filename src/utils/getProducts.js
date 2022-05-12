import Product from "models/Product";
import dbConnect from "utils/dbConnect";

dbConnect();

export default async function getProducts() {
  const products = await Product.find({});

  return products;
}
