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
      <section className="container mx-auto h-screen">
        <div className="flex justify-between items-center mb-8">
          <h1 className="beton-font text-4xl font-extrabold py-6">BLOGS</h1>
          <OrangeButton text="view all" />
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
              <div className="rounded-lg w-56 absolute -bottom-10 left-1/4 bg-white">
                <h2 className="text-xl font-bold">{blog.title}</h2>
                <p className="text-sm">{blog.description}</p>
                <BlackButton text="read more" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
