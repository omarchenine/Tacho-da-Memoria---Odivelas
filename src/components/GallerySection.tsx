"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  aspect: "landscape" | "portrait" | "square";
}

export default function GallerySection() {
  const { t } = useLanguage();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const images: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
      alt: "Arroz de Marisco Tradicional",
      caption: "O nosso afamado Arroz de Marisco caldoso servido em tacho de barro.",
      aspect: "landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
      alt: "Sala Principal do Restaurante",
      caption: "Um espaço acolhedor e rústico que o faz sentir em casa.",
      aspect: "portrait",
    },
    {
      src: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
      alt: "Azeites e Ingredientes Naturais",
      caption: "Azeite virgem extra e ervas frescas do campo, a base do nosso sabor.",
      aspect: "portrait",
    },
    {
      src: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
      alt: "Pastéis de Nata Caseiros",
      caption: "Pastéis de nata quentinhos, confecionados diariamente na nossa cozinha.",
      aspect: "landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
      alt: "Brinde com Vinho do Douro",
      caption: "Selecione o melhor acompanhamento da nossa variada carta de vinhos.",
      aspect: "portrait",
    },
    {
      src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      alt: "Preparação na Cozinha",
      caption: "Cozinhamos lentamente, honrando as receitas tradicionais.",
      aspect: "landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
      alt: "Brinde entre Amigos",
      caption: "Momentos inesquecíveis partilhados à mesa do Tacho.",
      aspect: "landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
      alt: "Mesa Posta com Vinho",
      caption: "Detalhe do acolhimento que preparamos para cada cliente.",
      aspect: "portrait",
    },
  ];

  const handleNext = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % images.length);
    }
  }, [selectedIdx, images.length]);

  const handlePrev = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
    }
  }, [selectedIdx, images.length]);

  const handleClose = () => {
    setSelectedIdx(null);
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, handleNext, handlePrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIdx]);

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-terracotta text-sm font-semibold tracking-widest uppercase mb-3 block">
            {t("gallery.subtitle")}
          </span>
          <h2 className="font-serif text-charcoal text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("gallery.title")}
          </h2>
          <div className="h-0.5 w-20 bg-gold mx-auto mb-6" />
          <p className="text-charcoal/70 font-light text-base sm:text-lg">
            {t("gallery.description")}
          </p>
        </div>

        {/* Masonry Columns Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="break-inside-avoid relative rounded-lg overflow-hidden group cursor-pointer border border-olive/5 shadow-sm hover:shadow-lg transition-all duration-300 bg-zinc-100"
              onClick={() => setSelectedIdx(idx)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={image.aspect === "portrait" ? 800 : image.aspect === "landscape" ? 400 : 600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-1">
                  <div className="flex items-center gap-1 text-gold text-xs font-semibold uppercase tracking-wider">
                    <ZoomIn className="h-3.5 w-3.5" /> {t("gallery.zoom")}
                  </div>
                  <h3 className="font-serif text-lg font-bold">{image.alt}</h3>
                  <p className="text-xs text-cream/80 font-light leading-relaxed">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-sm transition-all duration-300">
          {/* Close Area */}
          <div className="absolute inset-0 cursor-default" onClick={handleClose} />

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-white/5 text-white hover:bg-white/10 hover:text-gold transition-colors focus:outline-none"
            aria-label={t("gallery.close")}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-6 z-10 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 hover:text-gold transition-colors focus:outline-none"
            aria-label={t("gallery.prev")}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-6 z-10 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 hover:text-gold transition-colors focus:outline-none"
            aria-label={t("gallery.next")}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image Display Frame */}
          <div className="relative z-10 max-w-4xl max-h-[80vh] px-4 flex flex-col items-center gap-4">
            <div className="relative max-h-[70vh] flex justify-center">
              <Image
                src={images[selectedIdx].src}
                alt={images[selectedIdx].alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[70vh] object-contain rounded shadow-2xl border border-white/10"
              />
            </div>
            
            {/* Caption */}
            <div className="text-center text-white max-w-xl">
              <h3 className="font-serif text-xl font-bold text-gold mb-1">
                {images[selectedIdx].alt}
              </h3>
              <p className="text-sm text-cream/70 font-light">
                {images[selectedIdx].caption}
              </p>
              <div className="text-xs text-cream/45 mt-2">
                {selectedIdx + 1} {t("gallery.of")} {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
