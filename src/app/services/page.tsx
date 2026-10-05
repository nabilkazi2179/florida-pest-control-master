"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ServiceAreas from "@/components/service-areas";
import PestControlServices from "@/components/services";

const TABS = [
  {
    id: "landscaping",
    label: "Landscaping",
    description: "Design · Installation · Maintenance",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
  },
  {
    id: "pest-control",
    label: "Pest Control",
    description: "Inspection · Treatment · Prevention",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  // {
  //   id: "cleaning",
  //   label: "Cleaning",
  //   description: "Residential · Commercial · Deep Clean",
  //   icon: (
  //     <svg
  //       className="w-6 h-6"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       stroke="currentColor"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={1.8}
  //         d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  //       />
  //     </svg>
  //   ),
  // },
];

function LandscapingContent() {
  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Comprehensive Gardening & Landscaping Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                Discover how we can enhance your outdoor space with our
                comprehensive gardening and landscaping services across the
                entire UAE. From customized landscape designs that balance
                beauty and functionality to professional installation of plants,
                trees, and hardscape features, we ensure your outdoor area
                reflects your vision.
              </p>
              <ul className="space-y-3">
                {[
                  "Custom landscape design and planning",
                  "Professional plant and tree installation",
                  "Irrigation system design and setup",
                  "Regular maintenance and care programs",
                  "Eco-friendly pest management",
                  "Kitchen and balcony garden solutions",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 w-full">
              <Image
                src="/images/s23.jpeg"
                alt="Landscaping services"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <ServiceAreas />
    </>
  );
}

function PestControlContent() {
  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Pest Control Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                Protect your home and business with our professional pest
                control services. We provide safe, effective, and eco-friendly
                pest management solutions designed to eliminate infestations and
                prevent future outbreaks.
              </p>
              <ul className="space-y-3">
                {[
                  "Comprehensive pest inspection & assessment",
                  "Residential and commercial pest treatment",
                  "Termite detection and control solutions",
                  "Rodent control and prevention",
                  "Eco-friendly and safe treatment methods",
                  "Preventive maintenance programs",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 w-full">
              <Image
                src="/images/slider1.jpg"
                alt="Pest control services"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <PestControlServices />
    </>
  );
}

function CleaningContent() {
  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Professional Cleaning Services
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                Experience a spotless environment with our top-tier professional
                cleaning services. Whether it's your home, office, or commercial
                space, our trained specialists deliver a deep, thorough clean
                every time.
              </p>
              <ul className="space-y-3">
                {[
                  "Residential deep cleaning & regular upkeep",
                  "Commercial and office cleaning solutions",
                  "Post-construction cleaning",
                  "Move-in / move-out cleaning",
                  "Carpet and upholstery cleaning",
                  "Eco-friendly, non-toxic cleaning products",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 w-full">
              <Image
                src="/images/cleaning.jpg"
                alt="Cleaning services"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Cleaning Packages
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Flexible solutions tailored for every space.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Home Cleaning",
                desc: "Regular or one-time deep cleaning for apartments and villas.",
                icon: "🏠",
              },
              {
                title: "Office Cleaning",
                desc: "Scheduled office cleaning plans for any business size.",
                icon: "🏢",
              },
              {
                title: "Post-Construction",
                desc: "Eliminate dust and debris with our specialised post-build cleaning.",
                icon: "🔧",
              },
              {
                title: "Carpet & Upholstery",
                desc: "Deep extraction cleaning for carpets, sofas, and curtains.",
                icon: "🛋️",
              },
              {
                title: "Move In / Move Out",
                desc: "Complete top-to-bottom clean to prepare properties.",
                icon: "📦",
              },
              {
                title: "Sanitisation",
                desc: "Hospital-grade disinfection safe for families and pets.",
                icon: "🧴",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("landscaping");
  const activeTabData = TABS.find((t) => t.id === activeTab);

  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your indoor and outdoor spaces with our comprehensive
              gardening, landscaping, and pest control solutions — beautiful,
              healthy, and pest-free all year round. 🌿
            </p>
          </div>
        </div>
      </section>

      {/* ── MODERN TAB NAVIGATION ── */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop tabs */}
          <div className="hidden md:flex items-stretch -mb-px">
            {TABS.map((tab, i) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative flex items-center gap-4 px-8 py-5 text-left transition-all duration-200 focus:outline-none border-b-[3px] group flex-1 justify-center
                    ${
                      isActive
                        ? "border-primary bg-primary/[0.03]"
                        : "border-transparent hover:bg-gray-50 hover:border-gray-200"
                    }
                    ${i !== 0 ? "border-l border-l-gray-100" : ""}
                  `}
                >
                  {/* Icon bubble */}
                  <div
                    className={`
                    w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-200
                    ${
                      isActive
                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                        : "bg-gray-100 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary"
                    }
                  `}
                  >
                    {tab.icon}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col text-left">
                    <span
                      className={`text-base font-bold tracking-wide transition-colors ${isActive ? "text-primary" : "text-gray-700 group-hover:text-gray-900"}`}
                    >
                      {tab.label}
                    </span>
                    <span
                      className={`text-[11px] font-medium mt-0.5 transition-colors ${isActive ? "text-primary/60" : "text-gray-400 group-hover:text-gray-500"}`}
                    >
                      {tab.description}
                    </span>
                  </div>

                  {/* Active indicator dot */}
                  {isActive && (
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile tabs — pill scrollable */}
          <div className="flex md:hidden items-center gap-2.5 py-3.5 overflow-x-auto scrollbar-none">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold whitespace-nowrap transition-all duration-200 focus:outline-none flex-shrink-0 text-sm
                    ${
                      isActive
                        ? "bg-primary text-white shadow-md shadow-primary/30"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }
                  `}
                >
                  <span
                    className={`transition-colors ${isActive ? "text-white" : "text-gray-400"}`}
                  >
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active tab context strip */}
        {activeTabData && (
          <div className="hidden md:block bg-primary/5 border-t border-primary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-2">
              <span className="text-xs text-gray-400">Viewing:</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                {activeTabData.label}
              </span>
              <span className="text-gray-300 text-xs">·</span>
              <span className="text-xs text-gray-400">
                {activeTabData.description}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "landscaping" && <LandscapingContent />}
        {activeTab === "pest-control" && <PestControlContent />}
        {activeTab === "cleaning" && <CleaningContent />}
      </div>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Contact us today for a free consultation and inspection. Our expert
            team is ready to help you achieve the perfect landscape and
            pest-free environment.
          </p>
          <Link
            href="/contact-us"
            className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all inline-block shadow-lg hover:shadow-xl text-base uppercase tracking-wide"
          >
            Schedule Your Inspection
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
