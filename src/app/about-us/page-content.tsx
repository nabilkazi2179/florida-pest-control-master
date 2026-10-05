"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import About from "@/components/about";

export default function AboutPageContent() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
              About Florida Landscape and Pest Control Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for expert landscaping and pest control and
              services across the UAE
            </p>
          </div>
        </div>
      </section>

      {/* Main About Component */}
      <About />

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Mission */}
            <div className="space-y-6">
              <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Transforming Spaces with Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                We are committed to delivering comprehensive pest control and
                landscaping solutions that exceed our clients' expectations. Our
                mission is to create safe, beautiful, and thriving environments
                for families and businesses throughout the UAE.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                Through innovation, expertise, and dedication, we transform
                indoor and outdoor spaces into pest-free zones of natural
                beauty.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase">
                Our Vision
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Leading the Green Revolution
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                We envision a future where every property in the UAE enjoys
                professional pest control and stunning landscaping solutions.
                Our vision is to be the most trusted and innovative service
                provider in the region.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                We strive to combine cutting-edge technology with sustainable
                practices to create lasting positive impact on our communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20 space-y-6">
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Expert Professionals You Can Trust
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our team consists of certified experts with decades of combined
              experience in pest control and landscaping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Certified Experts",
                description:
                  "Industry-certified professionals with extensive training and credentials",
              },
              {
                title: "24/7 Support",
                description:
                  "Round-the-clock customer support and emergency services available",
              },
              {
                title: "Quality Assurance",
                description:
                  "Rigorous quality checks and satisfaction guarantees on all services",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
