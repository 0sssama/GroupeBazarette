import Product from "models/Product";
import dbConnect from "utils/dbConnect";

dbConnect();

export default async function getProducts() {
  const products = await Product.find({});

  return products;
}

export async function getProductById(id) {
  const product = await Product.findById(id);

  return product;
}

export async function getProductsByType(type) {
  const products = await Product.find({
    type,
  });

  return products;
}
