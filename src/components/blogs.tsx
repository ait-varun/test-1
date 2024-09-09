import Image from "next/image";
import OrangeButton from "./common/orangeButton";
import BlackButton from "./common/blackButton";

export default function Blogs() {
  const blogs = [
    {
      id: 3,
      src: "/blog_3.png",
      name: "Blog 3",
      title: "Blog Title",
      description:
        "Cooking bacon has never been easier, the Bacon Wizard is a great gift and perfect for holiday cooking, dorm room...",
    },
    {
      id: 2,
      src: "/blog_2.png",
      name: "Blog 2",
      title: "Blog Title",
      description:
        "Cooking bacon has never been easier, the Bacon Wizard is a great gift and perfect for holiday cooking, dorm room...",
    },
    {
      id: 1,
      src: "/blog_1.png",
      name: "Blog 1",
      title: "Blog Title",
      description:
        "Cooking bacon has never been easier, the Bacon Wizard is a great gift and perfect for holiday cooking, dorm room...",
    },
  ];
  return (
    <>
      <section className="px-6 md:px-8 mb-56">
        <div className="flex justify-between items-center mb-8">
          <h1 className="beton-font text-4xl font-extrabold py-6">BLOGS</h1>
          <OrangeButton text="view all" />
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-56 md:gap-0">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col gap-4 p-6 rounded-lg relative">
              <Image
                src={blog.src}
                alt={blog.name}
                width={500}
                height={500}
                className="rounded-lg"
              />
              <div className="rounded-3xl w-[70%] absolute -bottom-44 md:-bottom-52 xl:-bottom-40 left-[15%] bg-white p-6">
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
