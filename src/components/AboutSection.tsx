"use client";

import Image from "next/image";
import { UtensilsCrossed, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  const highlights = [
    t("about.highlight1"),
    t("about.highlight2"),
    t("about.highlight3"),
    t("about.highlight4"),
  ];

  return (
    <section id="about" className="py-24 bg-cream/40 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%25234A533C' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-8 animate-fade-in">
            <div>
              <span className="font-serif text-terracotta text-sm font-semibold tracking-widest uppercase mb-3 block">
                {t("about.subtitle")}
              </span>
              <h2 className="font-serif text-charcoal text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                {t("about.title")}
              </h2>
              <div className="h-0.5 w-20 bg-gold mb-6" />
            </div>

            <p className="text-charcoal/80 text-base sm:text-lg font-light leading-relaxed">
              {t("about.p1")}
            </p>

            <p className="text-charcoal/70 text-sm sm:text-base font-light leading-relaxed">
              {t("about.p2")}
            </p>

            {/* Bullets List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-olive shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-charcoal/80 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Signature Block */}
            <div className="flex items-center gap-4 pt-6 border-t border-olive/10">
              <div className="h-12 w-12 rounded-full bg-olive/10 flex items-center justify-center text-olive">
                <UtensilsCrossed className="h-6 w-6" />
              </div>
              <div>
                <span className="block font-serif text-lg font-bold text-charcoal leading-none">
                  Família Silva
                </span>
                <span className="text-xs text-charcoal/50 uppercase tracking-widest font-semibold mt-1 block">
                  {t("about.founders")}
                </span>
              </div>
            </div>
          </div>

          {/* Overlapping Images Column */}
          <div className="lg:col-span-6 relative h-[480px] sm:h-[600px] w-full max-w-md lg:max-w-none mx-auto">
            {/* Background Accent Square */}
            <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-dashed border-gold/30 rounded-lg pointer-events-none hidden sm:block" />

            {/* Image 1 - Dining Atmosphere */}
            <div className="absolute top-0 right-4 w-4/5 h-[280px] sm:h-[350px] rounded-lg overflow-hidden shadow-lg border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
                alt={t("about.img1")}
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Image 2 - Culinary Prep in Kitchen */}
            <div className="absolute bottom-4 left-4 w-[70%] h-[200px] sm:h-[260px] rounded-lg overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-300 z-10">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
                alt={t("about.img2")}
                fill
                sizes="(max-width: 768px) 60vw, 30vw"
                className="object-cover"
              />
            </div>

            {/* Floating Gold Medal Tag */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5 py-4 rounded shadow-xl border border-gold/20 flex items-center gap-3 max-w-[200px] z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <Sparkles className="h-6 w-6 text-gold shrink-0" />
              <span className="text-xs font-serif font-bold text-charcoal leading-snug">
                {t("about.freshBadge")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
