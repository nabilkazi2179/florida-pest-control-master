"use client";

import { motion, Variants } from "framer-motion";
import { Target, Leaf } from "lucide-react";

export default function Values() {
  const values = [
    {
      id: 1,
      title: "Our Vision",
      description:
        "Empowering sustainable environments by combining our established expertise in pest control with innovative, emerging landscape solutions across the UAE.",
      icon: Target,
    },
    {
      id: 2,
      title: "Our Mission",
      description:
        "Delivering exceptional landscape construction, maintenance, and integrated pest management services. Specializing in both indoor and outdoor solutions to create sustainable, pest-free environments.",
      icon: Leaf,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div className="inline-block mb-4">
            <div className="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase">
              Our Core Values
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4"
          >
            Building a Better World Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            We prioritize integrity, excellence, innovation, and customer
            satisfaction in every service we provide
          </motion.p>
        </motion.div>

        {/* Values Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="relative h-full"
                  whileHover={{ boxShadow: "0 30px 60px rgba(0, 75, 35, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200" />
                  <div className="relative p-8 md:p-10">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: value.id * 0.2 }}
                      className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 mb-6 shadow-lg"
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: value.id * 0.2 + 0.1,
                      }}
                      className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                    >
                      {value.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: value.id * 0.2 + 0.2,
                      }}
                      className="text-gray-600 text-base leading-relaxed font-light"
                    >
                      {value.description}
                    </motion.p>

                    {/* Decorative Line */}
                    <motion.div
                      className="mt-6 h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: value.id * 0.2 + 0.3,
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
