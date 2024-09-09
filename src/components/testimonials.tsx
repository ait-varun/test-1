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

export default function Testimonials() {
  const swiperRef2 = useRef<SwiperType | null>(null);

  const testimonials = [
    {
      id: 1,
      src: "/testimonial_1.png",
      title: "Easy",
      comment:
        "It's pretty cool making cups of cakes or brownies ect, I'm only giving it 3 stars on durability bcz it came kinda scratched and bent, but on the side, so it doesn't bother me to continue using i",
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
    {
      id: 4,
      src: "/testimonial_1.png",
      title: "Easy",
      comment:
        "It's pretty cool making cups of cakes or brownies ect, I'm only giving it 3 stars on durability bcz it came kinda scratched and bent, but on the side, so it doesn't bother me to continue using i",
      name: "Ashley Kay",
    },
    {
      id: 5,
      src: "/testimonial_2.png",
      title: "Endless possibilities. brownie ball, etc",
      comment:
        "This is a fun product to change it up on your meals. Cornbread bowl with chili. Brownie bowl and add ice cream after cooking. So many possibilities.",
      name: "TX Grmol",
    },
    {
      id: 6,
      src: "/testimonial_3.png",
      title: "Inspiring",
      comment:
        "Ooooh- I LOVE this pan !! It came with a booklet of recipes to try. It's very cool that you don't have to alter your regular recipes hardly at all. ",
      name: "S. Crowe",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8 relative">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-4xl font-extrabold beton-font mb-4">
            WHAT CUSTOMERS SAY ABOUT US
          </h2>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
            ))}
          </div>
          <p className="open-sans-italic mb-4 text-3xl">
            Over 5,000 5-star reviews for our award-winning products
          </p>
        </div>

        <div className="md:w-full overflow-hidden">
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
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="">
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-[#f6efea] p-6 rounded-3xl text-center">
                  <div className="flex items-center justify-center">
                    <Image
                      width={100}
                      height={100}
                      src={testimonial.src}
                      alt={testimonial.name}
                      className="w-32 h-auto mb-4"
                    />
                  </div>
                  <h3 className="font-bold mb-2 beton-font text-xl">
                    {testimonial.title}
                  </h3>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-orange-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="mb-2 text-base">{testimonial.comment}</p>
                  <p className="text-2xl permanent-marker font-semibold text-[#f47c27]">
                    — {testimonial.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => swiperRef2.current?.slidePrev()}
            className="absolute bottom-[10%] left-0 transform -translate-y-1/2 text-[#363636] cursor-pointer z-10 hover:text-[#f47c27] transition-colors hidden md:block"
            aria-label="Previous testimonial ">
            <ChevronLeft className="h-14 w-14" />
          </button>
          <button
            onClick={() => swiperRef2.current?.slideNext()}
            className="absolute bottom-[10%] left-10 transform -translate-y-1/2 text-[#363636] cursor-pointer z-10 hover:text-[#f47c27] transition-colors hidden md:block"
            aria-label="Next testimonial ">
            <ChevronRight className="h-14 w-14" />
          </button>
        </div>
      </div>
    </section>
  );
}
