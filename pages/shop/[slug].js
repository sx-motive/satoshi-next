import React from "react";

import { shop } from "../api/data";

export default function Product(productData) {
  const product = productData.productData;
  return (
    <section data-scroll-section>
      <div className="container -default">
        <div className="product-item-wrap">
          <div className="col-left">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="col-right">
            <span>
              Status:{" "}
              {product.countInStock > 0
                ? "Product in stock"
                : "Product out of stock"}
            </span>
            <span>Category: {product.category}</span>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span>Brand: {product.brand}</span>
            <span>Rating: {product.rating} of 10</span>
            <span>Price: {product.price}</span>
            <button className="add">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  const paths = shop.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  let searchTerm = slug;
  let productData = shop.find((item) => item.slug === searchTerm);

  return {
    props: { productData },
  };
}
