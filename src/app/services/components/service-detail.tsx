"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ChevronRight, MapPin, Phone, Mail, Check } from "lucide-react";
import Link from "next/link";
import { ServicesData, type ServiceKey } from "@/constant";
import Header from "@/components/header";
import InspectionModal from "@/components/inspection-modal";
import Footer from "@/components/footer";

interface ServiceDetailProps {
  slug: string;
}

export default function ServiceDetail({ slug }: ServiceDetailProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const serviceData = ServicesData.find(
    (service) => service.link.split("/").pop() === slug,
  );

  if (!serviceData) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Service Not Found
          </h1>
          <p className="text-gray-600">
            The requested service could not be found.
          </p>
          <Link
            href="/services"
            className="inline-block px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={serviceData.image || "/placeholder.svg"}
            alt={serviceData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </motion.div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-white/90">
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
                <ChevronRight size={16} />
                <span>{serviceData.title}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {serviceData.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                {serviceData.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {serviceData.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {serviceData.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Key Features:
                </h3>
                <ul className="space-y-3">
                  {serviceData.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary font-bold" />
                      </span>
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 text-base uppercase tracking-wide"
              >
                Get Free Inspection
                <ChevronRight size={18} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20 space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <div className="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase">
                Why Choose Us
              </div>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            >
              Benefits of {serviceData.title}
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {serviceData.features.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                {/* <div className="text-4xl mb-4">{benefit.icon}</div> */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit}
                </h3>
                {/* <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance"
            >
              Ready to Get Started?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            >
              Contact us today for a free consultation and inspection. Our
              expert team is ready to help you with{" "}
              {serviceData.title.toLowerCase()}.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 text-base uppercase tracking-wide"
              >
                Schedule Inspection
                <ChevronRight size={18} />
              </motion.button>

              <a
                href={`tel:${serviceData.call}`}
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-base uppercase tracking-wide"
              >
                <Phone size={18} />
                Call Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Inspection Modal */}
      <InspectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </main>
  );
}
