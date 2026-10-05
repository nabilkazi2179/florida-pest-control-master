"use client";

import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useState } from "react";
import InspectionModal from "./inspection-modal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Florida Landscape and Pest Control Services LLC in Dubai",
      subtitle:
        "With over 20 years of industry experience, we provide comprehensive pest control and landscaping solutions trusted by families and businesses across the UAE.",
      image: "/images/slider7.jpg",
      tag: "20+ YEARS EXPERIENCE",
      cta: "Get Free Inspection",
    },
    {
      id: 2,
      title: "Creating Safe, Pest-Free Environments",
      subtitle:
        "Our certified specialists use advanced, eco-friendly treatments to protect your home and workplace while ensuring long-lasting results.",
      image: "/images/slider2.jpg",
      tag: "CERTIFIED & ECO-FRIENDLY",
      cta: "Schedule Service",
    },
    {
      id: 3,
      title: "Transforming Indoor & Outdoor Spaces",
      subtitle:
        "From expert pest management to premium landscaping services, we turn ordinary spaces into clean, healthy, and beautiful environments.",
      image: "/images/slider3.jpg",
      tag: "COMPLETE PROPERTY CARE",
      cta: "Explore Our Services",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen md:h-[680px] overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        pagination={{
          el: ".hero-pagination",
          clickable: true,
          bulletClass: "hero-bullet",
          bulletActiveClass: "hero-bullet-active",
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/50 to-black/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative h-full flex items-center justify-center md:justify-start"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                <div className="max-w-2xl">
                  <motion.div
                    variants={tagVariants}
                    className="inline-block mb-6 overflow-hidden"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "auto" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-primary/95 backdrop-blur-sm text-white px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase shadow-lg">
                        {slide.tag}
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.h1
                    variants={titleVariants}
                    className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance leading-tight"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg text-white/90 mb-10 max-w-xl leading-relaxed font-light"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(0, 75, 35, 0.5)",
                      }}
                      onClick={() => {
                        setIsModalOpen(true);
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-pointer px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-sm uppercase tracking-wide"
                    >
                      {slide.cta}
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ChevronRight size={18} />
                      </motion.span>
                    </motion.button>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="tel:+971501621003"
                      className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2 w-full sm:w-auto text-sm uppercase tracking-wide border border-white/30"
                    >
                      Call Now
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ChevronRight size={18} />
                      </motion.span>
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <style>{`
        .hero-pagination {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.75rem;
          z-index: 20;
        }
        
        .hero-bullet {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.4s ease;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .hero-bullet:hover {
          background-color: rgba(255, 255, 255, 0.7);
          transform: scale(1.15);
        }
        
        .hero-bullet-active {
          background-color: white;
          border-color: white;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
      <div className="hero-pagination" />

      <InspectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
