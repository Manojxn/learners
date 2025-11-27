"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, Phone, Send, Linkedin } from "lucide-react";

const contactOptions = [
    {
        icon: Mail,
        label: "Email",
        href: "mailto:info@learnersglobal.com",
        color: "from-red-500 to-pink-500",
    },
    {
        icon: Phone,
        label: "Call",
        href: "tel:+919916397939",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: Send,
        label: "WhatsApp",
        href: "https://wa.me/919916397939",
        color: "from-green-400 to-green-600",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/learners-digital/",
        color: "from-blue-600 to-blue-700",
    },
];

export default function FloatingContactButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 w-64 border border-gray-100"
                    >
                        <div className="mb-3">
                            <h3 className="text-lg font-bold text-gray-900">Connect with Us</h3>
                            <p className="text-xs text-gray-500 mt-1">Choose your preferred method</p>
                        </div>

                        <div className="space-y-2">
                            {contactOptions.map((option, index) => (
                                <motion.a
                                    key={option.label}
                                    href={option.href}
                                    target={option.href.startsWith("http") ? "_blank" : undefined}
                                    rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.02, x: 4 }}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
                                >
                                    <div className={`p-2 rounded-lg bg-gradient-to-r ${option.color} text-white`}>
                                        <option.icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                                            {option.label}
                                        </p>
                                    </div>
                                    <svg
                                        className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 ${isOpen
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-gradient-to-r from-primary to-secondary hover:shadow-primary/50"
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="w-6 h-6 text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageCircle className="w-6 h-6 text-white" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pulse animation when closed */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                )}
            </motion.button>

            {/* Tooltip */}
            {!isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    Connect with Us
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
                </motion.div>
            )}
        </div>
    );
}
