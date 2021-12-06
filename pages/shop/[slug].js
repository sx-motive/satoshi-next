// dependencies
import React, { useContext, useEffect, useState } from "react";

// database
import Product from "../../src/models/product";
import db from "../../src/utils/db";

// nucleus
export default function SingleProduct(props) {
  const { productData } = props;
  return (
    <section data-scroll-section className="single-product">
      <div className="container -default">
        <div className="single-product-wrap">
          <div className="col-left">
            <img src={productData.image} alt={productData.name} />
            <img src={productData.image} alt={productData.name} />
            <img src={productData.image} alt={productData.name} />
            <img src={productData.image} alt={productData.name} />
          </div>
          <div className="col-right single-product-meta">
            <span>
              Status:{" "}
              {productData.countInStock > 0
                ? "Product in stock"
                : "Product out of stock"}
            </span>

            <h3>{productData.name}</h3>
            <span>Category: {productData.category}</span>
            <span>Description: {productData.description}</span>
            <span>Brand: {productData.brand}</span>
            <span>Rating: {productData.rating} of 10</span>
            <span>Price: ${productData.price}</span>
            <button className="add">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  let productData = await Product.findOne({ slug }, "-reviews").lean();
  await db.disconnect();
  return {
    props: {
      productData: db.convertDocToObj(productData),
    },
  };
}
