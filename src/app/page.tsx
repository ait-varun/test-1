import InstaPosts from "@/components/instaPosts";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import FeaturedProducts from "@/components/sliders/featuredProducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <FeaturedProducts />
      <InstaPosts />
      <Footer />
    </>
  );
}
