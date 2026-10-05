"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JSX } from "react";

// ─── SVG Pest Icons (inline, white silhouettes) ───────────────────────────────

const icons: Record<string, JSX.Element> = {
  cockroach: (
    <svg viewBox="0 0 64 64" fill="currentColor" className="w-8 h-8">
      <ellipse cx="32" cy="34" rx="10" ry="14" />
      <ellipse cx="32" cy="18" rx="6" ry="7" />
      <line
        x1="32"
        y1="11"
        x2="26"
        y2="4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="32"
        y1="11"
        x2="38"
        y2="4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="22"
        y1="28"
        x2="10"
        y2="22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="22"
        y1="34"
        x2="8"
        y2="32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="22"
        y1="40"
        x2="10"
        y2="46"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="42"
        y1="28"
        x2="54"
        y2="22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="42"
        y1="34"
        x2="56"
        y2="32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="42"
        y1="40"
        x2="54"
        y2="46"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  ant: (
    <svg viewBox="0 0 64 64" fill="currentColor" className="w-8 h-8">
      <circle cx="32" cy="44" r="8" />
      <circle cx="32" cy="30" r="6" />
      <circle cx="32" cy="18" r="5" />
      <line
        x1="26"
        y1="30"
        x2="12"
        y2="24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="26"
        y1="35"
        x2="10"
        y2="36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="38"
        y1="30"
        x2="52"
        y2="24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="38"
        y1="35"
        x2="54"
        y2="36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="28"
        y1="13"
        x2="22"
        y2="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="36"
        y1="13"
        x2="42"
        y2="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  bedbug: (
    <svg viewBox="0 0 64 64" fill="currentColor" className="w-8 h-8">
      <ellipse cx="32" cy="32" rx="12" ry="9" />
      <ellipse cx="32" cy="32" rx="9" ry="6" opacity="0.6" />
      <line
        x1="20"
        y1="26"
        x2="8"
        y2="20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="20"
        y1="32"
        x2="6"
        y2="32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="20"
        y1="38"
        x2="8"
        y2="44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="44"
        y1="26"
        x2="56"
        y2="20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="44"
        y1="32"
        x2="58"
        y2="32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="44"
        y1="38"
        x2="56"
        y2="44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  termite: (
    <svg viewBox="0 0 64 64" fill="currentColor" className="w-8 h-8">
      <ellipse cx="32" cy="40" rx="9" ry="12" />
      <circle cx="32" cy="22" rx="7" ry="7" />
      <ellipse cx="20" cy="32" rx="9" ry="4" transform="rotate(-30 20 32)" />
      <ellipse cx="44" cy="32" rx="9" ry="4" transform="rotate(30 44 32)" />
      <line
        x1="28"
        y1="15"
        x2="24"
        y2="7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="36"
        y1="15"
        x2="40"
        y2="7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  mosquito: (
    <svg viewBox="0 0 64 64" fill="currentColor" className="w-8 h-8">
      <ellipse cx="32" cy="36" rx="5" ry="12" />
      <circle cx="32" cy="20" rx="5" />
      <ellipse cx="16" cy="28" rx="12" ry="5" transform="rotate(-20 16 28)" />
      <ellipse cx="48" cy="28" rx="12" ry="5" transform="rotate(20 48 28)" />
      <line
        x1="32"
        y1="48"
        x2="28"
        y2="58"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="32"
        y1="48"
        x2="36"
        y2="58"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="30"
        y1="15"
        x2="26"
        y2="8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="34"
        y1="15"
        x2="38"
        y2="8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  rodent: (
    <svg viewBox="0 0 64 64" fill="currentColor" className="w-8 h-8">
      <ellipse cx="28" cy="38" rx="16" ry="12" />
      <circle cx="46" cy="30" rx="9" />
      <ellipse cx="52" cy="20" rx="5" ry="8" transform="rotate(20 52 20)" />
      <line
        x1="12"
        y1="40"
        x2="4"
        y2="52"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="50" cy="27" r="1.5" fill="white" />
    </svg>
  ),
  bird: (
    <svg viewBox="0 0 64 64" fill="currentColor" className="w-8 h-8">
      <ellipse cx="32" cy="38" rx="12" ry="9" />
      <circle cx="44" cy="26" rx="7" />
      <path d="M 44 19 Q 52 12 58 16 Q 54 20 50 20 Z" />
      <path d="M 20 30 Q 8 22 10 14 Q 18 18 22 26 Z" />
      <line
        x1="24"
        y1="47"
        x2="20"
        y2="56"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="32"
        y1="47"
        x2="32"
        y2="57"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="47" cy="24" r="1.5" fill="white" />
    </svg>
  ),
  snake: (
    <svg viewBox="0 0 64 64" fill="currentColor" className="w-8 h-8">
      <path
        d="M 8 50 Q 16 30 32 32 Q 48 34 48 20 Q 48 10 56 12"
        stroke="currentColor"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="56" cy="10" rx="5" ry="4" transform="rotate(-20 56 10)" />
      <line
        x1="56"
        y1="7"
        x2="60"
        y2="4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="56"
        y1="7"
        x2="62"
        y2="7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  fumigation: (
    <svg viewBox="0 0 64 64" fill="currentColor" className="w-8 h-8">
      <rect x="22" y="30" width="20" height="26" rx="4" />
      <rect x="26" y="22" width="12" height="10" rx="3" />
      <rect x="29" y="16" width="6" height="8" rx="2" />
      <path
        d="M 10 20 Q 14 14 10 8"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 18 18 Q 22 12 18 6"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 46 20 Q 50 14 46 8"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 54 18 Q 58 12 54 6"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),
  landscape: (
    <svg viewBox="0 0 64 64" fill="currentColor" className="w-8 h-8">
      <path d="M 32 8 Q 20 14 20 26 Q 20 36 32 38 Q 44 36 44 26 Q 44 14 32 8 Z" />
      <rect x="29" y="36" width="6" height="18" rx="2" />
      <path
        d="M 8 54 Q 16 40 24 44"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 56 54 Q 48 40 40 44"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <line
        x1="4"
        y1="54"
        x2="60"
        y2="54"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const pestServices = [
  {
    label: "Cockroach Control",
    href: "/services/residential-pest-control",
    icon: "cockroach",
  },
  {
    label: "Ant Control",
    href: "/services/public-health-pest-control",
    icon: "ant",
  },
  {
    label: "Bed Bug Control",
    href: "/services/bed-bug-pest-control",
    icon: "bedbug",
  },
  {
    label: "Termite Control",
    href: "/services/termite-control",
    icon: "termite",
  },
  {
    label: "Mosquito Control",
    href: "/services/public-health-pest-control",
    icon: "mosquito",
  },
  {
    label: "Rodent Control",
    href: "/services/rodent-rats-pest-control",
    icon: "rodent",
  },
  {
    label: "Bird Control",
    href: "/services/public-health-pest-control",
    icon: "bird",
  },
  {
    label: "Snake & Lizard",
    href: "/services/snake-lizard-control",
    icon: "snake",
  },
  {
    label: "Fumigation",
    href: "/services/fumigation-services",
    icon: "fumigation",
  },
  {
    label: "Landscaping",
    href: "/services/landscape-design",
    icon: "landscape",
  },
];

export default function ServicesShowcase() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div className="inline-block mb-4">
            <div className="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase">
              What We Do
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4"
          >
            Choose The Service <span className="text-primary">You Need</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Professional Landscape & Pest Control Solutions — we eliminate
            problems once and for all.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {pestServices.map((service, i) => (
            <Link
              key={i}
              href={service.href}
              className="group flex flex-col items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 text-center"
            >
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-all duration-300 text-primary group-hover:text-white shadow-sm group-hover:shadow-primary/30 group-hover:shadow-lg">
                {icons[service.icon]}
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors leading-tight">
                {service.label}
              </span>
            </Link>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:shadow-primary/20 text-sm uppercase tracking-wide group"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
