import axios from "axios";
import React from "react";
import Layout from "../../components/Layout";

const ProductDetail = ({ product }) => {
  console.log(product)
  return (
    <Layout>
      <h1>Product</h1>
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
