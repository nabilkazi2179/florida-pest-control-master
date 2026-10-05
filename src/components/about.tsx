"use client";

import { motion, Variants } from "framer-motion";
import { Leaf, Shield, Users } from "lucide-react";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              variants={itemVariants}
              className="relative order-2 lg:order-1"
            >
              <div className="space-y-8">
                {/* Header */}
                <motion.div
                  variants={containerVariants}
                  className="relative z-10 space-y-4"
                >
                  <motion.div variants={itemVariants}>
                    <div className="inline-block mb-3">
                      <div className="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase">
                        WHO WE ARE
                      </div>
                    </div>
                  </motion.div>

                  <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
                  >
                    Leading Landscaping Pest Control & Experts
                  </motion.h2>

                  <motion.p
                    variants={itemVariants}
                    className="text-gray-600 leading-relaxed text-base md:text-lg font-light max-w-lg"
                  >
                    With 20+ years of expertise, we deliver comprehensive
                    landscape and pest control solutions throughout the UAE. Our
                    passion transforms indoor and outdoor spaces into beautiful,
                    pest-free environments where families and businesses thrive.
                  </motion.p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 gap-5"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-primary">
                      250+
                    </p>
                    <p className="text-gray-600 font-semibold text-sm mt-2">
                      Active Maintenance Contracts
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-primary">
                      2,700+
                    </p>
                    <p className="text-gray-600 font-semibold text-sm mt-2">
                      Satisfied Clients
                    </p>
                  </motion.div>
                </motion.div>

                {/* Experience Badge */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-5 w-fit"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/80 border-4 border-primary/20 shadow-lg flex flex-col items-center justify-center flex-shrink-0"
                  >
                    <p className="text-3xl font-bold text-white">20+</p>
                    <p className="text-xs text-center text-white/90 font-semibold leading-tight">
                      Years of
                      <br />
                      Excellence
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-700 font-light"
                  >
                    <p className="font-semibold text-gray-900 text-sm md:text-base">
                      Trusted by thousands of customers across the UAE region
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Certified Experts, Proven Results, Satisfied Customers,
                      Trusted Service.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Images & Cards */}
            <motion.div
              variants={itemVariants}
              className="relative order-1 lg:order-2"
            >
              <div className="space-y-6">
                {/* Red Box Card */}
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: "0 25px 50px rgba(0, 75, 35, 0.15)",
                  }}
                  className="bg-primary text-white p-7 md:p-8 rounded-2xl relative overflow-hidden group"
                >
                  {/* Leaf Icon Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="absolute top-6 right-6 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                  >
                    <Leaf className="w-8 h-8 text-white" strokeWidth={2} />
                  </motion.div>

                  <div className="pr-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                      Complete Landscape & Pest Control Solutions
                    </h3>
                    <p className="text-white/90 font-light text-sm leading-relaxed mb-5">
                      Expert gardening, professional landscaping, and integrated
                      pest management for homes and businesses.
                    </p>
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.15)",
                      }}
                      onClick={() => router.push("/about-us")}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-pointer px-6 py-2.5 bg-white text-primary font-bold rounded-lg transition-all hover:text-white text-sm"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{
                      y: -4,
                      boxShadow: "0 15px 30px rgba(0, 75, 35, 0.1)",
                    }}
                    className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-5 border border-primary/20 hover:border-primary/40 transition-all"
                  >
                    <Shield className="w-6 h-6 text-primary mb-3" />
                    <h4 className="font-bold text-gray-900 text-sm mb-1">
                      Safe & Eco-Friendly
                    </h4>
                    <p className="text-xs text-gray-600">
                      Advanced methods protecting your family
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -4,
                      boxShadow: "0 15px 30px rgba(0, 75, 35, 0.1)",
                    }}
                    className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-5 border border-primary/20 hover:border-primary/40 transition-all"
                  >
                    <Users className="w-6 h-6 text-primary mb-3" />
                    <h4 className="font-bold text-gray-900 text-sm mb-1">
                      Expert Team
                    </h4>
                    <p className="text-xs text-gray-600">
                      Certified professionals with deep expertise
                    </p>
                  </motion.div>
                </div>

                {/* Hero Image */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="rounded-2xl overflow-hidden shadow-lg h-56 w-full"
                >
                  <img
                    src="/images/slider4.jpg"
                    alt="Professional pest control service"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
