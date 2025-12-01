import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../../components/Navbar";
import Hero from "../../components/landingpage/Hero";
import Services from "../../components/landingpage/Services";
import TopDestinations from "../../components/landingpage/TopDestinations";
import Process from "../../components/landingpage/Process";
import Packages from "../../components/landingpage/Packages";
import Footer from "../../components/landingpage/Footer";

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const heroImage = "/home.jpeg"; // replace to "/Homepage.jpg" if you move to public/
  const packages = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: ["Ain Dubai", "Amalfi Coast", "Sydney", "Historical place", "Sea Area", "City Tour"][i % 6],
    price: (150 + i * 30).toFixed(2),
    rating: 4.8,
    img: heroImage,
    featured: i % 3 === 1,
  }));

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* Hero - fade-down for a smoother entrance */}
      <div data-aos="fade-down" data-aos-duration="900">
        <Hero heroSrc={heroImage} />
      </div>

      {/* Services - fade-up with small delay */}
      <div data-aos="fade-up" data-aos-delay="140">
        <Services />
      </div>

      {/* Top Destinations - zoom-in */}
      <div data-aos="zoom-in" data-aos-delay="200">
        <TopDestinations/>
      </div>

      {/* Process - fade-up */}
      <div data-aos="fade-up" data-aos-delay="260">
        <Process />
      </div>

      {/* Packages - fade-up with bigger delay */}
      <div data-aos="fade-up" data-aos-delay="320">
        <Packages />
      </div>

      {/* Footer - fade-up */}
      <div data-aos="fade-up" data-aos-delay="380">
        <Footer />
      </div>
    </div>
  );
}
