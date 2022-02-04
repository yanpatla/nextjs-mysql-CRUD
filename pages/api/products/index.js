import { pool } from "../../../config/db";
export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      return await getProdcuts(req, res);
    case "POST":
      return await saveProduct(req, res);

    default:
      break;
  }
}

const saveProduct = async (req, res) => {
  const { name, description, price } = body;
  const [result] = await pool.query("INSERT INTO product SET ?", {
    name,
    description,
    price,
  });
  console.log(result);
  return res
    .status(200)
    .json({ name, price, description, id: result.insertId });
};

const getProdcuts = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM product;");
  return res.status(200).json(result);
};
