"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface Client {
  name: string;
  logo: string;
  id: number;
}

const clients: Client[] = [
  { id: 3, name: "Dubai Landscape", logo: "/images/brand3.png" },
  { id: 4, name: "Urban Spaces", logo: "/images/brand12.png" },
  { id: 5, name: "Garden Design Co", logo: "/images/brand13.png" },
  { id: 6, name: "Premier Exteriors", logo: "/images/brand14.png" },
  { id: 7, name: "Premier Exteriors", logo: "/images/brand15.png" },
  { id: 8, name: "Premier Exteriors", logo: "/images/brand16.png" },
  { id: 9, name: "Premier Exteriors", logo: "/images/brand4.png" },
  { id: 10, name: "Premier Exteriors", logo: "/images/brand9.png" },
  { id: 11, name: "Premier Exteriors", logo: "/images/brand10.png" },
  { id: 12, name: "Premier Exteriors", logo: "/images/brand11.png" },
];

export const InfiniteMovingCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLUListElement | null>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current && duplicatedItem instanceof HTMLElement) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "reverse",
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-duration", "40s");
    }
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
        <div
          ref={containerRef}
          className="relative z-20 w-full overflow-hidden"
        >
          <ul
            ref={scrollerRef}
            className={`flex items-center justify-center gap-4 md:gap-8 py-4 w-max
            ${start ? "animate-scroll" : ""}
            hover:[animation-play-state:paused]`}
          >
            {clients.map((client, idx) => (
              <li
                key={idx}
                className="w-32 h-20 md:w-48 md:h-32 flex items-center justify-center bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="relative w-full h-full p-4">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
