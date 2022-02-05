import axios from "axios";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

const HomePage = ({ products }) => {
  return (
    <Layout>
      {products.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <a>
            <div className="border border-gray-200 shadow-md p-6 mb-2">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          </a>
        </Link>
      ))}
    </Layout>
  );
};

//*Esto nos Va a Permitir ejecutar la logica antes de que la pantalla de vaya a home page

//*Esta es una Funcion especial de NextJS para poder interact uar con BE

export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products"
  );

  return {
    props: {
      products,
    },
  };
};

export default HomePage;
