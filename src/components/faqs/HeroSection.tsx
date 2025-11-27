"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface HeroSectionProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filteredCount: number;
}

export default function HeroSection({ searchQuery, setSearchQuery, filteredCount }: HeroSectionProps) {
    return (
        <section className="relative w-full py-16 md:py-24 overflow-hidden">
            {/* Background Image - Full Screen */}
            <div className="absolute inset-0 left-0 right-0 z-0">
                <div
                    className="absolute inset-0 w-screen bg-cover bg-top bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/reachus.jpg')",
                        marginLeft: '50%',
                        transform: 'translateX(-50%)'
                    }}
                />
                {/* Overlay for better text readability - Darker */}
                <div className="absolute inset-0 w-screen bg-gradient-to-b from-white/80 via-white/75 to-white/80" style={{
                    marginLeft: '50%',
                    transform: 'translateX(-50%)'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                            Frequently Asked
                        </span>{' '}
                        <span>Questions</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Find answers to common questions about our programs, admissions, and more.
                        Can't find what you're looking for?{' '}
                        <a href="/reach-us" className="text-primary hover:underline font-medium">
                            Contact our team
                        </a>
                        .
                    </motion.p>

                    <motion.div
                        className="max-w-2xl mx-auto relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input
                                type="text"
                                placeholder="Search questions..."
                                className="pl-12 pr-6 py-6 text-base rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </motion.div>

                    {searchQuery && (
                        <motion.div
                            className="mt-4 text-sm text-gray-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            Showing {filteredCount} {filteredCount === 1 ? 'result' : 'results'} for "{searchQuery}"
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
