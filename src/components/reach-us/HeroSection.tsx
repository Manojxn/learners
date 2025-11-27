"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
    const [isImageVisible, setIsImageVisible] = useState(false);

    return (
        <section
            className="relative w-full py-20 md:py-20 overflow-hidden cursor-pointer"
            onClick={() => setIsImageVisible(!isImageVisible)}
            onMouseEnter={() => setIsImageVisible(true)}
            onMouseLeave={() => setIsImageVisible(false)}
        >
            {/* Background Image - Full Screen */}
            <div className="absolute inset-0 left-0 right-0 z-0">
                <div
                    className="absolute inset-0 w-screen bg-contain md:bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/fags.jpg')",
                        marginLeft: '50%',
                        transform: 'translateX(-50%)'
                    }}
                />
                {/* Animated Overlay - Reduces opacity on hover/click */}
                <motion.div
                    className="absolute inset-0 w-screen bg-gradient-to-b from-white via-white to-white"
                    style={{
                        marginLeft: '50%',
                        transform: 'translateX(-50%)'
                    }}
                    animate={{
                        opacity: isImageVisible ? 0.3 : 0.88,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Animated background circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
                <motion.div
                    className="absolute top-10 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: isImageVisible ? [0.1, 0.2, 0.1] : [0.2, 0.4, 0.2],
                        x: [0, 50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-10 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: isImageVisible ? [0.1, 0.2, 0.1] : [0.2, 0.4, 0.2],
                        x: [0, -50, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
            </div>

            <div className="absolute inset-0 overflow-hidden z-10">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 bg-center bg-cover"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 pointer-events-none">
                <div className="flex flex-col justify-between min-h-[350px] sm:min-h-[400px] md:min-h-[450px] py-12 sm:py-16 md:py-20">
                    {/* Title - Top Left on Desktop, Top Center on Mobile */}
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-left md:text-left drop-shadow-lg"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Get in{" "}
                        <motion.span
                            className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            Touch
                        </motion.span>
                    </motion.h1>

                    {/* Subtitle - Bottom Right on Desktop, Bottom Center on Mobile */}
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-full md:max-w-xl leading-relaxed text-left md:text-right md:ml-auto mt-8 md:mt-0 drop-shadow-md"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    >
                        We&apos;re here to help. Connect with us through any of our locations or send us a message.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
