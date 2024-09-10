import Image from "next/image";
import OrangeButton from "./common/orangeButton";
import BlackButton from "./common/blackButton";
import blogs from "@/data/blogs.json";

export default function Blogs() {

  return (
    <>
      <section className="px-6 md:px-16 mb-56">
        <div className="flex justify-between items-center mb-8">
          <h1 className="beton-font text-4xl font-extrabold py-6">BLOGS</h1>
          <OrangeButton text="view all" />
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-56 md:gap-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col gap-4 rounded-lg relative">
              <Image
                src={blog.src}
                alt={blog.name}
                width={500}
                height={500}
                className="rounded-lg w-auto h-auto"
              />
              <div className="rounded-3xl w-[80%] absolute -bottom-48 md:-bottom-52 xl:-bottom-44 left-[10%] bg-white p-6">
                <h2 className="text-xl font-bold beton-font">{blog.title}</h2>
                <p className="text-base font-bold mb-6">{blog.description}</p>
                <BlackButton text="read more" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
