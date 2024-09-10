"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as featuredBannerSwiper } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import OrangeButton from "../common/orangeButton";
import featuredImages from "@/data/featuredImages.json";

export default function FeaturedBanner() {
  const featuredBannerSwiperRef = useRef<featuredBannerSwiper | null>(null);

  return (
    <>
      <div className="relative overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => {
            featuredBannerSwiperRef.current = swiper;
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination1",
            bulletClass: "swiper-pagination1-bullet",
            bulletActiveClass: "swiper-pagination1-bullet-active",
          }}
          className="">
          {featuredImages.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="absolute transform -translate-y-1/2 left-0 right-0 top-1/2 md:top-1/3 z-50  text-center space-y-2">
                <h1 className="text-center font-extrabold text-3xl md:text-5xl beton-font">
                  {product.heading.toUpperCase()} <br />
                  <span className="text-[#f47c27]">
                    {product.subHeading.toUpperCase()}
                  </span>
                </h1>
                <span className="block permanent-marker text-lg md:text-xl">
                  {product.quote.toUpperCase()}
                </span>
                <p className="text-xl px-2 md:px-0">{product.description}</p>
                <OrangeButton text="shop now" />
              </div>
              <Image
                width={500}
                height={500}
                src={product.src}
                alt={product.heading}
                className="w-[120vw] lg:w-screen h-[70vh] md:h-[80vh] object-cover z-40"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => featuredBannerSwiperRef.current?.slidePrev()}
          className="absolute bottom-0 right-14 bg-black text-white cursor-pointer z-50 hover:text-[#f47c27] transition-colors"
          aria-label="Previous product">
          <ChevronLeft className="h-14 w-14" />
        </button>
        <button
          onClick={() => featuredBannerSwiperRef.current?.slideNext()}
          className="absolute bottom-0 right-0 bg-[#f47c27] text-white cursor-pointer z-10 hover:text-white  transition-colors"
          aria-label="Next product">
          <ChevronRight className="h-14 w-14" />
        </button>
      </div>
      <div className="swiper-pagination1 absolute top-0"></div>
    </>
  );
}
