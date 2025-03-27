import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import Banner from "./Banner";
import ProductGrid from "./ProductGrid";

const images = [
    {
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Mar/updated/makeup_PCz._CB547914085_.png",
      alt: "Beauty Products",
      name: "Beauty Products",
      description: "Explore a wide range of skincare, haircare, and makeup essentials from top brands to keep you looking flawless.",
    },
    {
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg",
      alt: "Toys and Games",
      name: "Toys and Games",
      description: "Find the latest and most exciting toys, puzzles, and board games for kids and adults alike.",
    },
    {
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30003._CB542120021_.jpg",
      alt: "Amazon Fashion",
      name: "Amazon Fashion",
      description: "Shop stylish clothing, footwear, and accessories for men, women, and kids at unbeatable prices.",
    },
  ];
  



const HeroSection = () => {
    return <section  className="padding-top-on-section">
    <Banner images={images} />
    <ProductGrid />
    </section>;
  };

export default HeroSection;
