"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import featuredProducts from "@/data/products.json";
import BlackButton from "../common/blackButton";
import OrangeButton from "../common/orangeButton";

export default function FeaturedProducts() {
  const swiperRef = useRef<SwiperType | null>(null);

  const colors = {
    darkGray: "#363636",
    orange: "#f47c27",
    organeHover: "#e16d1e",
    offWhite: "#fbf7e9",
  };

  return (
    <section
      className="py-12 px-6 md:px-16 relative"
      style={{ backgroundColor: colors.offWhite }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2
            className="text-xl md:text-4xl font-extrabold beton-font"
            style={{ color: colors.darkGray }}>
            FEATURED PRODUCTS
          </h2>
          <OrangeButton text="view all" />
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
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
            {featuredProducts.map((product) => (
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
                            ? "text-orange-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      ({product.reviews} Reviews)
                    </span>
                  </div>
                  <BlackButton text="add to cart" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute -left-4 lg:-left-8 top-1/2 transform -translate-y-1/2 text-[#363636] cursor-pointer z-10 hover:text-[#f47c27] transition-colors"
            aria-label="Previous product">
            <ChevronLeft className="h-14 w-14" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -right-4 lg:-right-8 top-1/2 transform -translate-y-1/2 text-[#363636] cursor-pointer z-10 hover:text-[#f47c27] transition-colors"
            aria-label="Next product">
            <ChevronRight className="font-thin h-14 w-14" />
          </button>
        </div>
        <div className="swiper-pagination mt-6"></div>
      </div>
    </section>
  );
}
