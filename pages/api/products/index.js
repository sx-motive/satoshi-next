// dependencies
import nc from "next-connect";

// database
import Product from "../../../src/models/product";
import db from "../../../src/utils/db";

// nucleus
const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
});

export default handler;
