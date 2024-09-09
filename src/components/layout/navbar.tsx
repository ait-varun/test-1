"use client";

import React, { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  User,
  ShoppingCart,
  Menu,
  X,
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["HOME", "SHOP", "ABOUT US", "BLOG", "CONTACT"];

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
      <nav className="bg-white p-4 flex items-center justify-between md:justify-evenly relative">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/cooks_logo.png"
            alt="Cook's Choice Logo"
            className="w-40"
            width={100}
            height={100}
          />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block mt-4 md:inline-block md:mt-0 mr-4 text-[#363636] hover:text-[#f47c27] font-bold">
              {item}
            </a>
          ))}
        </div>

        {/* Icons and Hamburger Menu */}
        <div className="flex items-center">
          <div className="md:flex items-center">
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

          {/* Hamburger Menu Button (Mobile) */}
          <button
            className="md:hidden text-[#363636] hover:text-[#f47c27] transition-colors ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2 text-center px-4 text-[#363636] hover:text-[#f47c27] font-bold border-b border-gray-200">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

