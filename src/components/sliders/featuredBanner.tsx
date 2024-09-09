"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import OrangeButton from "../common/orangeButton";

export default function FeaturedBanner() {
  const featuredImages = [
    {
      id: 1,
      src: "/dish_1.jpg",
      heading: "Revolutionize Your",
      subHeading: "Cooking Experience",
      quote: "with Cook’s Choice Unique Cookware",
      description:
        "The original Better Baker edible food bowl and mini muffin maker.",
    },
    {
      id: 2,
      src: "/cook_2.jpg",
      heading: "Revolutionize Your",
      subHeading: "Cooking Experience",
      quote: "with Cook’s Choice Unique Cookware",
      description:
        "The original Better Baker edible food bowl and mini muffin maker.",
    },
    {
      id: 3,
      src: "/cook_3.jpg",
      heading: "Revolutionize Your",
      subHeading: "Cooking Experience",
      quote: "with Cook’s Choice Unique Cookware",
      description:
        "The original Better Baker edible food bowl and mini muffin maker.",
    },
  ];
  const swiperRef1 = useRef<SwiperType | null>(null);

  return (
    <>
      <div className="relative overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef1.current = swiper;
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination1",
            bulletClass: "swiper-pagination1-bullet",
            bulletActiveClass: "swiper-pagination1-bullet-active",
          }}
          className="relative">
          {featuredImages.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="absolute transform -translate-y-1/2 left-0 right-0 top-1/2 md:top-60 z-50  text-center space-y-6">
                <h1 className="text-center font-extrabold text-4xl beton-font">
                  {product.heading.toUpperCase()} <br />
                  <span className="text-[#f47c27]">
                    {product.subHeading.toUpperCase()}
                  </span>
                </h1>
                <span className="block permanent-marker">
                  {product.quote.toUpperCase()}
                </span>
                <p className="text-lg">{product.description}</p>
                <OrangeButton text="shop now" />
              </div>
              <Image
                width={500}
                height={500}
                src={product.src}
                alt={product.heading}
                className="w-screen h-[80vh] object-cover z-40"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperRef1.current?.slidePrev()}
          className="absolute bottom-0 right-14 bg-black text-white cursor-pointer z-50 hover:text-[#f47c27] transition-colors"
          aria-label="Previous product">
          <ChevronLeft className="h-14 w-14" />
        </button>
        <button
          onClick={() => swiperRef1.current?.slideNext()}
          className="absolute bottom-0 right-0 bg-[#f47c27] text-white cursor-pointer z-10 hover:text-white  transition-colors"
          aria-label="Next product">
          <ChevronRight className="h-14 w-14" />
        </button>
      </div>
      <div className="swiper-pagination1 absolute top-0"></div>
    </>
  );
}
