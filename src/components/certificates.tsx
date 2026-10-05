"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Award,
  Shield,
  CheckCircle,
} from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Material Safety Data Sheet – Page 1",
    subtitle: "Gharda Chemicals Limited · Cypergard 25 EC",
    image: "/images/cert1.jpg",
    badge: "MSDS Certified",
  },
  {
    id: 2,
    title: "Material Safety Data Sheet – Page 3",
    subtitle: "Gharda Chemicals Limited · Cypergard 25 EC",
    image: "/images/cert2.jpg",
    badge: "EU Reg. No. 453/2010",
  },
  {
    id: 3,
    title: "Material Safety Data Sheet – Page 4",
    subtitle: "Gharda Chemicals Limited · Cypergard 25 EC",
    image: "/images/cert3.jpg",
    badge: "Safety Compliant",
  },
  {
    id: 4,
    title: "Material Safety Data Sheet – Page 8",
    subtitle: "Gharda Chemicals Limited · Cypergard 25 EC",
    image: "/images/cert4.jpg",
    badge: "Internationally Verified",
  },
];

export default function CertificatesSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + certificates.length) % certificates.length : 0,
    );
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % certificates.length : 0));

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div className="inline-block mb-4">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase">
              <Award className="w-3.5 h-3.5" />
              Certified & Trusted
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4"
          >
            Our{" "}
            <span className="text-primary relative">
              Certificates
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/30 rounded-full" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            We operate with fully certified products and internationally
            recognised safety standards, ensuring complete protection for you
            and your environment.
          </motion.p>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={cert.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              {/* Badge */}
              <div className="absolute top-3 left-3 z-10 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                {cert.badge}
              </div>

              {/* Image */}
              <div className="relative h-52 bg-gray-50 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <ZoomIn className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 space-y-1">
                <p className="text-sm font-bold text-gray-800 leading-snug">
                  {cert.title}
                </p>
                <p className="text-xs text-gray-400">{cert.subtitle}</p>
              </div>

              {/* View button */}
              <div className="px-4 pb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-2.5 transition-all duration-200">
                  <ZoomIn className="w-3.5 h-3.5" /> View Certificate
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <p className="font-bold text-gray-800 text-sm">
                  {certificates[lightboxIndex].title}
                </p>
                <p className="text-xs text-gray-400">
                  {certificates[lightboxIndex].subtitle}
                </p>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Image */}
            <div className="relative w-full h-[60vh]">
              <Image
                src={certificates[lightboxIndex].image}
                alt={certificates[lightboxIndex].title}
                fill
                className="object-contain p-4"
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50">
              <button
                onClick={prev}
                className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <span className="text-xs text-gray-400 font-medium">
                {lightboxIndex + 1} / {certificates.length}
              </span>
              <button
                onClick={next}
                className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-primary transition-colors"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
