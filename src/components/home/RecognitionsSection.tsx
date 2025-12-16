"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Trophy, Award, Medal, Star, Sparkles, GraduationCap, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const baseAchievements = [
    {
        id: "1",
        title: "10 Most Promising Educational Institutes in Karnataka",
        description: "Recognised by Siliconindia Magazine (Education Edition) for academic excellence, infrastructure and student outcomes.",
        icon: Trophy,
        gradient: "from-amber-500 to-orange-600",
        bgGradient: "from-amber-50 to-orange-50",
        accentColor: "text-amber-600",
        borderColor: "border-amber-200",
    },
    {
        id: "2",
        title: "Infosys Valuable Partner Award",
        description: "Recognised for collaboration in academic development and talent enablement initiatives.",
        icon: Award,
        image: "/images/Awards/infosys.png",
        gradient: "from-blue-500 to-indigo-600",
        bgGradient: "from-blue-50 to-indigo-50",
        accentColor: "text-blue-600",
        borderColor: "border-blue-200",
    },
    {
        id: "3",
        title: "Narayana Hrudayalaya (NH) Scholarship Recognition",
        description: "Recognised for collaboration in academic development and Scholarship support for NEET aspirants",
        icon: GraduationCap,
        gradient: "from-emerald-50 to-teal-600",
        bgGradient: "from-emerald-50 to-teal-50",
        accentColor: "text-emerald-600",
        borderColor: "border-emerald-200",
    },
    {
        id: "4",
        title: "BAGARIA EDUCATION FOUNDATION",
        description: "Honoured for contributions towards educational upliftment and community development.",
        icon: Heart,
        gradient: "from-rose-500 to-pink-600",
        bgGradient: "from-rose-50 to-pink-50",
        accentColor: "text-rose-600",
        borderColor: "border-rose-200",
    },
];

// Duplicate achievements to create infinite loop effect
const achievements = [
    ...baseAchievements.map((a, i) => ({ ...a, id: `${a.id}-1` })),
    ...baseAchievements.map((a, i) => ({ ...a, id: `${a.id}-2` })),
    ...baseAchievements.map((a, i) => ({ ...a, id: `${a.id}-3` })),
];

export default function RecognitionsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(achievements.length / itemsPerSlide);

    // Auto-rotate carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-10 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"
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
                    className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
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
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <div className="inline-flex items-center justify-center mb-4">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                            <Trophy className="w-10 h-10 text-amber-500 mr-3" />
                        </motion.div>
                        <span className="text-sm font-semibold text-amber-600 bg-amber-50 px-4 py-2 rounded-full border border-amber-200">
                            Our Achievements
                        </span>
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4 font-bold">
                        Recognitions{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600">
                            & Awards
                        </span>
                    </h2>
                    <p className="font-paragraph text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
                        Celebrating milestones of excellence that inspire us to reach greater heights in education and beyond.
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 text-gray-700 hover:text-primary transition-all duration-300"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 text-gray-700 hover:text-primary transition-all duration-300"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Carousel Container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {achievements
                                            .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                                            .map((achievement, index) => {
                                                const Icon = achievement.icon;
                                                return (
                                                    <motion.div
                                                        key={achievement.id}
                                                        initial={{ opacity: 0, y: 40 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true, margin: "-50px" }}
                                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                                        whileHover={{ y: -8, scale: 1.02 }}
                                                        className="group relative"
                                                    >
                                                        {/* Card */}
                                                        <div className={`relative h-full bg-gradient-to-br ${achievement.bgGradient} rounded-2xl p-6 sm:p-8 border-2 ${achievement.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                                                            {/* Decorative corner accent */}
                                                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.gradient} opacity-10 rounded-bl-full transition-all duration-300 group-hover:opacity-20 group-hover:scale-110`} />

                                                            {/* Sparkle effect on hover */}
                                                            <motion.div
                                                                className="absolute top-4 right-4"
                                                                initial={{ opacity: 0, scale: 0 }}
                                                                whileHover={{ opacity: 1, scale: 1 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                <Sparkles className={`w-6 h-6 ${achievement.accentColor}`} />
                                                            </motion.div>

                                                            <div className="relative z-10">
                                                                {/* Icon Badge */}
                                                                <div className="mb-6">
                                                                    <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${achievement.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 overflow-hidden`}>
                                                                        {(achievement as any).image ? (
                                                                            <Image
                                                                                src={(achievement as any).image}
                                                                                alt={achievement.title}
                                                                                width={80}
                                                                                height={80}
                                                                                className="w-full h-full object-cover"
                                                                            />
                                                                        ) : (
                                                                            <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                                                        )}
                                                                    </div>
                                                                    {/* Star badge */}
                                                                    <div className="inline-block ml-3 align-top">
                                                                        <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center shadow-md">
                                                                            <Star className="w-4 h-4 text-white fill-current" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Title */}
                                                                <h3 className={`font-heading text-lg sm:text-xl font-bold mb-3 ${achievement.accentColor} group-hover:scale-105 transition-transform duration-300 origin-left`}>
                                                                    {achievement.title}
                                                                </h3>

                                                                {/* Description */}
                                                                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                                                    {achievement.description}
                                                                </p>

                                                                {/* Decorative line */}
                                                                <div className="flex items-center gap-2 mt-6">
                                                                    <div className={`h-1 w-12 bg-gradient-to-r ${achievement.gradient} rounded-full group-hover:w-20 transition-all duration-500`} />
                                                                    <div className={`h-1 w-1 ${achievement.accentColor} bg-current rounded-full`} />
                                                                    <div className={`h-1 w-1 ${achievement.accentColor} bg-current rounded-full`} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom decorative element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    {/* <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full border border-amber-200">
                        <Medal className="w-5 h-5 text-amber-600" />
                        <span className="text-sm font-medium text-gray-700">
                            Committed to Excellence in Education
                        </span>
                        <Medal className="w-5 h-5 text-amber-600" />
                    </div> */}
                </motion.div>
            </div>
        </section>
    );
}
