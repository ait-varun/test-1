import Blogs from "@/components/blogs";
import InstaPosts from "@/components/instaPosts";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import FeaturedBanner from "@/components/sliders/featuredBanner";
import FeaturedProducts from "@/components/sliders/featuredProducts";
import WhyUs from "@/components/whyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <FeaturedBanner />
      <FeaturedProducts />
      <WhyUs />
      <Blogs />
      <InstaPosts />
      <Footer />
    </>
  );
}
