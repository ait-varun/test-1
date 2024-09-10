import Blogs from "@/components/blogs";
import InstaPosts from "@/components/instaPosts";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import FeaturedBanner from "@/components/sliders/featuredBanner";
import FeaturedProducts from "@/components/sliders/featuredProducts";
import Testimonials from "@/components/testimonials";
import WhyUs from "@/components/whyUs";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <FeaturedBanner />
        <FeaturedProducts />
        <WhyUs />
        <Testimonials />
        <Blogs />
        <InstaPosts />
        <Footer />
      </main>
    </>
  );
}
