"use client";

import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const partners = [
    {
        name: "Onyx Health",
        logo: "/images/partners/onyx-health.png",
        website: "https://www.onyxhealth.io/",
    },
    {
        name: "Abacus Insights",
        logo: "/images/partners/abacus-insights.png",
        website: "https://abacusinsights.com/",
    },
    {
        name: "Infosys",
        logo: "/images/partners/infosys.png",
        website: "https://www.infosys.com/",
    },
    {
        name: "KSoU Mysuru",
        logo: "/images/partners/ksou.jpg",
        website: "https://www.ksoumysuru.ac.in/",
    },
    {
        name: "CBSE",
        logo: "/images/partners/cbse.png",
        website: "https://www.cbse.gov.in/",
    },
];

// Duplicate partners for infinite scroll effect
const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

export default function PartnersSection() {
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    {/* <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                        Our Partners
                    </span> */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
                        Trusted by <span className="text-primary">Industry Leaders</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        We collaborate with leading organizations to provide world-class education and opportunities for our students.
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30 group"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30 group"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
                    </button>

                    {/* Scrolling Container */}
                    <div
                        ref={containerRef}
                        className="overflow-x-auto mx-12 scrollbar-hide"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <motion.div
                            className="flex gap-6 sm:gap-8"
                            animate={!isPaused ? {
                                x: [0, -100 * partners.length],
                            } : {}}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 8, // Fast: 8 seconds
                                    ease: "linear",
                                },
                            }}
                        >
                            {duplicatedPartners.map((partner, index) => (
                                <motion.a
                                    key={`${partner.name}-${index}`}
                                    href={partner.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -8, scale: 1.05 }}
                                    className="group relative bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 flex-shrink-0 w-48 sm:w-56"
                                >
                                    {/* Hover gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative flex items-center justify-center h-20 sm:h-24">
                                        <Image
                                            src={partner.logo}
                                            alt={`${partner.name} logo`}
                                            width={200}
                                            height={80}
                                            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>

                                    {/* Partner name - visible on hover */}
                                    <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-sm font-medium text-gray-900">{partner.name}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Bottom text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12 sm:mt-16"
                >
                    <p className="text-sm sm:text-base text-gray-500">
                        Building partnerships that empower our students to excel in their careers
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
