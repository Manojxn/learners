"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export type TimelineItem = {
    _id: string;
    year?: string;
    title?: string;
    description?: string;
    displayOrder?: number;
};

type TimelineProps = {
    timeline: TimelineItem[];
};

// Group timeline items by decade
const groupByDecade = (items: TimelineItem[]) => {
    const groups: { [key: string]: TimelineItem[] } = {};

    items.forEach(item => {
        if (!item.year) return;

        // Extract the starting year from ranges like "2008–2014"
        const yearMatch = item.year.match(/^\d{4}/);
        if (!yearMatch) return;

        const year = parseInt(yearMatch[0]);
        const decade = Math.floor(year / 10) * 10;
        const decadeKey = `${decade}s`;

        if (!groups[decadeKey]) {
            groups[decadeKey] = [];
        }
        groups[decadeKey].push(item);
    });

    return groups;
};

const Timeline = ({ timeline }: TimelineProps) => {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set()); // Start collapsed
    const [selectedDecade, setSelectedDecade] = useState<string | null>(null); // null = show all

    if (!timeline || timeline.length === 0) return null;

    const groupedTimeline = groupByDecade(timeline);
    const decades = Object.keys(groupedTimeline).sort((a, b) => {
        const yearA = parseInt(a);
        const yearB = parseInt(b);
        return yearB - yearA; // Descending order
    });

    const toggleItem = (id: string) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        setExpandedItems(newExpanded);
    };

    const expandAll = () => {
        const allIds = new Set(timeline.map(item => item._id));
        setExpandedItems(allIds);
    };

    const collapseAll = () => {
        setExpandedItems(new Set());
    };

    const selectDecade = (decade: string) => {
        // Toggle: if same decade clicked, show all; otherwise show selected decade
        setSelectedDecade(selectedDecade === decade ? null : decade);
    };

    const showAllDecades = () => {
        setSelectedDecade(null);
    };

    // Filter decades to show
    const decadesToShow = selectedDecade ? [selectedDecade] : decades;

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
                    {/* <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                        Our Journey
                    </span> */}
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                        Milestones in Excellence
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600">
                        A 34-year journey from volunteer teacher to global education leader
                    </p>
                </div>

                {/* Decade Navigation */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                        <button
                            onClick={showAllDecades}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedDecade === null
                                ? 'bg-primary text-white shadow-md'
                                : 'bg-white text-gray-700 border border-gray-200 hover:border-primary/50 hover:text-primary'
                                }`}
                        >
                            All Decades
                        </button>
                        {decades.map((decade) => (
                            <button
                                key={decade}
                                onClick={() => selectDecade(decade)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedDecade === decade
                                    ? 'bg-primary text-white shadow-md'
                                    : 'bg-white text-gray-700 border border-gray-200 hover:border-primary/50 hover:text-primary'
                                    }`}
                            >
                                {decade}
                            </button>
                        ))}
                    </div>

                    {/* Expand/Collapse All */}
                    <div className="flex justify-center gap-3">
                        <button
                            onClick={expandAll}
                            className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                        >
                            <ChevronDown className="w-4 h-4" />
                            Expand All
                        </button>
                        <span className="text-gray-300">|</span>
                        <button
                            onClick={collapseAll}
                            className="text-sm text-gray-600 hover:text-gray-800 font-medium flex items-center gap-1"
                        >
                            <ChevronUp className="w-4 h-4" />
                            Collapse All
                        </button>
                    </div>
                </div>

                {/* Timeline by Decade */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedDecade || 'all'}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-12"
                    >
                        {decadesToShow.map((decade) => (
                            <div key={decade}>
                                {/* Decade Header */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6"
                                >
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                        {decade}
                                    </h3>
                                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                                </motion.div>

                                {/* Timeline Items */}
                                <div className="relative">
                                    {/* Vertical line */}
                                    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-secondary/30"></div>

                                    <div className="space-y-4">
                                        {groupedTimeline[decade].map((item, index) => {
                                            const isExpanded = expandedItems.has(item._id);

                                            return (
                                                <motion.div
                                                    key={item._id}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                                    className="relative"
                                                >
                                                    {/* Timeline dot */}
                                                    <div className="hidden md:block absolute left-8 top-6 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md -translate-x-1/2 z-10"></div>

                                                    {/* Card */}
                                                    <div className="md:ml-20">
                                                        <button
                                                            onClick={() => toggleItem(item._id)}
                                                            className="w-full text-left group"
                                                        >
                                                            <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-200">
                                                                <div className="flex items-start justify-between gap-4">
                                                                    <div className="flex-1 min-w-0">
                                                                        {/* Year badge */}
                                                                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-2">
                                                                            {item.year}
                                                                        </span>

                                                                        {/* Title */}
                                                                        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                                                            {item.title}
                                                                        </h4>

                                                                        {/* Description - only show when expanded */}
                                                                        <AnimatePresence>
                                                                            {isExpanded && (
                                                                                <motion.p
                                                                                    initial={{ opacity: 0, height: 0 }}
                                                                                    animate={{ opacity: 1, height: 'auto' }}
                                                                                    exit={{ opacity: 0, height: 0 }}
                                                                                    transition={{ duration: 0.2 }}
                                                                                    className="text-sm text-gray-600 leading-relaxed overflow-hidden"
                                                                                >
                                                                                    {item.description}
                                                                                </motion.p>
                                                                            )}
                                                                        </AnimatePresence>
                                                                    </div>

                                                                    {/* Expand/Collapse Icon */}
                                                                    <motion.div
                                                                        animate={{ rotate: isExpanded ? 180 : 0 }}
                                                                        transition={{ duration: 0.2 }}
                                                                        className="flex-shrink-0"
                                                                    >
                                                                        <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                                                    </motion.div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Bottom Summary */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12 sm:mt-16 pt-8 border-t border-gray-200"
                >
                    <p className="text-sm sm:text-base text-gray-500">
                        {selectedDecade
                            ? `Showing ${groupedTimeline[selectedDecade].length} milestones from the ${selectedDecade}`
                            : `${timeline.length} milestones spanning ${decades.length} decades of excellence in education`
                        }
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Timeline;
