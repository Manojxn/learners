"use client";

import { motion } from "framer-motion";
import FAQCard from "./FAQCard";
import { FAQ } from "./types";

interface FAQListProps {
    title?: string;
    faqs: FAQ[];
    expandedItems: Set<string>;
    toggleItem: (id: string) => void;
    id?: string;
    onViewportEnter?: () => void;
    className?: string;
}

export default function FAQList({
    title,
    faqs,
    expandedItems,
    toggleItem,
    id,
    onViewportEnter,
    className = "w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
}: FAQListProps) {
    if (faqs.length === 0) return null;

    return (
        <section id={id} className={className}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                onViewportEnter={onViewportEnter}
            >
                {title && (
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
                        <div className="text-sm text-gray-500">{faqs.length} questions</div>
                    </div>
                )}
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <FAQCard
                            key={faq._id}
                            faq={faq}
                            isOpen={expandedItems.has(faq._id)}
                            onClick={() => toggleItem(faq._id)}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
