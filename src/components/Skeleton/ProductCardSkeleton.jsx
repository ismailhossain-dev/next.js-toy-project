import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="card w-full max-w-[320px] bg-base-100 shadow-sm border border-gray-100 mx-auto animate-pulse">
      {/* Image Skeleton */}
      <div className="pt-4 px-4">
        <div className="h-52 w-full bg-gray-200 rounded-xl"></div>
      </div>

      {/* Content Skeleton */}
      <div className="card-body p-5 gap-3">
        {/* Title Skeleton */}
        <div className="h-5 bg-gray-200 rounded-md w-3/4"></div>

        {/* Subtitle/Bangla Skeleton */}
        <div className="h-4 bg-gray-100 rounded-md w-1/2"></div>

        {/* Rating Skeleton */}
        <div className="flex gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 w-4 bg-gray-200 rounded-full"></div>
          ))}
        </div>

        {/* Price Skeleton */}
        <div className="flex items-center gap-3 mt-2">
          <div className="h-8 bg-gray-200 rounded-md w-24"></div>
          <div className="h-4 bg-gray-100 rounded-md w-12"></div>
        </div>

        {/* Button Skeleton */}
        <div className="card-actions mt-4">
          <div className="h-12 bg-gray-200 rounded-xl w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
