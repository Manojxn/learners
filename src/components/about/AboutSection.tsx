"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Quote, Mail, Phone, ChevronLeft, ChevronRight } from "lucide-react";

const founders = [
    {
        name: "Murali Mohan Konareddy",
        title: "Founder | Director",
        image: "/images/founderr.png",
        credentials: [
            { text: "M.Tech IIT Kanpur", color: "blue" },
            { text: "Ex Head of Infosys China Education Center", color: "purple" }
        ],
        message: [
            "Learners believe true education isn't about giving answers, but empowering students to find them. Our mission is to cultivate lifelong, independent learners who achieve excellence with confidence.",
            "Inspired by engineering discipline, we apply structured processes, proven frameworks, and powerful tools to learning—assuring consistent, high-quality outcomes for every student. We have combined the 5W1H framework, mind mapping, and study technology to build a unique methodology that makes learning simple, engaging, and highly effective.",
            "Our students are our greatest products, and we are committed to helping each one reach 100% proficiency.",
            "With decades of experience in education and corporate training, we've built a foundation that bridges academic excellence with real-world readiness."
        ],
        quote: "Learners Today, Leaders Tomorrow",
        email: "murali@learnersdigital.com",
        phone: "+91 9916933202"
    },
    {
        name: "Madhavi Latha Konareddy",
        title: "Founder | Principal",
        image: "/images/co-founder.jpeg",
        credentials: [
            { text: "M. Sc. Computer Science", color: "emerald" }
        ],
        focus: "Computer Science, Public Speaking, Administration",
        message: [
            "My journey with Learners began 14 years ago when, with limited resources and a mere handful of students, we built Learners PU School from scratch. Ever since then, the energy and curiosity that students bring into the classroom have indeed inspired me each day.",
            "I firmly believe in the reciprocal nature of education: just as students learn from us, they motivate, challenge, and energize us in return. This dynamic exchange is what fuels my passion for teaching and leadership.",
            "I am deeply committed to the cause of offering each and every student a superior learning experience on campus, nurturing their academic growth, but also the general character and potential of the students."
        ],
        email: "madhavi@learnersdigital.com",
        phone: "+91 9916933202"
    }
];

const colorClasses = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200"
};

const AboutSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-rotate carousel every 10 seconds (unless paused)
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % founders.length);
        }, 10000); // 10 seconds for better reading time

        return () => clearInterval(interval);
    }, [isPaused]);

    const nextFounder = () => {
        setCurrentIndex((prev) => (prev + 1) % founders.length);
        setIsPaused(true); // Pause auto-rotation when user manually navigates
    };

    const prevFounder = () => {
        setCurrentIndex((prev) => (prev - 1 + founders.length) % founders.length);
        setIsPaused(true); // Pause auto-rotation when user manually navigates
    };

    const currentFounder = founders[currentIndex];

    return (
        <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
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
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    {/* <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-600 border border-blue-200 mb-4">
                        From Our Founders
                    </span> */}
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gray-900 font-bold">
                        Founder's{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Message
                        </span>
                    </h2>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Arrows - Desktop */}
                    {founders.length > 1 && (
                        <>
                            <button
                                onClick={prevFounder}
                                className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 text-gray-700 hover:text-primary transition-all duration-300 border border-gray-200"
                                aria-label="Previous founder"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextFounder}
                                className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 text-gray-700 hover:text-primary transition-all duration-300 border border-gray-200"
                                aria-label="Next founder"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Desktop Layout - Side by Side */}
                            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
                                {/* Founder Image */}
                                <div className="relative">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 mix-blend-overlay"></div>
                                        <Image
                                            src={currentFounder.image}
                                            alt={currentFounder.name}
                                            width={600}
                                            height={700}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>

                                    {/* Floating Quote Badge */}
                                    {currentFounder.quote && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3, duration: 0.5 }}
                                            className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-xs"
                                        >
                                            <Quote className="w-8 h-8 text-primary mb-2" />
                                            <p className="text-sm font-semibold text-gray-900 italic">
                                                "{currentFounder.quote}"
                                            </p>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Message Content - Desktop */}
                                <div className="space-y-6">
                                    {/* Name and Title */}
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{currentFounder.name}</h3>
                                        <p className="text-base sm:text-lg text-gray-700 font-semibold mt-1">{currentFounder.title}</p>
                                    </div>

                                    {/* Credentials */}
                                    <div className="flex flex-wrap gap-2">
                                        {currentFounder.credentials.map((cred, idx) => (
                                            <span
                                                key={idx}
                                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${colorClasses[cred.color as keyof typeof colorClasses]}`}
                                            >
                                                {cred.text}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Areas of Focus */}
                                    {currentFounder.focus && (
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Areas of Focus</p>
                                            <p className="text-sm text-gray-700">{currentFounder.focus}</p>
                                        </div>
                                    )}

                                    {/* Main Message */}
                                    <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                                        {currentFounder.message.map((paragraph, idx) => (
                                            <p key={idx}>
                                                {paragraph.includes("5W1H framework") ? (
                                                    <>
                                                        {paragraph.split("5W1H framework")[0]}
                                                        <span className="font-semibold text-gray-900">5W1H framework</span>
                                                        {paragraph.split("5W1H framework")[1].split("mind mapping")[0]}
                                                        <span className="font-semibold text-gray-900">mind mapping</span>
                                                        {paragraph.split("mind mapping")[1].split("study technology")[0]}
                                                        <span className="font-semibold text-gray-900">study technology</span>
                                                        {paragraph.split("study technology")[1]}
                                                    </>
                                                ) : paragraph.includes("100% proficiency") ? (
                                                    <>
                                                        {paragraph.split("100% proficiency")[0]}
                                                        <span className="font-semibold text-primary">100% proficiency</span>
                                                        {paragraph.split("100% proficiency")[1]}
                                                    </>
                                                ) : (
                                                    paragraph
                                                )}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Contact Information */}
                                    <div className="pt-6 border-t border-gray-200">
                                        <div className="flex flex-col gap-2">
                                            <a
                                                href={`mailto:${currentFounder.email}`}
                                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors group"
                                            >
                                                <Mail className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                                                <span className="break-all">{currentFounder.email}</span>
                                            </a>
                                            <a
                                                href={`tel:${currentFounder.phone}`}
                                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors group"
                                            >
                                                <Phone className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                                                <span>{currentFounder.phone}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile/Tablet Layout - Compact Card */}
                            <div className="lg:hidden bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                                {/* Founder Image - Top */}
                                <div className="relative h-72 sm:h-96 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 mix-blend-overlay z-10"></div>
                                    <Image
                                        src={currentFounder.image}
                                        alt={currentFounder.name}
                                        width={600}
                                        height={500}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                {/* Content - Below Image */}
                                <div className="p-6 space-y-4">
                                    {/* Name and Title */}
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{currentFounder.name}</h3>
                                        <p className="text-sm sm:text-base text-gray-700 font-semibold mt-1">{currentFounder.title}</p>
                                    </div>

                                    {/* Credentials */}
                                    <div className="flex flex-wrap gap-2">
                                        {currentFounder.credentials.map((cred, idx) => (
                                            <span
                                                key={idx}
                                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colorClasses[cred.color as keyof typeof colorClasses]}`}
                                            >
                                                {cred.text}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Areas of Focus */}
                                    {currentFounder.focus && (
                                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Areas of Focus</p>
                                            <p className="text-xs text-gray-700">{currentFounder.focus}</p>
                                        </div>
                                    )}

                                    {/* Main Message - Truncated for mobile */}
                                    <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                                        {currentFounder.message.slice(0, 2).map((paragraph, idx) => (
                                            <p key={idx} className={idx > 0 ? "line-clamp-3" : ""}>
                                                {paragraph.includes("5W1H framework") ? (
                                                    <>
                                                        {paragraph.split("5W1H framework")[0]}
                                                        <span className="font-semibold text-gray-900">5W1H framework</span>
                                                        {paragraph.split("5W1H framework")[1].split("mind mapping")[0]}
                                                        <span className="font-semibold text-gray-900">mind mapping</span>
                                                        {paragraph.split("mind mapping")[1].split("study technology")[0]}
                                                        <span className="font-semibold text-gray-900">study technology</span>
                                                        {paragraph.split("study technology")[1]}
                                                    </>
                                                ) : paragraph.includes("100% proficiency") ? (
                                                    <>
                                                        {paragraph.split("100% proficiency")[0]}
                                                        <span className="font-semibold text-primary">100% proficiency</span>
                                                        {paragraph.split("100% proficiency")[1]}
                                                    </>
                                                ) : (
                                                    paragraph
                                                )}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Quote Card */}
                                    {currentFounder.quote && (
                                        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-4 border-l-4 border-primary">
                                            <Quote className="w-5 h-5 text-primary/40 mb-2" />
                                            <p className="text-sm font-semibold text-gray-900 italic">
                                                "{currentFounder.quote}"
                                            </p>
                                        </div>
                                    )}

                                    {/* Contact Information */}
                                    <div className="pt-4 border-t border-gray-200">
                                        <div className="flex flex-col gap-2">
                                            <a
                                                href={`mailto:${currentFounder.email}`}
                                                className="flex items-center gap-2 text-xs text-gray-600 hover:text-primary transition-colors group"
                                            >
                                                <Mail className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                                                <span className="break-all">{currentFounder.email}</span>
                                            </a>
                                            <a
                                                href={`tel:${currentFounder.phone}`}
                                                className="flex items-center gap-2 text-xs text-gray-600 hover:text-primary transition-colors group"
                                            >
                                                <Phone className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                                                <span>{currentFounder.phone}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dot Indicators */}
                    {founders.length > 1 && (
                        <div className="flex justify-center gap-2 mt-8 lg:hidden">
                            {founders.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        setIsPaused(true); // Pause auto-rotation when user clicks dot
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index
                                        ? 'bg-primary w-8'
                                        : 'bg-gray-300 hover:bg-gray-400 w-2'
                                        }`}
                                    aria-label={`Go to founder ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
