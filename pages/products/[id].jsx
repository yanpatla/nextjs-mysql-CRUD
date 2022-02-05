import axios from "axios";
import React from "react";
import Layout from "../../components/Layout";

const ProductDetail = ({ product }) => {
  const handleDelete = async (id) => {
    const res = await axios.delete(`/api/products/${id}`);
    console.log(res);
  };
  return (
    <Layout>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button
        className="bg-red-500 px-3 py-2  text-white hover:bg-red-700"
        onClick={() => handleDelete(product.id)}
      >
        Delete
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
