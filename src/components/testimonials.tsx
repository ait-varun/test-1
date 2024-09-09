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
import { comment } from "postcss";

export default function Testimonials() {
  const swiperRef2 = useRef<SwiperType | null>(null);

  const testimonials = [
    {
      id: 1,
      src: "/testimonial_1.png",
      title: "Easy",
      comment:
        "It’s pretty cool making cups of cakes or brownies ect, I’m only giving it 3 stars on durability bcz it came kinda scratched and bent, but on the side, so it doesn’t bother me to continue using i",
      name: "Ashley Kay",
    },
    {
      id: 2,
      src: "/testimonial_2.png",
      title: "Endless possibilities. brownie ball, etc",
      comment:
        "This is a fun product to change it up on your meals. Cornbread bowl with chili. Brownie bowl and add ice cream after cooking. So many possibilities.",
      name: "TX Grmol",
    },
    {
      id: 3,
      src: "/testimonial_3.png",
      title: "Inspiring",
      comment:
        "Ooooh- I LOVE this pan !! It came with a booklet of recipes to try. It's very cool that you don't have to alter your regular recipes hardly at all. ",
      name: "S. Crowe",
    },
  ];

  const colors = {
    darkGray: "#363636",
    orange: "#f47c27",
    organeHover: "#e16d1e",
    offWhite: "#fbf7e9",
  };

  return (
    <>
      <section className="relative ">
        <div className="">
          <h2 className="text-4xl font-extrabold beton-font">
            WHAT CUSTOMERS SAY'S ABOUT US
          </h2>
          <span className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
            ))}
          </span>
          <p className="open-sans-italic">
            Over 5,000 5-star reviews for our award-winning products
          </p>
        </div>
        <div className="">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef2.current = swiper;
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="relative">
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Image
                    width={100}
                    height={100}
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="w-full h-auto mb-4"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => swiperRef2.current?.slidePrev()}
            className="absolute -left-4 lg:-left-8 top-1/2 transform -translate-y-1/2 text-[#363636] cursor-pointer z-10 hover:text-[#f47c27] transition-colors"
            aria-label="Previous product">
            <ChevronLeft className="h-14 w-14" />
          </button>
          <button
            onClick={() => swiperRef2.current?.slideNext()}
            className="absolute -right-4 lg:-right-8 top-1/2 transform -translate-y-1/2 text-[#363636] cursor-pointer z-10 hover:text-[#f47c27] transition-colors"
            aria-label="Next product">
            <ChevronRight className="font-thin h-14 w-14" />
          </button>
        </div>
      </section>
    </>
  );
}
