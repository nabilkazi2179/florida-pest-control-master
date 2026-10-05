"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Mail, Menu, Phone, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import InspectionModal from "./inspection-modal";

// ─── Service Data ────────────────────────────────────────────────────────────

const landscapingServices = [
  { label: "Landscape Concept / Design", href: "/services/landscape-design" },
  { label: "Landscape Installation", href: "/services/landscape-installation" },
  { label: "Irrigation Systems", href: "/services/irrigation-systems" },
  { label: "Landscape Maintenance", href: "/services/landscape-maintenance" },
  { label: "Indoor Plant Services", href: "/services/indoor-plant-services" },
  { label: "Balcony Gardens", href: "/services/balcony-gardens" },
  { label: "Kitchen Gardens", href: "/services/kitchen-gardens" },
];

const pestControlCol1 = [
  {
    label: "Public Health Pest Control",
    href: "/services/public-health-pest-control",
  },
  {
    label: "Residential Pest Control",
    href: "/services/residential-pest-control",
  },
  { label: "Bed Bug Control", href: "/services/bed-bug-pest-control" },
  {
    label: "Rodent / Rats Control",
    href: "/services/rodent-rats-pest-control",
  },
  { label: "Termite Control", href: "/services/termite-control" },
];

const pestControlCol2 = [
  { label: "Fumigation Services", href: "/services/fumigation-services" },
  {
    label: "Commercial Pest Control",
    href: "/services/commercial-pest-control",
  },
  {
    label: "Industrial Pest Control",
    href: "/services/industrial-pest-control",
  },
  { label: "Institutional Services", href: "/services/institutional-services" },
  { label: "Snake & Lizard Catching", href: "/services/snake-lizard-control" },
];

const cleaningServices = [
  { label: "Home Cleaning", href: "/services/home-cleaning" },
  { label: "Office Cleaning", href: "/services/office-cleaning" },
  { label: "Deep Cleaning", href: "/services/deep-cleaning" },
  { label: "Carpet & Upholstery", href: "/services/carpet-cleaning" },
  { label: "Post-Construction", href: "/services/post-construction-cleaning" },
  { label: "Move In / Move Out", href: "/services/move-cleaning" },
  { label: "Sanitisation", href: "/services/sanitisation" },
];

// ─── Mega Menu ───────────────────────────────────────────────────────────────

function MegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[780px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
    >
      <div className="p-7 grid grid-cols-2 gap-6">
        {/* Pest Control */}
        <div>
          <div className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg mb-4 inline-block">
            Pest Control
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <ul className="space-y-2">
              {pestControlCol1.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors group"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {pestControlCol2.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors group"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cleaning Services */}
        {/* <div>
          <div className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg mb-4 inline-block">
            Cleaning Services
          </div>
          <ul className="space-y-2">
            {cleaningServices.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors group"
                >
                  <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Landscaping Services */}
        <div>
          <div className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg mb-4 inline-block">
            Landscaping Services
          </div>
          <ul className="space-y-2">
            {landscapingServices.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors group"
                >
                  <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer strip */}
      <div className="bg-primary/5 border-t border-gray-100 px-7 py-3 flex justify-between items-center">
        <span className="text-xs text-gray-400">
          All services available across the UAE
        </span>
        <Link
          href="/services"
          onClick={onClose}
          className="text-xs font-bold text-primary hover:underline"
        >
          View All Services →
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Mobile Services Accordion ───────────────────────────────────────────────

function MobileServicesAccordion({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    {
      id: "pest",
      label: "Pest Control",
      items: [...pestControlCol1, ...pestControlCol2],
    },
    // { id: "cleaning", label: "Cleaning Services", items: cleaningServices },
    {
      id: "landscaping",
      label: "Landscaping Services",
      items: landscapingServices,
    },
  ];

  return (
    <div className="border-t border-gray-100 mt-1">
      {sections.map((section) => (
        <div key={section.id} className="border-b border-gray-100">
          <button
            onClick={() =>
              setOpenSection(openSection === section.id ? null : section.id)
            }
            className="w-full flex items-center justify-between px-4 py-3 text-xs font-bold text-primary uppercase tracking-wide"
          >
            {section.label}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${openSection === section.id ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence>
            {openSection === section.id && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden bg-gray-50"
              >
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center gap-2 px-6 py-2.5 text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  // Close mega menu on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setIsMegaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about-us" },
    { label: "CONTACT", href: "/contact-us" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-primary/95 text-white py-2.5 px-4"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-6 text-xs sm:text-sm font-medium">
            <div className="items-center flex gap-2">
              <Phone size={16} className="shrink-0" />
              <Link
                href="tel:+97142654133"
                className="hover:text-secondary transition-colors"
              >
                +971 42654133
              </Link>
            </div>
            <div className="items-center hidden sm:flex gap-2">
              <Mail size={16} className="shrink-0" />
              <Link
                href="mailto:info@floridapestsc.com"
                className="hover:text-secondary transition-colors truncate"
              >
                info@floridapestsc.com
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Social icons — unchanged */}
            <Link
              href="https://www.instagram.com/florida_landscape_pest_control/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 15 15" fill="currentColor">
                <path d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16224 13.6229 8.93911 13.6296 7.0582 13.6296C5.1772 13.6296 4.95417 13.6229 4.21142 13.5892Z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/florida-landscape-and-pest-control-services/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 13 12"
                fill="currentColor"
              >
                <path d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z" />
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/floridaservicesdubai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors flex items-center justify-center"
              aria-label="Facebook"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Main Nav */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo1.png"
                  alt="Company Logo"
                  width={500}
                  height={500}
                  priority
                  quality={100}
                  className="h-14 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center gap-10"
            >
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold text-gray-800 hover:text-primary transition-colors duration-200 uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              ))}

              {/* Services with Mega Menu */}
              <div ref={megaRef} className="relative">
                <button
                  onClick={() => setIsMegaOpen((v) => !v)}
                  onMouseEnter={() => setIsMegaOpen(true)}
                  className="flex items-center gap-1 text-xs font-bold text-gray-800 hover:text-primary transition-colors duration-200 uppercase tracking-wide"
                >
                  SERVICES
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isMegaOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isMegaOpen && (
                    <div onMouseLeave={() => setIsMegaOpen(false)}>
                      <MegaMenu onClose={() => setIsMegaOpen(false)} />
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsModalOpen(true);
                setIsOpen(false);
              }}
              className="hidden md:flex px-6 py-2.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg text-xs transition-all uppercase tracking-wider cursor-pointer shadow-md hover:shadow-lg"
            >
              Get Free Inspection
            </motion.button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-1 border-t border-gray-100">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors uppercase tracking-wide"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Mobile Services Expandable */}
                  <div>
                    <button
                      onClick={() => setIsMobileServicesOpen((v) => !v)}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors uppercase tracking-wide"
                    >
                      SERVICES
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden rounded-xl mx-2 mb-1 border border-gray-100"
                        >
                          <MobileServicesAccordion
                            onClose={() => {
                              setIsOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="px-4 pt-2">
                    <button
                      onClick={() => {
                        setIsModalOpen(true);
                        setIsOpen(false);
                      }}
                      className="w-full px-4 py-2.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg text-xs transition-all uppercase tracking-wider"
                    >
                      Get Free Inspection
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      <InspectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
}
