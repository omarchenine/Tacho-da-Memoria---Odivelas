"use client";

import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export default function Testimonials() {
  const { t } = useLanguage();

  const reviews: Testimonial[] = [
    {
      name: "João Martins",
      location: "Odivelas",
      text: t("testimonials.review1"),
      rating: 5,
    },
    {
      name: "Ana Beatriz Costa",
      location: "Lisboa",
      text: t("testimonials.review2"),
      rating: 5,
    },
    {
      name: "Carlos Rodrigues",
      location: "Loures",
      text: t("testimonials.review3"),
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-cream/30 relative">
      {/* Decorative quotes graphic in background */}
      <div className="absolute top-10 left-10 text-olive/5 pointer-events-none select-none">
        <Quote className="h-48 w-48 rotate-180" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-terracotta text-sm font-semibold tracking-widest uppercase mb-3 block">
            {t("testimonials.subtitle")}
          </span>
          <h2 className="font-serif text-charcoal text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("testimonials.title")}
          </h2>
          <div className="h-0.5 w-20 bg-gold mx-auto mb-6" />
          <p className="text-charcoal/70 font-light text-base">
            {t("testimonials.description")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-md border border-olive/5 relative flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                {/* Review Text */}
                <p className="text-charcoal/80 font-light text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Customer Info */}
              <div className="pt-6 mt-6 border-t border-olive/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-charcoal text-base leading-none">
                    {review.name}
                  </h4>
                  <span className="text-xs text-charcoal/50 font-medium mt-1 block">
                    {t("testimonials.localClient")}, {review.location}
                  </span>
                </div>
                <Quote className="h-6 w-6 text-terracotta/20 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
