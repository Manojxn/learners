"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { ChevronLeft, ChevronRight, Users, TrendingUp, GraduationCap, Building2, Target, BookOpen, Lightbulb, Globe } from "lucide-react";

const campusImages = [
    {
        src: "/images/campus/MathDay.jpg",
        caption: "World's Skill Day – Learners Maths Day!"
    },
    {
        src: "/images/campus/h1.jpg",
        caption: "Foundation Stone Laying Ceremony on Aug 16, 2015"
    },
    {
        src: "/images/campus/h2.jpg",
        caption: "Foundation Stone Laid By Shri N.R. Narayana Murthy (Founder, Infosys)"
    },
    {
        src: "/images/campus/prince.jpg",
        caption: "The Mysore Prince's visit on World Youth Skills Day!"
    },
    {
        src: "/images/campus/NEETCoaching.jpg",
        caption: "NEET Coaching @ KSOU!"
    },
    {
        src: "/images/campus/babarali.jpg",
        caption: "Children's Day celebration with the world's youngest headmaster, Babar Ali, in the presence of Ramakrishna Adhyaksha Atmajnananda Swami!"
    }
];

const stats = [
    {
        value: "15+",
        label: "Years of Excellence",
        icon: TrendingUp,
        color: "from-blue-500 to-indigo-600",
    },
    {
        value: "20K+",
        label: "Students Impacted",
        icon: Users,
        color: "from-emerald-500 to-teal-600",
    },

    {
        value: "200+",
        label: "Expert Educators",
        icon: Users,
        color: "from-purple-500 to-pink-600",
    },
    {
        value: "3+",
        label: "Campuses & Centers",
        icon: Building2,
        color: "from-rose-500 to-red-600",
    },
];

const differentiators = [
    {
        icon: Target,
        title: "Holistic Development",
        description: "Our curriculum emphasizes academic excellence alongside character building, critical thinking, and extracurricular engagement for well-rounded individuals.",
        color: "from-emerald-500 to-teal-600",
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
    },
    {
        icon: BookOpen,
        title: "Experienced Faculty",
        description: "A team of highly qualified and dedicated educators committed to nurturing each student's potential and fostering a love for learning.",
        color: "from-blue-500 to-indigo-600",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
    },
    {
        icon: Lightbulb,
        title: "Modern Infrastructure",
        description: "State-of-the-art facilities, advanced laboratories, and digital learning resources create an optimal environment for innovative education.",
        color: "from-amber-500 to-orange-600",
        iconBg: "bg-amber-50",
        iconColor: "text-amber-600",
    },
    {
        icon: Globe,
        title: "Global Perspective",
        description: "We prepare students for a globalized world through an internationalized curriculum, cultural exchange programs, and diverse learning experiences.",
        color: "from-purple-500 to-pink-600",
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
    },
];

export default function LegacySection() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    // Auto-rotate images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % campusImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % campusImages.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + campusImages.length) % campusImages.length);
    };

    return (
        <section className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
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
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-12 md:mb-16"
                >
                    {/* <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-600 border border-blue-200 mb-3 sm:mb-4">
                        Our Story
                    </span> */}
                    <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4 font-bold px-4">
                        A Legacy of{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 whitespace-nowrap">
                            Educational Excellence
                        </span>
                    </h2>
                    <p className="font-paragraph text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed">
                        Founded in 2006, Learners has grown from a single institution to a comprehensive educational ecosystem, serving thousands of students across multiple verticals. Our journey has been marked by innovation, academic excellence, and an unwavering commitment to student success.
                    </p>
                </motion.div>

                {/* Image Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="relative mb-12 sm:mb-16"
                >
                    <div
                        className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-110 text-gray-700 hover:text-primary transition-all duration-300"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-110 text-gray-700 hover:text-primary transition-all duration-300"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                            {campusImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-700 ${currentImage === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.caption}
                                        className="w-full h-full object-cover"
                                        width={1200}
                                        height={600}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                    {currentImage === index && (
                                        <div className={`absolute inset-0 flex items-end justify-center p-6 sm:p-8 md:p-12 z-20 transition-opacity duration-500 ${isHovering ? 'opacity-100' : 'opacity-0'
                                            }`}>
                                            <div className={`bg-black/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl max-w-4xl w-full border border-white/20 transform transition-transform duration-500 ${isHovering ? 'translate-y-0' : 'translate-y-4'
                                                }`}>
                                                <p className="text-sm sm:text-base md:text-lg text-white font-semibold text-center leading-relaxed">
                                                    {image.caption}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                            {campusImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentImage === index
                                        ? 'bg-white w-8'
                                        : 'bg-white/50 hover:bg-white/75 w-2'
                                        }`}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Combined Stats & Differentiators - Fits in One Viewport */}
                <div className="space-y-8 sm:space-y-12">
                    {/* Stats Row - Compact Horizontal Layout */}
                    <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    whileHover={{ y: -4, scale: 1.03 }}
                                    className="group relative bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 lg:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                                >
                                    <div className="mb-2 sm:mb-3">
                                        <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.color} shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110`}>
                                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className={`text-lg sm:text-2xl lg:text-3xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-br ${stat.color}`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-[10px] sm:text-sm text-gray-600 font-medium leading-tight">
                                        {stat.label}
                                    </div>
                                    <div className={`mt-2 sm:mt-3 h-0.5 sm:h-1 w-8 sm:w-12 mx-auto bg-gradient-to-r ${stat.color} rounded-full group-hover:w-full transition-all duration-500`} />
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* What Sets Us Apart - Compact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-6 sm:mb-8"
                    >
                        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-2 sm:mb-3 font-bold">
                            What Sets Us{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                Apart
                            </span>
                        </h2>
                        <p className="font-paragraph text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                            Our unique approach combines tradition with innovation, creating an unparalleled learning experience.
                        </p>
                    </motion.div>

                    {/* Differentiators - 4 Column Compact Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                        {differentiators.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    whileHover={{ y: -6 }}
                                    className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                                >
                                    {/* Icon */}
                                    <div className="mb-3 sm:mb-4">
                                        <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.iconColor}`} />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className={`font-heading text-base sm:text-lg font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}>
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>

                                    {/* Decorative line */}
                                    <div className={`mt-3 sm:mt-4 h-0.5 sm:h-1 w-12 bg-gradient-to-r ${item.color} rounded-full group-hover:w-full transition-all duration-500`} />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
