import axios from "axios";
import React from "react";

const ProductForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resutl = await axios.post("/api/products", {
      name: "product 1",
      description: "pep pdircut",
      price: 10000,
    });
    console.log(resutl);
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />

        <label htmlFor="price">Price:</label>
        <input type="text" name="price" id="price" />

        <label htmlFor="description">Description:</label>
        <textarea name="description" rows="2"></textarea>

        <button>Save Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
