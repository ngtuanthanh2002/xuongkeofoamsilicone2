import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Specs from "@/components/Specs";
import Gallery from "@/components/Gallery";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <Specs />
        <Gallery />
        <Certifications />
        <Testimonials />
        <OrderForm />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
