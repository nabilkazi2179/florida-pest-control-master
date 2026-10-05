"use client";

import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function ServiceAreas() {
  const services = [
    {
      id: 1,
      title: "Landscape Concept /Landscape Design",
      link: "/services/landscape-design",
      description:
        "Expert landscape concept and design for residential and commercial properties",
      image: "/images/s15.jpeg",
      features: [
        "Expert Design Consultation",
        "Customized Solutions",
        "Sustainable Practices",
        "3D Visualizations",
      ],
    },
    {
      id: 2,
      title: "Landscape Installation",
      link: "/services/landscape-installation",
      description:
        "Professional installation transforming your outdoor space completely",
      image: "/images/s18.jpeg",
      features: [
        "Premium Materials",
        "Expert Installation",
        "Post-Care Support",
        "Quality Guaranteed",
      ],
    },
    {
      id: 3,
      title: "Landscape Irrigation Systems",
      link: "/services/irrigation-systems",
      description:
        "Advanced irrigation design and installation for efficient water management",
      image: "/images/s19.jpeg",
      features: [
        "Smart System Design",
        "Water Efficiency",
        "Professional Installation",
        "Maintenance Support",
      ],
    },
    {
      id: 4,
      title: "Landscape Maintenance Services",
      link: "/services/landscape-maintenance",
      description:
        "Year-round lawn and garden care for residential and commercial properties",
      image: "/images/s22.jpeg",
      features: [
        "Regular Care Programs",
        "Plant Health Management",
        "Seasonal Planting",
        "Weed & Pest Control",
      ],
    },
    {
      id: 5,
      title: "Indoor Plant Services",
      link: "/services/indoor-plant-services",
      description:
        "Professional indoor plant supply, installation, and ongoing maintenance",
      image: "/images/s16.jpeg",
      features: [
        "Plant Selection",
        "Premium Pots",
        "Expert Installation",
        "Regular Maintenance",
      ],
    },
    {
      id: 6,
      title: "Balcony Gardens",
      link: "/services/balcony-gardens",
      description:
        "Beautiful garden solutions designed specifically for your balcony space",
      image: "/images/s6.jpeg",
      features: [
        "Custom Design",
        "Space Optimization",
        "Air Quality Benefits",
        "Regular Maintenance",
      ],
    },
    {
      id: 7,
      title: "Kitchen Gardens",
      link: "/services/kitchen-gardens",
      description:
        "Sustainable, productive kitchen garden installation and maintenance",
      image: "/images/s17.jpeg",
      features: [
        "Organic Solutions",
        "Fresh Produce",
        "Sustainable Living",
        "Expert Support",
      ],
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <div className="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase">
              Landscape Services
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4"
          >
            Create Beautiful, Thriving Outdoor Spaces
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-base max-w-2xl mx-auto"
          >
            From design to installation and maintenance, we deliver
            comprehensive landscaping solutions
          </motion.p>
        </motion.div>

        {/* Services Grid - Desktop, Slider - Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={service.id} href={service.link}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all group"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <motion.img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-md"
                      >
                        <ArrowRight
                          className="w-5 h-5 text-white"
                          strokeWidth={2.5}
                        />
                      </motion.div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mt-5 pt-5 border-t border-gray-100">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <span className="text-primary font-bold text-sm">
                            ✓
                          </span>
                          <span className="text-xs font-medium text-gray-700">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile & Tablet Slider */}
          <div className="lg:hidden">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: ".service-areas-next",
                prevEl: ".service-areas-prev",
              }}
              pagination={{
                el: ".service-areas-pagination",
                clickable: true,
                bulletClass: "service-bullet",
                bulletActiveClass: "service-bullet-active",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              className="pb-20"
            >
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -8 }}
                    className="h-full"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 h-full flex flex-col hover:shadow-lg transition-all">
                      {/* Image */}
                      <div className="relative h-40 overflow-hidden bg-gray-100">
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex-1">
                            <h3 className="text-base font-bold text-gray-900 mb-1 leading-snug">
                              {service.title}
                            </h3>
                            <p className="text-xs text-gray-600 leading-snug">
                              {service.description}
                            </p>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-1.5 mt-3 pt-3 border-t border-gray-100">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="text-primary font-bold text-xs">
                                ✓
                              </span>
                              <span className="text-xs text-gray-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              <motion.button
                className="service-areas-prev bg-primary/10 hover:bg-primary text-primary hover:text-white p-2.5 rounded-full transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="service-areas-next bg-primary/10 hover:bg-primary text-primary hover:text-white p-2.5 rounded-full transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            <style>{`
              .service-areas-pagination {
                display: flex;
                gap: 0.5rem;
                justify-content: center;
                margin-top: 1rem !important;
              }
              .service-bullet {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: rgba(0, 75, 35, 0.2);
                cursor: pointer;
                transition: all 0.3s ease;
              }
              .service-bullet:hover {
                background-color: rgba(0, 75, 35, 0.4);
                transform: scale(1.15);
              }
              .service-bullet-active {
                background-color: #004b23;
                box-shadow: 0 0 8px rgba(0, 75, 35, 0.5);
                width: 28px;
                border-radius: 5px;
              }
            `}</style>
            <div className="service-areas-pagination" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
