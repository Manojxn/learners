"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@/components/ui/image";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import Link from "next/link";

const successStories = [
    {
        id: 1,
        name: "Radhika",
        image: "/images/SuccesStory/radhika.JPG",
        title: "From Rural Challenges to State Topper and Future Doctor",
        batch: "2014-2016 PUC"
    },
    {
        id: 2,
        name: "Shuchitha M N",
        image: "/images/SuccesStory/shuchitha.png",
        title: "Empowered by Individual Attention and Holistic Growth",
        batch: "2020-2022 Batch"
    },
    {
        id: 3,
        name: "Anju Bishwas",
        image: "/images/SuccesStory/anju.png",
        title: "Exceptional Faculty Guidance and Holistic Development",
        batch: "II PU 2022"
    },
    {
        id: 4,
        name: "Pruthviraj D M",
        image: "/images/SuccesStory/pruthviraj.png",
        title: "From Solid Start to State Topper and NEET Success",
        batch: "2017-2019 PUC"
    },
    {
        id: 5,
        name: "Thanushree",
        image: "/images/SuccesStory/thanushree.png",
        title: "Scientific Learning Strategies & Holistic Growth",
        batch: "2017-2019 Batch"
    },
    {
        id: 6,
        name: "Kshema",
        image: "/images/SuccesStory/kshema.png",
        title: "Driven by Quality Education and Innovation",
        batch: "2016 Batch"
    },
    {
        id: 7,
        name: "Varsha",
        image: "/images/SuccesStory/varsha.png",
        title: "From Strong Foundations to State Topper and Medical Aspirations",
        batch: "PUC Alumnus"
    },
    {
        id: 8,
        name: "Darshan H. Girigowda",
        image: "/images/SuccesStory/p1.png",
        title: "Excellence Amidst Challenges: A Journey of Resilience",
        batch: "2021-2022 Batch"
    }
];

const SuccessStoriesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % successStories.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % successStories.length);
        setIsPaused(true);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
        setIsPaused(true);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsPaused(true);
    };

    // Calculate visible cards (show 3 on desktop, 2 on tablet, 1 on mobile)
    const getVisibleStories = () => {
        const stories = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % successStories.length;
            stories.push({ ...successStories[index], displayIndex: i });
        }
        return stories;
    };

    return (
        <section className="pt-8 sm:pt-10 pb-12 sm:pb-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-3">
                            Student Success
                        </span> */}
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                            Success{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                Stories
                            </span>
                        </h2>
                        <p className="text-base text-gray-600 max-w-2xl mx-auto">
                            Celebrating the remarkable achievements of our students.
                        </p>
                    </motion.div>
                </div>

                {/* Carousel */}
                <div className="relative">
                    {/* Navigation Arrows - Desktop */}
                    <button
                        onClick={prevSlide}
                        className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 text-gray-700 hover:text-primary transition-all duration-300 border border-gray-200"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 text-gray-700 hover:text-primary transition-all duration-300 border border-gray-200"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {getVisibleStories().map((story, idx) => (
                                <motion.div
                                    key={`${story.id}-${currentIndex}-${idx}`}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className={`${idx === 2 ? 'hidden lg:block' : idx === 1 ? 'hidden md:block' : ''}`}
                                >
                                    <Link href="/success-stories">
                                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer">
                                            {/* Image */}
                                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                                <Image
                                                    src={story.image}
                                                    alt={story.name}
                                                    width={600}
                                                    height={450}
                                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                                {/* Name Overlay */}
                                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                                    <h3 className="font-serif text-xl font-bold">{story.name}</h3>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-5">
                                                <p className="text-sm text-gray-700 font-medium mb-3 line-clamp-2">
                                                    {story.title}
                                                </p>

                                                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                                                    <BookOpen className="w-3.5 h-3.5" />
                                                    <span>{story.batch}</span>
                                                </div>

                                                <div className="w-full py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg transition-all duration-300 text-sm text-center">
                                                    Read Full Story
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {successStories.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index
                                    ? 'bg-primary w-8'
                                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <div className="text-center mt-8">
                    <Link
                        href="/success-stories"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg transition-all duration-300 text-sm"
                    >
                        View All Success Stories
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SuccessStoriesCarousel;
