"use client";

import React, { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  User,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Image from "next/image";
import promotions from "@/data/promotions.json";

export default function Navbar() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <header className="w-full">
      {/* Promotional Banner */}
      <div className="bg-[#363636] text-white relative">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          className="h-12">
          {promotions.map((promo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-full">
                <p className="text-sm md:text-base text-center mx-10 md:mx-0">
                  {promo.title} | {promo.description}{" "}
                  <span className="text-[#f47c27] underline cursor-pointer">
                    {promo.cta}
                  </span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-2 md:left-96 top-1/2 transform -translate-y-1/2 text-white cursor-pointer z-10 hover:text-[#f47c27] transition-colors"
          aria-label="Previous promotion">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-2 md:right-96 top-1/2 transform -translate-y-1/2 text-white cursor-pointer z-10 hover:text-[#f47c27] transition-colors"
          aria-label="Next promotion">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white py-4 px-4 flex flex-wrap items-center justify-between md:justify-evenly">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 mr-6">
          <Image
            width={100}
            height={100}
            src="/cooks_logo.png"
            alt="Cook's Choice Logo"
            className="h-10"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center w-auto">
          {["HOME", "SHOP", "ABOUT US", "CONTACT"].map((item) => (
            <a
              key={item}
              href="#"
              className="block mt-4 md:inline-block md:mt-0 mr-4 text-[#363636] hover:text-[#f47c27] open-sans font-bold text-base">
              {item}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="text-[#363636]">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#363636]">
            <User className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative text-[#363636]">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 bg-[#f47c27] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              1
            </span>
          </Button>
        </div>
      </nav>
    </header>
  );
}
