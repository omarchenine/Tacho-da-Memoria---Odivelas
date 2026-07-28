"use client";

import Image from "next/image";
import { ArrowRight, Flame, Heart, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface Dish {
  name: string;
  description: string;
  price: string;
  badge: string;
  badgeIcon: React.ReactNode;
  image: string;
}

export default function FeaturedDishes() {
  const { t } = useLanguage();

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

  const featuredDishes: Dish[] = [
    {
      name: t("featured.dish1.name"),
      description: t("featured.dish1.description"),
      price: "24.50€",
      badge: t("featured.dish1.badge"),
      badgeIcon: <Heart className="h-3.5 w-3.5" />,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: t("featured.dish2.name"),
      description: t("featured.dish2.description"),
      price: "26.50€",
      badge: t("featured.dish2.badge"),
      badgeIcon: <Flame className="h-3.5 w-3.5" />,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: t("featured.dish3.name"),
      description: t("featured.dish3.description"),
      price: "7.50€",
      badge: t("featured.dish3.badge"),
      badgeIcon: <Star className="h-3.5 w-3.5" />,
      image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-24 bg-cream/30 relative">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-olive/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-terracotta text-sm font-semibold tracking-widest uppercase mb-3 block">
            {t("featured.subtitle")}
          </span>
          <h2 className="font-serif text-charcoal text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("featured.title")}
          </h2>
          <div className="h-0.5 w-20 bg-gold mx-auto mb-6" />
          <p className="text-charcoal/70 font-light text-base sm:text-lg">
            {t("featured.description")}
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredDishes.map((dish, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden border border-olive/5 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-zinc-100">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur shadow-sm text-xs font-semibold text-terracotta tracking-wider uppercase">
                  {dish.badgeIcon}
                  <span>{dish.badge}</span>
                </div>
              </div>

              {/* Dish Info */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-baseline gap-2 mb-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal group-hover:text-terracotta transition-colors duration-200">
                    {dish.name}
                  </h3>
                  <span className="text-terracotta font-serif text-xl font-bold shrink-0">
                    {dish.price}
                  </span>
                </div>
                <p className="text-charcoal/70 text-sm font-light leading-relaxed mb-6 flex-grow">
                  {dish.description}
                </p>
                <div className="h-px bg-olive/10 w-full mb-4" />
                <div className="text-xs font-semibold text-olive uppercase tracking-widest flex items-center gap-1">
                  {t("featured.national")}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Link */}
        <div className="text-center">
          <a
            href="#menu"
            onClick={handleScrollToMenu}
            className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark font-medium tracking-wide border-b border-terracotta/20 hover:border-terracotta-dark transition-all duration-300 pb-1"
          >
            {t("featured.explore")}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
