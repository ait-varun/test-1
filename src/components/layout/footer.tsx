import { Facebook, Instagram, Youtube, Music2 } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
        {/* Subscribe Newsletter */}
        <div className="space-y-6 ps-8 lg:ps-32 flex justify-center flex-col items-left bg-[#D6D1CE] md:col-span-2 py-12">
          <Image
            src="/cooks_logo.png"
            alt="Cook's Choice"
            width={150}
            height={100}
          />
          <div className="text-black">
            <h3 className="font-bold mb-2">SUBSCRIBE OUR NEWSLETTER</h3>
            <div className="flex relative pe-6">
              <input
                type="email"
                placeholder="example@example.com"
                className="flex-grow p-2 rounded-3xl"
              />
              <Image
                src="/email-icon.svg"
                alt="email-icon"
                width={20}
                height={20}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 -translate-x-2 rounded-3xl"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="bg-orange-500 p-2 rounded-full">
              <Facebook size={20} color="white" />
            </a>
            <a href="#" className="bg-orange-500 p-2 rounded-full">
              <Instagram size={20} color="white" />
            </a>
            <a href="#" className="bg-orange-500 p-2 rounded-full">
              <Youtube size={20} color="white" />
            </a>
            <a href="#" className="bg-orange-500 p-2 rounded-full">
              <Music2 size={20} color="white" />
            </a>
          </div>
        </div>

        {/* Quick Links, Collections, Contact Us */}
        <div className="grid grid-cols-2 md:grid-cols-3  gap-2 text-left bg-[#EFEBE8] text-black p-6 md:col-span-3 py-12 px-12">
          <div>
            <h3 className="font-bold mb-4 ">QUICK LINKS</h3>
            <ul className="space-y-2">
              {["Home", "Shop", "Services", "About", "FAQ", "Contact"].map(
                (item) => (
                  <li key={item} className="font-semibold">
                    <a href="#" className="hover:text-orange-500">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">COLLECTIONS</h3>
            <ul className="space-y-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <li key={num} className="font-semibold">
                  <a href="#" className="hover:text-orange-500">
                    CATEGORIES {num}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4 pt-6 md:pt-0">
            <h3 className="font-bold">CONTACT US</h3>
            <ul className="space-y-4 font-semibold">
              <li className="flex gap-2 items-center">
                <span className="bg-orange-500 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-white">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                112&nbsp;Address Street&nbsp;No.122 USA,&nbsp;11222
              </li>
              <li className="flex items-center">
                <span className="bg-orange-500 p-2 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-white">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                example@gmail.com
              </li>
              <li className="flex items-center">
                <span className="bg-orange-500 p-2 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-white">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                123456 444 55555
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 py-4 text-center bg-black text-white">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            © 2023 COOK&apos;S CHOICE |
            <a href="#" className="mx-2 hover:text-orange-500">
              Refund policy
            </a>{" "}
            |
            <a href="#" className="mx-2 hover:text-orange-500">
              Privacy policy
            </a>{" "}
            |
            <a href="#" className="mx-2 hover:text-orange-500">
              Terms of service
            </a>{" "}
            |
            <a href="#" className="mx-2 hover:text-orange-500">
              Shipping policy
            </a>
          </div>
          <Image
            src="/footergroup.png"
            alt="Cook's Choice"
            width={500}
            height={50}
            className="h-auto w-auto"
          />
        </div>
      </div>
    </footer>
  );
}
