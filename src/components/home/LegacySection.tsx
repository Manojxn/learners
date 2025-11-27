"use client";

import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Quote, Award, Users, TrendingUp } from "lucide-react";

export default function LegacySection() {
    return (
        <section className="relative w-full max-w-[100rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            {/* Animated background elements */}
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

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.2
                        }
                    }
                }}
                className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -30 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.6, ease: "easeOut" }
                            }
                        }}
                    >
                        <div className="relative group">
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Image container */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="relative"
                            >
                                <Image
                                    src="/images/founder.png"
                                    alt="Murali Konareddy - Founder"
                                    className="relative w-full h-auto rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300"
                                    width={500}
                                />

                                {/* Floating badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
                                >
                                    <div className="flex items-center gap-2">
                                        <Award className="w-6 h-6 text-amber-500" />
                                        <div>
                                            <div className="text-sm font-bold text-gray-900">15+ Years</div>
                                            <div className="text-xs text-gray-600">Experience</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="space-y-4 sm:space-y-6"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    ease: "easeOut"
                                }
                            }
                        }}
                    >
                        <motion.h2
                            className="font-heading text-2xl sm:text-3xl md:text-4xl text-foreground font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            A Legacy of Learning
                        </motion.h2>

                        <motion.div className="space-y-4">
                            <motion.p
                                className="font-paragraph text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                At Learners Global, we believe that education is the cornerstone of a thriving
                                society. Our mission is to create an ecosystem where every student discovers their
                                unique potential and develops the skills to excel in an ever-evolving world.
                            </motion.p>
                            <motion.p
                                className="font-paragraph text-sm sm:text-base text-foreground/70 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                With decades of experience in education and corporate training, we&apos;ve built a
                                foundation that bridges academic excellence with real-world readiness.
                            </motion.p>
                        </motion.div>

                        {/* Quote card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                            className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4 sm:p-6 border-l-4 border-primary"
                        >
                            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                            <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
                                "Education is not just about acquiring knowledge; it's about transforming lives and building futures."
                            </p>
                        </motion.div>

                        {/* Achievement stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="grid grid-cols-3 gap-3 sm:gap-4 pt-4"
                        >
                            {[
                                { icon: Users, value: "10K+", label: "Students" },
                                { icon: Award, value: "50+", label: "Awards" },
                                { icon: TrendingUp, value: "98%", label: "Success" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -4, scale: 1.05 }}
                                    className="group bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center"
                                >
                                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform duration-300" />
                                    <div className="text-lg sm:text-xl font-bold text-gray-900">{stat.value}</div>
                                    <div className="text-xs text-gray-600">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="pt-4 border-t border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <p className="font-heading text-lg sm:text-xl text-foreground font-bold">Murali Konareddy</p>
                            <p className="font-paragraph text-xs sm:text-sm text-foreground/60">
                                Founder &amp; Visionary
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
