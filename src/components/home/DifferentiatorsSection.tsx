"use client";

import { motion } from "framer-motion";
import { Differentiator } from "./types";

interface DifferentiatorsSectionProps {
    differentiators: Differentiator[];
}

export default function DifferentiatorsSection({ differentiators }: DifferentiatorsSectionProps) {
    if (differentiators.length === 0) return null;

    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tl from-secondary/20 to-transparent rounded-full filter blur-3xl"></div>
            </div>
            <div className="max-w-[100rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                >
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4 font-bold">
                        What Sets Us Apart
                    </h2>
                    <p className="font-paragraph text-sm sm:text-base md:text-lg text-foreground/70 max-w-3xl mx-auto px-4">
                        Our unique approach combines tradition with innovation,<br /> creating an unparalleled
                        learning experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {differentiators.map((diff, index) => (
                        <motion.div
                            key={diff._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)' }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 100 }}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
                        >
                            {/* Decorative accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>

                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                                {index % 3 === 0 ? (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ) : index % 3 === 1 ? (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                )}
                            </div>

                            <h3 className="font-heading text-lg sm:text-xl text-foreground mb-3 font-bold group-hover:text-primary transition-colors duration-300">
                                {diff.title}
                            </h3>
                            <p className="font-paragraph text-sm sm:text-base text-foreground/70 leading-relaxed">
                                {diff.description}
                            </p>

                            {/* Hover effect */}
                            <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-primary/5 group-hover:scale-150 transition-transform duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
