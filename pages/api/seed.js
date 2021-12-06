// dependencies
import nc from "next-connect";

// database
import Product from "../../src/models/product";
import db from "../../src/utils/db";
import { shop } from "../../src/utils/data";

// nucleus
const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(shop);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
});

export default handler;
