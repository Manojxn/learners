"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Clock, CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactFormSection() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

            if (!scriptURL) {
                throw new Error("Google Script URL not configured");
            }

            const payload = {
                full_name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
                timestamp: new Date().toISOString(),
            };

            await fetch(scriptURL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            // Show success modal
            setFormData({ name: "", email: "", phone: "", message: "" });
            setShowSuccessModal(true);

            // Auto-close modal after 3 seconds
            setTimeout(() => {
                setShowSuccessModal(false);
            }, 3000);
        } catch (error) {
            console.error("Error submitting form:", error);
            toast({
                title: "Error",
                description: "Failed to send message. Please try again or contact us directly.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <section className="w-full bg-gray-50 py-16 sm:py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5 }}
                                className="pr-0 lg:pr-8"
                            >
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Have questions or need more information? Fill out the form and our team
                                    will get back to you promptly.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-500 mb-1">Phone</h3>
                                            <a href="tel:+919916933202" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
                                                +91 9916933202
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
                                            <a href="mailto:connect@learnersdigital.com" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
                                                connect@learnersdigital.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-500 mb-1">
                                                Office Hours
                                            </h3>
                                            <div className="text-base text-gray-900 space-y-1">
                                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                                <p>Saturday: 9:00 AM - 2:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100"
                            >
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="text-sm font-medium text-gray-700 mb-1.5 block"
                                        >
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <Input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full h-11 px-4 bg-gray-50 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                                                placeholder="Rama"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-medium text-gray-700 mb-1.5 block"
                                        >
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full h-11 px-4 bg-gray-50 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="text-sm font-medium text-gray-700 mb-1.5 block"
                                        >
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full h-11 px-4 bg-gray-50 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                                                placeholder="+91 1234567890"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="text-sm font-medium text-gray-700 mb-1.5 block"
                                        >
                                            Your Message <span className="text-red-500">*</span>
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full min-h-[120px] p-3 bg-gray-50 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </Button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccessModal && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                        onClick={() => setShowSuccessModal(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
                        >
                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                >
                                    <CheckCircle className="w-10 h-10 text-green-600" />
                                </motion.div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                <p className="text-gray-600">
                                    Thank you for reaching out. We'll get back to you soon.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
