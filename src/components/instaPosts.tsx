import Image from "next/image";

export default function InstaPosts() {
  const InstaImages = [
    "/insta_1.png",
    "/insta_2.png",
    "/insta_3.png",
    "/insta_4.png",
    "/insta_5.png",
  ];

  return (
    <>
      <section className="w-full">
        <h1 className="beton-font text-4xl text-center font-extrabold py-6">
          INSTAGRAM
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-0">
          {InstaImages.map((image, index) => {
            return (
              <div key={index} className="w-full">
                <Image
                  src={image}
                  width={100}
                  height={100}
                  alt={`insta-image-${index}`}
                  className="w-full h-auto object-cover border-white border"
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
