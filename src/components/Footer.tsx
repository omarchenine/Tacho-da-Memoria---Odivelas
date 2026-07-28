"use client";

import { Utensils, Phone, Mail, MapPin, Instagram, Facebook, MessageSquare } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
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
    <footer className="bg-charcoal text-cream pt-16 pb-8 border-t border-gold/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Utensils className="h-6 w-6 text-gold" />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Tacho da Memória
              </span>
            </div>
            <p className="text-sm text-cream/70 font-light leading-relaxed">
              {t("footer.brand")}
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-white/5 text-cream hover:bg-gold hover:text-charcoal transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-white/5 text-cream hover:bg-gold hover:text-charcoal transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-white/5 text-cream hover:bg-gold hover:text-charcoal transition-all duration-200"
                aria-label="TripAdvisor"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-white/10 pb-2">
              {t("footer.nav")}
            </h3>
            <ul className="space-y-2 text-sm text-cream/75 font-light">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="hover:text-gold transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleLinkClick(e, "#menu")} className="hover:text-gold transition-colors">
                  {t("footer.navMenu")}
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-gold transition-colors">
                  {t("footer.navAbout")}
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleLinkClick(e, "#gallery")} className="hover:text-gold transition-colors">
                  {t("footer.navGallery")}
                </a>
              </li>
              <li>
                <a href="#reservations" onClick={(e) => handleLinkClick(e, "#reservations")} className="hover:text-gold transition-colors">
                  {t("footer.navReserve")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-white/10 pb-2">
              {t("footer.contacts")}
            </h3>
            <ul className="space-y-3 text-sm text-cream/75 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span>Rua da Memória, 45A,<br />2675-401 Odivelas, Portugal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <a href="tel:+351210000000" className="hover:text-gold transition-colors">+351 210 000 000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a href="mailto:geral@tachodamemoria.pt" className="hover:text-gold transition-colors">geral@tachodamemoria.pt</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-white/10 pb-2">
              {t("footer.schedule")}
            </h3>
            <ul className="space-y-2 text-sm text-cream/75 font-light">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>{t("footer.tueSat")}</span>
                <span className="font-medium text-white">12:00 - 15:00<br />19:00 - 23:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>{t("footer.sunday")}</span>
                <span className="font-medium text-white">12:00 - 16:00</span>
              </li>
              <li className="flex justify-between text-gold">
                <span>{t("footer.monday")}</span>
                <span className="font-medium uppercase tracking-wider text-xs">{t("footer.closedLabel")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/50 font-light gap-4">
          <p>© {currentYear} Tacho da Memória. {t("footer.rights")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-gold transition-colors">{t("footer.terms")}</a>
            <a href="#" className="hover:text-gold transition-colors">{t("footer.complaints")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
