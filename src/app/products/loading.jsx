import ProductCardSkeleton from "@/components/Skeleton/ProductCardSkeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {[...Array(9)].map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default Loading;
