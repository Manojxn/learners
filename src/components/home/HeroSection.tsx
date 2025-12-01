"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";

export default function HeroSection() {
    return (
        <section className="relative w-full max-w-[120rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 flex items-center justify-center min-h-[85vh] sm:min-h-[90vh] bg-gradient-to-br from-blue-100/80 via-white to-green-100/70">
            {/* Animated background circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
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
                    className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="order-2 lg:order-1"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 text-foreground leading-tight font-bold"
                    >
                        Shaping <span className="text-primary font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Tomorrow&apos;s</span> Leaders Today
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="font-paragraph text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl"
                    >
                        Learners Global School, Learners PU College & Learners Digital in Mysore are dedicated to fostering academic excellence
                        and holistic development in a nurturing, state-of-the-art environment.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                    >
                        <Link href="/about" className="w-full sm:w-auto">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full"
                            >
                                <Button className="bg-primary text-primary-foreground hover:bg-accent-blue h-11 sm:h-12 px-6 sm:px-8 rounded-lg font-paragraph text-sm sm:text-base transition-all w-full sm:w-auto font-medium shadow-lg hover:shadow-xl">
                                    Discover Our Vision
                                </Button>
                            </motion.div>
                        </Link>
                        <Link href="/reach-us" className="w-full sm:w-auto">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full"
                            >
                                <Button
                                    variant="outline"
                                    className="h-11 sm:h-12 px-6 sm:px-8 rounded-lg font-paragraph text-sm sm:text-base border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all w-full sm:w-auto font-medium"
                                >
                                    Contact Admissions
                                </Button>
                            </motion.div>
                        </Link>
                    </motion.div>
                    <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="mt-8 sm:mt-12 pl-4 sm:pl-6 border-l-4 border-secondary"
                    >
                        <p className="font-paragraph text-xs sm:text-sm md:text-base lg:text-lg text-foreground/70 italic">
                            &quot;Give a Man a Fish, You Feed Him for a Day. Teach a Man To Fish, You Feed Him
                            for a Lifetime.&quot;
                        </p>
                    </motion.blockquote>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
                >
                    <motion.div
                        className="w-full max-w-md lg:max-w-lg"
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src="/images/LL.png"
                                alt="Learners Global Logo"
                                className="w-full h-auto rounded-2xl sm:rounded-3xl drop-shadow-2xl"
                                width={500}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
