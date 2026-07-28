"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  // Google Maps embed URL for the exact business address
  const mapEmbedUrl = "https://maps.google.com/maps?q=Rua%20Francisco%20Relvas%20Marques%202,%20Odivelas,%20Portugal&output=embed";

  const contacts = [
    {
      icon: <MapPin className="h-6 w-6 text-terracotta" />,
      title: t("contact.location"),
      content: "Rua Francisco Relvas Marques 2, Odivelas, Portugal",
      link: "https://maps.google.com/?q=Rua+Francisco+Relvas+Marques+2,+Odivelas,+Portugal",
      linkText: t("contact.directions"),
      external: true,
    },
    {
      icon: <Phone className="h-6 w-6 text-terracotta" />,
      title: t("contact.phoneTitle"),
      content: "+351 962 708 627",
      link: "tel:+351962708627",
      linkText: t("contact.callToReserve"),
      external: false,
    },
    {
      icon: <Mail className="h-6 w-6 text-terracotta" />,
      title: t("contact.emailTitle"),
      content: "restaurantetachodamemoria@gmail.com",
      link: "mailto:restaurantetachodamemoria@gmail.com",
      linkText: t("contact.sendEmail"),
      external: false,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-terracotta text-sm font-semibold tracking-widest uppercase mb-3 block">
            {t("contact.subtitle")}
          </span>
          <h2 className="font-serif text-charcoal text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("contact.title")}
          </h2>
          <div className="h-0.5 w-20 bg-gold mx-auto mb-6" />
          <p className="text-charcoal/70 font-light text-base">
            {t("contact.description")}
          </p>
        </div>

        {/* Outer Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details & Hours (7 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            
            {/* Quick Contacts */}
            <div className="space-y-6">
              {contacts.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-lg border border-olive/5 bg-cream/20 hover:border-gold/30 hover:shadow-sm transition-all duration-300">
                  <div className="p-3 bg-white rounded-lg shadow-sm shrink-0 flex items-center justify-center h-12 w-12 border border-olive/5">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-base font-bold text-charcoal">{item.title}</h3>
                    <p className="text-sm text-charcoal/80 font-light leading-relaxed">{item.content}</p>
                    <a
                      href={item.link}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="inline-block text-xs font-semibold text-olive hover:text-terracotta transition-colors pt-1"
                    >
                      {item.linkText} →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Opening Hours Card */}
            <div className="p-6 rounded-lg border border-olive/5 bg-charcoal text-cream space-y-4 shadow-md">
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold" /> {t("contact.hours")}
              </h3>
              <div className="h-px bg-white/10 w-full" />
              <ul className="space-y-3 text-sm text-cream/80 font-light">
                <li className="flex justify-between border-b border-white/5 pb-1.5">
                  <span>{t("contact.tueSat")}</span>
                  <span className="font-medium text-white text-right">
                    12:00 - 15:00 <br />
                    19:00 - 23:00
                  </span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-1.5">
                  <span>{t("contact.sunday")}</span>
                  <span className="font-medium text-white">12:00 - 16:00</span>
                </li>
                <li className="flex justify-between text-gold font-medium">
                  <span>{t("contact.monday")}</span>
                  <span className="uppercase tracking-wider text-xs">{t("contact.closed")}</span>
                </li>
              </ul>
            </div>
            
          </div>

          {/* Map Embed (7 cols on lg) */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto rounded-xl overflow-hidden shadow-lg border border-olive/10 relative group">
            <iframe
              title="Google Map - Tacho da Memória em Odivelas"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[15%] contrast-[110%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
