import { FontBangla } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-1  space-y-5 ">
        {/* bangla font use */}
        {/* Leading mane holo line-height */}
        <h2 className={`text-6xl font-bold ${FontBangla.className} leading-20`}>
          আপনার সন্তানের জন্য একটি <span className="text-primary ">সুন্দর ভবিষ্যৎ</span> গড়ে তুলুন।
        </h2>
        <p>Buy Every toy with up to 10% discount</p>
        <button className=" btn btn-primary btn-outline">Explore Products</button>
      </div>
      <div className="flex-1">
        <Image
          src="/assets/hero.png"
          width={500}
          height={400}
          alt="Buy Every toy with up to 10% discount"
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
