"use client";

import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { ArrowRight } from "lucide-react";
import { Vertical } from "./types";

interface VerticalsSectionProps {
    verticals: Vertical[];
}

export default function VerticalsSection({ verticals }: VerticalsSectionProps) {
    return (
        <section className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 sm:mb-12 md:mb-16"
            >
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4 font-bold">
                    Our Pillars of Excellence
                </h2>
                <p className="font-paragraph text-sm sm:text-base md:text-lg text-foreground/70 max-w-3xl mx-auto px-4">
                    Three distinct verticals working in harmony to create comprehensive educational and
                    professional solutions.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {verticals.map((vertical, index) => (
                    <motion.div
                        key={vertical._id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 100 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group relative border border-gray-100"
                    >
                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                        {vertical.verticalImage && (
                            <div className="w-full h-48 sm:h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                                <Image
                                    src={vertical.verticalImage || ''}
                                    alt={vertical.title || "Vertical image"}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    width={600}
                                    height={300}
                                />
                                {/* Removed badge from here */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                    <div className="transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="w-20 h-20 flex items-center justify-center">
                                            <Image
                                                src="/images/LL.png"
                                                alt="Logo"
                                                width={80}
                                                height={80}
                                                className="object-contain"
                                                style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-3 transition-colors duration-300 p-1">
                                    <Image
                                        src="/images/LL.png"
                                        alt="Logo"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                        style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))' }}
                                    />
                                </div>
                                <h3 className="font-heading text-xl sm:text-2xl text-foreground font-bold group-hover:text-primary transition-colors duration-300">
                                    {vertical.title}
                                </h3>
                            </div>
                            <div className="relative flex-grow mb-4 sm:mb-6 overflow-hidden
                before:absolute before:bottom-0 before:left-0 before:right-0 before:h-8 before:bg-gradient-to-t before:from-white before:to-transparent before:z-10 before:pointer-events-none
                group-hover:before:opacity-0 before:transition-opacity before:duration-300
              ">
                                <p className="font-paragraph text-sm sm:text-base text-foreground/70 leading-relaxed">
                                    {vertical.shortDescription}
                                </p>
                            </div>
                            {vertical.knowMoreUrl && (
                                <div className="mt-auto pt-2">
                                    <a
                                        href={vertical.knowMoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 font-medium text-primary group-hover:text-primary/80 transition-colors text-sm sm:text-base"
                                    >
                                        Know More
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
