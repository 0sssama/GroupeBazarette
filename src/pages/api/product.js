import Product from "models/Product";
import dbConnect from "utils/dbConnect";

dbConnect();

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const products = await Product.find({});

        res.status(200).json({
          success: true,
          data: products,
        });
      } catch (err) {
        console.log("FATAL ERROR: ", err);
        res.status(400).json({
          success: false,
        });
      }
      break;
    case "POST":
      try {
        const product = await Product.create(req.body);

        res.status(201).json({
          success: true,
          data: product,
        });
      } catch (err) {
        console.log("FATAL ERROR: ", err);
        res.status(400).json({
          success: false,
        });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
