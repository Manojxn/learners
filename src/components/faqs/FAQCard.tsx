"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ } from "./types";

interface FAQCardProps {
    faq: FAQ;
    isOpen: boolean;
    onClick: () => void;
}

export default function FAQCard({ faq, isOpen, onClick }: FAQCardProps) {
    return (
        <motion.div
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <button
                onClick={onClick}
                className="w-full flex items-start justify-between text-left focus:outline-none group"
            >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors pr-4">
                    {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-4 p-1 rounded-full bg-gray-50 group-hover:bg-primary/10 transition-colors">
                    {isOpen ? (
                        <Minus className="h-5 w-5 text-primary" />
                    ) : (
                        <Plus className="h-5 w-5 text-gray-500 group-hover:text-primary transition-colors" />
                    )}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 text-gray-600">
                            <div className="border-t border-gray-100 pt-4">
                                {faq.answer}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
