import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProdcutById(req, res);
    case "DELETE":
      return await deleteProduct(req, res);
    default:
      break;
  }
}

const getProdcutById = async (req, res) => {
  const { id } = req.query;
  const [result] = await pool.query("SELECT * FROM product WHERE id = ?", [id]);

  return res.status(200).json(result[0]);
};

const deleteProduct = async (req, res) => {
  const { id } = req.query;
  const result = await pool.query("DELETE  FROM product WHERE id = ?", [id]);

  return res.status(204).json();
};
