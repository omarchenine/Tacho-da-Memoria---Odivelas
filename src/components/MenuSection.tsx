"use client";

import { useState } from "react";
import Image from "next/image";
import { Leaf, Award, Compass } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  tags?: { label: string; type: "vegetarian" | "award" | "house" | "spicy" }[];
}

export default function MenuSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { key: "all", name: t("menu.cat.all") },
    { key: "starters", name: t("menu.cat.starters") },
    { key: "fish", name: t("menu.cat.fish") },
    { key: "meat", name: t("menu.cat.meat") },
    { key: "vegetarian", name: t("menu.cat.vegetarian") },
    { key: "desserts", name: t("menu.cat.desserts") },
    { key: "wines", name: t("menu.cat.wines") },
  ];

  const menuItems: MenuItem[] = [
    // STARTERS
    {
      name: t("dish.tabua.name"),
      description: t("dish.tabua.desc"),
      price: "14.00€",
      category: "starters",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=80",
      tags: [{ label: t("tag.recommended"), type: "house" }],
    },
    {
      name: t("dish.bolinhos.name"),
      description: t("dish.bolinhos.desc"),
      price: "6.50€",
      category: "starters",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: t("dish.ameijoas.name"),
      description: t("dish.ameijoas.desc"),
      price: "16.50€",
      category: "starters",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80",
      tags: [{ label: t("tag.specialty"), type: "award" }],
    },
    // FISH
    {
      name: t("dish.bacalhau.name"),
      description: t("dish.bacalhau.desc"),
      price: "24.50€",
      category: "fish",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80",
      tags: [{ label: t("tag.popular"), type: "award" }, { label: t("tag.signature"), type: "house" }],
    },
    {
      name: t("dish.polvo.name"),
      description: t("dish.polvo.desc"),
      price: "26.00€",
      category: "fish",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: t("dish.arroz.name"),
      description: t("dish.arroz.desc"),
      price: "42.00€",
      category: "fish",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80",
    },
    // MEAT
    {
      name: t("dish.posta.name"),
      description: t("dish.posta.desc"),
      price: "26.50€",
      category: "meat",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
      tags: [{ label: t("tag.chargrilled"), type: "house" }],
    },
    {
      name: t("dish.secretos.name"),
      description: t("dish.secretos.desc"),
      price: "19.50€",
      category: "meat",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: t("dish.bochechas.name"),
      description: t("dish.bochechas.desc"),
      price: "18.50€",
      category: "meat",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
      tags: [{ label: t("tag.traditional"), type: "house" }],
    },
    // VEGETARIAN
    {
      name: t("dish.feijoada.name"),
      description: t("dish.feijoada.desc"),
      price: "15.50€",
      category: "vegetarian",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=500&q=80",
      tags: [{ label: t("tag.plantBased"), type: "vegetarian" }],
    },
    {
      name: t("dish.risotto.name"),
      description: t("dish.risotto.desc"),
      price: "16.00€",
      category: "vegetarian",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=500&q=80",
      tags: [{ label: t("tag.vegetarian"), type: "vegetarian" }],
    },
    // DESSERTS
    {
      name: t("dish.nata.name"),
      description: t("dish.nata.desc"),
      price: "4.50€",
      category: "desserts",
      image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=500&q=80",
      tags: [{ label: t("tag.familyRecipe"), type: "house" }],
    },
    {
      name: t("dish.pudim.name"),
      description: t("dish.pudim.desc"),
      price: "5.50€",
      category: "desserts",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80",
      tags: [{ label: t("tag.tradition"), type: "award" }],
    },
    {
      name: t("dish.mousse.name"),
      description: t("dish.mousse.desc"),
      price: "4.50€",
      category: "desserts",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80",
    },
    // WINES
    {
      name: t("dish.alvarinho.name"),
      description: t("dish.alvarinho.desc"),
      price: "17.00€",
      category: "wines",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: t("dish.papafigos.name"),
      description: t("dish.papafigos.desc"),
      price: "19.50€",
      category: "wines",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: t("dish.porto.name"),
      description: t("dish.porto.desc"),
      price: "6.50€",
      category: "wines",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const filteredItems = activeCategory === "all"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const getTagStyle = (type: string) => {
    switch (type) {
      case "vegetarian":
        return "bg-olive/10 text-olive-dark border-olive/20";
      case "award":
        return "bg-gold/10 text-gold-dark border-gold/20";
      case "house":
        return "bg-terracotta/10 text-terracotta border-terracotta/20";
      default:
        return "bg-charcoal/10 text-charcoal border-charcoal/20";
    }
  };

  const getTagIcon = (type: string) => {
    switch (type) {
      case "vegetarian":
        return <Leaf className="h-3 w-3 shrink-0" />;
      case "award":
        return <Award className="h-3 w-3 shrink-0" />;
      case "house":
        return <Compass className="h-3 w-3 shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-serif text-terracotta text-sm font-semibold tracking-widest uppercase mb-3 block">
            {t("menu.subtitle")}
          </span>
          <h2 className="font-serif text-charcoal text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("menu.title")}
          </h2>
          <div className="h-0.5 w-20 bg-gold mx-auto mb-6" />
          <p className="text-charcoal/70 font-light text-base sm:text-lg">
            {t("menu.description")}
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 max-w-4xl mx-auto border-b border-olive/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 text-sm font-medium tracking-wide rounded-full transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-olive text-cream shadow-md"
                  : "text-charcoal/70 hover:text-charcoal hover:bg-cream"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 min-h-[400px]">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-olive/10 hover:border-gold/30 transition-colors duration-300 group"
            >
              {/* Dish Thumbnail */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden shrink-0 bg-zinc-100 shadow-sm">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="112px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Dish Content */}
              <div className="flex-grow text-center sm:text-left space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal group-hover:text-terracotta transition-colors duration-200">
                    {item.name}
                  </h3>
                  <span className="text-terracotta font-serif text-lg font-bold">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-charcoal/70 text-xs sm:text-sm font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1.5">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border text-[10px] font-semibold uppercase tracking-wider ${getTagStyle(
                          tag.type
                        )}`}
                      >
                        {getTagIcon(tag.type)}
                        <span>{tag.label}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Allergy Warning */}
        <div className="mt-16 text-center text-xs text-charcoal/50 font-light max-w-2xl mx-auto bg-cream/30 border border-olive/5 py-4 px-6 rounded">
          {t("menu.allergen")}
        </div>
      </div>
    </section>
  );
}
