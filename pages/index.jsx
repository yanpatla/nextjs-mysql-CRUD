import axios from "axios";
import React from "react";
import ProductForm from "../components/ProductForm";

const HomePage = ({ products }) => {
  console.log(products);
  return (
    <div className="">
      <ProductForm />

      {products.map((product) => (
        <div className="" key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

//*Esto nos Va a Permitir ejecutar la logica antes de que la pantalla de vaya a home page

//*Esta es una Funcion especial de NextJS para poder interactuar con BE

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
