import Product from "models/Product";
import getProducts from "utils/getProducts";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const products = await getProducts();

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
    case "PUT":
      try {
        const product = await Product.findByIdAndUpdate(
          req.body.id,
          req.body.body,
          { new: true }
        );

        res.status(200).json({
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
