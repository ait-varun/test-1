import InstaPosts from "@/components/instaPosts";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import FeaturedProducts from "@/components/sliders/featuredProducts";
import WhyUs from "@/components/whyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <FeaturedProducts />
      <WhyUs />
      <InstaPosts />
      <Footer />
    </>
  );
}
