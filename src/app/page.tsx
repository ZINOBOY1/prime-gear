import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FAQ from "./components/Faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <FAQ/>
      <Contact />
      <Footer />
    </main>
  );
}
