// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool } from "../../config/db";
export default async function handler(req, res) {
  const [row] = await pool.query("SELECT NOW();");
  console.log(row[0]["NOW()"]);
  res.status(200).json({ name: "John Doe" });
}
