"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Cook's Choice 2-In-1 Better Baker Edible Food Bowl & Mini Loaf Maker",
    image: "/cooks_logo.png",
    rating: 5,
    reviews: 12,
  },
  {
    id: 2,
    name: "Cook's Choice 2-In-1 Better Baker Edible Food Bowl & Mini Loaf Maker",
    image: "/cooks_logo.png",
    rating: 5,
    reviews: 12,
  },
  {
    id: 3,
    name: "Cook's Choice 2-In-1 Better Baker Edible Food Bowl & Mini Loaf Maker",
    image: "/cooks_logo.png",
    rating: 5,
    reviews: 12,
  },
  {
    id: 4,
    name: "Cook's Choice 2-In-1 Better Baker Edible Food Bowl & Mini Loaf Maker",
    image: "/cooks_logo.png",
    rating: 5,
    reviews: 12,
  },
];

export default function FeaturedProducts() {
  const colors = {
    darkGray: "#363636",
    lightYellow: "#f8e9b7",
    orange: "#f47c27",
    offWhite: "#fbf7e9",
  };

  return (
    <section
      className="py-12 px-4 md:px-8"
      style={{ backgroundColor: colors.offWhite }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: colors.darkGray }}>
            FEATURED PRODUCTS
          </h2>
          <div className="relative inline-block group">
            <button className="relative z-10 bg-[#f47c27] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#e16d1e] transition duration-300 ease-in-out transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] uppercase tracking-wide">
              View All
            </button>
            <div className="absolute inset-0 bg-[#363636] rounded-lg transition-all duration-300 ease-in-out transform translate-x-[4px] translate-y-[4px] group-hover:translate-x-[6px] group-hover:translate-y-[6px]"></div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="relative">
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  width={100}
                  height={100}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto mb-4"
                />
                <h3
                  className="text-lg font-bold mb-2 line-clamp-2"
                  style={{ color: colors.darkGray }}>
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.reviews} Reviews)
                  </span>
                </div>
                <div className="relative inline-block group">
                  <button className="relative z-10 bg-[#fbf7e9] text-[#363636] font-bold py-3 px-6 rounded-lg hover:bg-[#fdfbf2] transition duration-300 ease-in-out transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] uppercase tracking-wide">
                    ADD TO CART
                  </button>
                  <div className="absolute inset-0 bg-[#363636] rounded-lg transition-all duration-300 ease-in-out transform translate-x-[4px] translate-y-[4px] group-hover:translate-x-[6px] group-hover:translate-y-[6px]"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <ChevronLeft className="w-8 h-8 text-[#f47c27]" />
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <ChevronRight className="w-8 h-8 text-[#f47c27]" />
          </div>
        </Swiper>
        <div className="swiper-pagination mt-6"></div>
      </div>
    </section>
  );
}
