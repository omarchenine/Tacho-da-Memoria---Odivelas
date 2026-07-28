"use client";

import { useState, useEffect } from "react";
import { Menu, X, Utensils } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ["home", "menu", "about", "gallery", "reservations", "contact"];
      const scrollPosition = window.scrollY + 120; // offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "#home", id: "home" },
    { name: t("nav.menu"), href: "#menu", id: "menu" },
    { name: t("nav.about"), href: "#about", id: "about" },
    { name: t("nav.gallery"), href: "#gallery", id: "gallery" },
    { name: t("nav.contact"), href: "#contact", id: "contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // navbar height
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

  const languages: { code: Language; key: string }[] = [
    { code: "pt", key: "lang.pt" },
    { code: "en", key: "lang.en" },
    { code: "es", key: "lang.es" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center gap-2 text-charcoal hover:opacity-90 transition-opacity"
            >
              <Utensils className="h-6 w-6 text-terracotta" />
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                Tacho da Memória
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                  activeSection === link.id
                    ? "text-terracotta"
                    : "text-charcoal/80 hover:text-charcoal"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-terracotta rounded-full transition-all duration-300" />
                )}
              </a>
            ))}

            {/* Desktop Language Switcher */}
            <div className="flex items-center gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${
                    language === lang.code
                      ? "bg-terracotta text-cream"
                      : "text-charcoal/60 hover:text-charcoal"
                  }`}
                >
                  {t(lang.key)}
                </button>
              ))}
            </div>

            <a
              href="#reservations"
              onClick={(e) => handleLinkClick(e, "#reservations")}
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded bg-olive text-cream hover:bg-olive-dark hover:shadow-md transition-all duration-200"
            >
              {t("nav.reserve")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-charcoal hover:text-terracotta hover:bg-cream/50 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{t("nav.mobileMenu")}</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-cream/95 backdrop-blur-lg border-b border-olive/10 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-3 pb-6 space-y-2 sm:px-3 text-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                activeSection === link.id
                  ? "text-terracotta bg-olive/5"
                  : "text-charcoal/80 hover:text-terracotta hover:bg-olive/5"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Language Switcher & Reserve CTA */}
          <div className="pt-4 border-t border-olive/10 px-3 flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors ${
                    language === lang.code
                      ? "bg-terracotta text-cream"
                      : "text-charcoal/60 hover:text-charcoal"
                  }`}
                >
                  {t(lang.key)}
                </button>
              ))}
            </div>

            <a
              href="#reservations"
              onClick={(e) => handleLinkClick(e, "#reservations")}
              className="block w-full py-3 px-4 rounded text-center text-base font-medium bg-terracotta text-cream hover:bg-terracotta-dark shadow transition-all duration-200"
            >
              {t("nav.reserve")}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
