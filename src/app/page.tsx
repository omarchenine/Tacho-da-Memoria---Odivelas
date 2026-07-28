import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import ReservationForm from "@/components/ReservationForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Premium Sticky Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Full-width Hero Section */}
        <Hero />

        {/* Signature Dishes Preview */}
        <FeaturedDishes />

        {/* Story & Philosophy Section */}
        <AboutSection />

        {/* Filterable Menu Section */}
        <MenuSection />

        {/* Masonry Gallery & Lightbox */}
        <GallerySection />

        {/* Customer Testimonials */}
        <Testimonials />

        {/* Reservations Booking Form */}
        <ReservationForm />

        {/* Contact Details & Interactive Map */}
        <ContactSection />
      </main>

      {/* Footer Details */}
      <Footer />
    </>
  );
}
