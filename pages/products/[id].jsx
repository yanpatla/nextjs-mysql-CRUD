import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";

const ProductDetail = ({ product }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    await axios.delete(`/api/products/${id}`);
    router.push("/");
  };
  return (
    <Layout>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button
        className="bg-red-500 px-3 py-2  text-white hover:bg-red-700 rounded"
        onClick={() => handleDelete(product.id)}
      >
        Delete
      </button>
      <button
        className="bg-blue-500 px-5 py-2  text-white hover:bg-blue-700 rounded ml-2 "
        onClick={() => router.push(`/products/edit/${product.id}`)}
      >
        Edit
      </button>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { data: product } = await axios.get(
    `http://localhost:3000/api/products/${context.query.id}`
  );

  return {
    props: { product },
  };
};

export default ProductDetail;
