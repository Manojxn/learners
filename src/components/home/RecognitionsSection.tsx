"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Trophy, ChevronLeft, ChevronRight, Award, Star } from "lucide-react";
import { Recognition } from "./types";

interface RecognitionsSectionProps {
    recognitions: Recognition[];
}

export default function RecognitionsSection({ recognitions }: RecognitionsSectionProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const recognitionsRef = useRef<HTMLDivElement>(null);

    // Auto-rotate recognitions
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % Math.ceil(recognitions.length / 3));
        }, 5000);
        return () => clearInterval(interval);
    }, [recognitions.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(recognitions.length / 3));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.ceil(recognitions.length / 3)) % Math.ceil(recognitions.length / 3));
    };

    if (recognitions.length === 0) return null;

    return (
        <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-primary"
                        style={{
                            width: Math.random() * 300 + 100 + 'px',
                            height: Math.random() * 300 + 100 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            filter: 'blur(40px)',
                            transform: `rotate(${Math.random() * 360}deg)`
                        }}
                    />
                ))
                }
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center justify-center mb-3">
                        <Trophy className="w-8 h-8 text-amber-400 mr-2" />
                        <span className="text-sm font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                            Our Achievements
                        </span>
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                        Recognitions & Awards
                    </h2>
                    <p className="font-paragraph text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto px-4">
                        Celebrating milestones of excellence that inspire us to reach greater heights in education and beyond.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Navigation Arrows */}
                    {recognitions.length > 3 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 text-gray-700 hover:text-primary transition-all duration-300"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 text-gray-700 hover:text-primary transition-all duration-300"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}

                    <div
                        ref={recognitionsRef}
                        className="relative w-full overflow-hidden"
                    >
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {Array.from({ length: Math.ceil(recognitions.length / 3) }).map((_, slideIndex) => (
                                <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {recognitions.slice(slideIndex * 3, slideIndex * 3 + 3).map((recognition, index) => (
                                            <motion.div
                                                key={recognition._id}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                                                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-gray-100 relative overflow-hidden"
                                            >
                                                {/* Decorative corner */}
                                                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full transition-all duration-300 group-hover:bg-primary/10" />

                                                {/* Award icon */}
                                                <div className="relative mb-6">
                                                    <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-4 relative z-10 group-hover:bg-primary/10 transition-colors duration-300">
                                                        {recognition.recognitionImage ? (
                                                            <Image
                                                                src={recognition.recognitionImage}
                                                                alt={recognition.recognitionName || "Award"}
                                                                className="w-12 h-12 object-contain"
                                                                width={48}
                                                                height={48}
                                                            />
                                                        ) : (
                                                            <Award className="w-8 h-8" />
                                                        )}
                                                    </div>
                                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                        <Star className="w-3 h-3 fill-current" />
                                                    </div>
                                                </div>

                                                <h4 className="font-heading text-lg sm:text-xl text-foreground mb-2 font-bold group-hover:text-primary transition-colors duration-300">
                                                    {recognition.recognitionName}
                                                </h4>

                                                {recognition.awardYear && (
                                                    <div className="mt-2 px-4 py-1.5 bg-primary/5 text-primary text-xs font-medium rounded-full group-hover:bg-primary/10 transition-colors duration-300">
                                                        Awarded in {recognition.awardYear}
                                                    </div>
                                                )}

                                                <div className="mt-6 w-12 h-1 bg-primary/20 rounded-full group-hover:w-16 transition-all duration-500"></div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots indicator */}
                    {recognitions.length > 3 && (
                        <div className="flex justify-center mt-8 space-x-2">
                            {Array.from({ length: Math.ceil(recognitions.length / 3) }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
