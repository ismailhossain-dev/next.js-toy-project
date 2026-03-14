import React from "react";
//don't form mongodb data , this data is folder data
// import products from "@/data/toys.json";
import ProductCard from "../Cards/ProductCard";
import { getProducts } from "@/actions/server/Product";

// import products from "@/data/toys.json";

const Products = async () => {
  const products = await getProducts();
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-10">Our Products</h2>
      <div className="grid md:grid-cols-3 gap-5 ">
        {products.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;

//almost 3:36second complete
