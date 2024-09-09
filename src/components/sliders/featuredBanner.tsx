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

export default function FeaturedBanner() {
  const featuredImages = ["/cook_1.jpg", "/cook_2.jpg", "/cook_3.jpg"];
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
          {featuredImages.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="">
                <Image
                  width={500}
                  height={500}
                  src={product}
                  alt={product}
                  className="w-screen h-[80vh]"
                />
              </div>
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
