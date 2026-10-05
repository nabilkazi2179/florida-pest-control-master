"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle, Users, MapPin, Award } from "lucide-react";
import InspectionModal from "./inspection-modal";
import { useState } from "react";

export default function Statistics() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    {
      id: 1,
      icon: CheckCircle,
      value: "250+",
      label: "Active Contracts",
      description: "Ongoing maintenance relationships",
    },
    {
      id: 2,
      icon: Users,
      value: "2,700+",
      label: "Satisfied Clients",
      description: "Trusted across the region",
    },
    {
      id: 3,
      icon: MapPin,
      value: "20+",
      label: "Years Experience",
      description: "Industry expertise and excellence",
    },
    {
      id: 4,
      icon: Award,
      value: "100%",
      label: "Quality Guaranteed",
      description: "Commitment to excellence",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Trusted by Thousands, Proven by Results
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Our track record speaks for itself with consistent growth and
            customer satisfaction
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <motion.div
                  className="relative h-full"
                  whileHover={{
                    boxShadow: "0 25px 50px rgba(0, 75, 35, 0.12)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl border border-gray-200" />
                  <div className="relative p-7 md:p-8 text-center h-full flex flex-col justify-between">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: stat.id * 0.15 }}
                      className="inline-flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg"
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Value */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: stat.id * 0.15 + 0.2 }}
                    >
                      <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                        {stat.value}
                      </p>
                    </motion.div>

                    {/* Label */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: stat.id * 0.15 + 0.3 }}
                    >
                      <p className="font-bold text-gray-900 mb-2 text-lg">
                        {stat.label}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed font-light">
                        {stat.description}
                      </p>
                    </motion.div>

                    {/* Decorative Line */}
                    <motion.div
                      className="mt-4 h-1 w-8 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto"
                      initial={{ width: 0 }}
                      whileInView={{ width: 32 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: stat.id * 0.15 + 0.4,
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-gray-600 text-lg mb-6">
            Ready to experience the difference professional service makes?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="cursor-pointer px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all uppercase tracking-wider text-sm"
          >
            Get Free Inspection Today
          </motion.button>
        </motion.div>
      </div>

      <InspectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
