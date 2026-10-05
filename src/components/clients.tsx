"use client";

import { motion, Variants } from "framer-motion";

export default function Clients() {
  const clients = [
    { id: 1, name: "Albiruni Plaza", logo: "/images/brand1.png" },
    { id: 2, name: "Emirates Green", logo: "/images/brand2.png" },
    { id: 3, name: "Dubai Landscape", logo: "/images/brand3.png" },
    { id: 4, name: "Urban Spaces", logo: "/images/brand4.png" },
    { id: 5, name: "Garden Design Co", logo: "/images/brand5.png" },
    { id: 6, name: "Premier Exteriors", logo: "/images/brand6.png" },
    { id: 7, name: "Premier Exteriors", logo: "/images/brand7.png" },
    { id: 8, name: "Premier Exteriors", logo: "/images/brand8.png" },
    { id: 9, name: "Premier Exteriors", logo: "/images/brand9.png" },
    { id: 10, name: "Premier Exteriors", logo: "/images/brand10.png" },
    { id: 11, name: "Premier Exteriors", logo: "/images/brand11.png" },
    { id: 12, name: "Premier Exteriors", logo: "/images/brand12.png" },
    { id: 13, name: "Premier Exteriors", logo: "/images/brand13.png" },
    { id: 14, name: "Premier Exteriors", logo: "/images/brand14.png" },
    { id: 15, name: "Premier Exteriors", logo: "/images/brand15.png" },
    { id: 16, name: "Premier Exteriors", logo: "/images/brand16.png" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Trusted by 2,500+ World-Class Organizations
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of satisfied customers who&apos;ve transformed their
            properties with our expert services
          </motion.p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6"
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 75, 35, 0.12)",
              }}
              className="flex items-center justify-center group"
            >
              <motion.div
                className="w-full aspect-square rounded-2xl bg-white border border-gray-200 flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all shadow-sm hover:shadow-md p-4 overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="flex-1 flex items-center justify-center w-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="max-w-[75%] max-h-[65%] object-contain"
                  />
                </motion.div>
                <div className="text-center w-full">
                  <div className="text-xs md:text-sm text-primary font-bold text-balance leading-tight">
                    {client.name}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
