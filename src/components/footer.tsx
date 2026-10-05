/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact-us" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Landscape Design", href: "/services/landscape-design" },
        {
          label: "Landscape Maintenance",
          href: "/services/landscape-maintenance",
        },
        {
          label: "Public Health Pest Control",
          href: "/services/public-health-pest-control",
        },
        {
          label: "Residential Pest Control",
          href: "/services/residential-pest-control",
        },
      ],
    },
    {
      title: "Contact Numbers",
      links: [
        {
          label: "Pest Control: +971 50 281 2441",
          href: "tel:+97150281244",
          icon: Phone,
        },
        {
          label: "Landscape: +971 50 162 1003",
          href: "tel:+97150162100",
          icon: Phone,
        },
        {
          label: "Landline: +971 42654133",
          href: "tel:+97142654133",
          icon: Phone,
        },
        {
          label: "Email: info@floridapestsc.com",
          href: "mailto:info@floridapestsc.com",
          icon: Mail,
        },
      ],
    },
  ];

  const address = {
    company: "Florida Landscape and Pest Control Services LLC",
    address:
      "112, Al Midfa Building, Damascus Street - Al Qusais Industrial Area 4 - Dubai P.O.Box. 83453, Dubai, UAE",
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section - Brand and Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12"
          >
            {/* Brand Column */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-6">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="Company Logo"
                    width={500}
                    height={500}
                    priority
                    quality={100}
                    className="h-14 w-auto object-contain mb-2"
                  />
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Professional pest control and landscaping solutions with 20+
                  years of expertise.
                </p>
              </div>
              <div className="space-y-3">
                {/* Social Links */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <motion.a
                    href="https://www.instagram.com/florida_landscape_pest_control/?next=%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center transition-all"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/company/florida-landscape-and-pest-control-services/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/floridaservicesdubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center transition-all"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>

            {/* Links Columns */}
            {footerLinks.map((column, index) => (
              <motion.div key={index} variants={itemVariants}>
                <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map(
                    (link: { icon?: any; label: string; href: string }) => {
                      const Icon = link.icon;
                      return (
                        <li key={link.label}>
                          <motion.a
                            href={link.href}
                            whileHover={{ x: 4 }}
                            className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"
                          >
                            {Icon && <Icon className="w-4 h-4" />}
                            {link.label}
                          </motion.a>
                        </li>
                      );
                    },
                  )}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Address Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl p-6 sm:p-8 border border-primary border-opacity-40 hover:border-opacity-60 transition-all"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-white text-lg sm:text-xl mb-1">
                  Our Location
                </h3>
                <p className="text-gray-300 font-semibold text-sm mb-3">
                  {address.company}
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {address.address}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="my-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left"
          />

          {/* Bottom Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="text-center md:text-left"
            >
              <p className="text-gray-400 text-sm">
                © {currentYear} FloridaPest Control Services. All rights
                reserved.
              </p>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 text-sm text-gray-400"
            >
              <Link
                href="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
            </motion.div>

            <Link
              href="https://www.konkantechnologies.in"
              target="_blank"
              className="text-gray-400 hover:text-white text-sm transition-colors flex items-center"
            >
              Developed with <span className="text-red-500 mx-1">❤️</span> by
              Konkantech​
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
