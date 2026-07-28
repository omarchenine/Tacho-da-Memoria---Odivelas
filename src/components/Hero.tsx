"use client";

import { Calendar, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const handleScrollToReservations = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("reservations");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("menu");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/65 backdrop-blur-[1px]" />

      {/* Decorative Gold Elements */}
      <div className="absolute inset-y-12 left-12 right-12 border border-gold/10 pointer-events-none hidden md:block" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 animate-fade-in-up">
        <span className="font-serif text-gold text-lg md:text-xl font-medium tracking-widest uppercase mb-4 block">
          {t("hero.welcome")}
        </span>
        <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6 text-balance">
          {t("hero.headline1")}<br className="hidden sm:inline" />{" "}
          <span className="text-gold italic font-normal font-serif">{t("hero.headline2")}</span>
        </h1>
        <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
          {t("hero.subtitle")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#reservations"
            onClick={handleScrollToReservations}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded bg-terracotta text-cream hover:bg-terracotta-dark hover:shadow-lg transition-all duration-300 gap-2 group"
          >
            <Calendar className="h-5 w-5 text-cream/80 group-hover:scale-110 transition-transform" />
            {t("hero.cta.reserve")}
          </a>
          <a
            href="#menu"
            onClick={handleScrollToMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-cream/35 text-base font-medium rounded text-white hover:border-white hover:bg-white/5 transition-all duration-300"
          >
            {t("hero.cta.menu")}
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer animate-bounce">
        <a href="#menu" onClick={handleScrollToMenu} aria-label={t("hero.cta.menu")}>
          <ChevronDown className="h-8 w-8 text-gold hover:text-white transition-colors" />
        </a>
      </div>
    </section>
  );
}
