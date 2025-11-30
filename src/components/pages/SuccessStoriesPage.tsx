"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@/components/ui/image";
import { GraduationCap, Award, TrendingUp, Heart, BookOpen, Trophy, X, ChevronLeft, ChevronRight } from "lucide-react";

const successStories = [
    {
        id: 1,
        name: "Radhika",
        image: "/images/SuccesStory/radhika.JPG",
        images: [
            "/images/SuccesStory/radhika.JPG",
            "/images/SuccesStory/radhika1.JPG"
        ],
        title: "From Rural Challenges to State Topper and Future Doctor",
        batch: "2014-2016 PUC",
        background: "Financially challenged background",
        achievements: [
            { icon: TrendingUp, label: "10TH STANDARD", value: "90%", color: "blue" },
            { icon: Award, label: "PUC RESULT", value: "98% (586/600)", color: "purple", highlight: "College & State Topper" },
            { icon: GraduationCap, label: "MBBS", value: "Class Topper", color: "emerald", institution: "Kodagu Institute of Medical Sciences" },
            { icon: Heart, label: "CURRENT", value: "MD Student", color: "rose", institution: "Mysore Medical College" }
        ],
        story: [
            "Radhika joined Learners PU College in the 2014–2016 PUC batch from a financially challenged background, scoring 90% in her 10th standard. It is determination, discipline, and the right learning environment that have transformed her academic journey altogether, whereby she emerged as the college topper with 98% (586/600) and secured the position of State Topper.",
            "Her excellence did not stop at PUC. She did her MBBS at Kodagu Institute of Medical Sciences, at which she again came first in the class. Today, she is doing her MD at Mysore Medical College, carrying on with her tradition of hard work and success.",
            "Her story reflects what is possible when perseverance meets the right support system."
        ],
        quote: "Determination and the right learning environment can transform any challenge into success."
    },
    {
        id: 2,
        name: "Radhika",
        image: "/images/SuccesStory/radhika.JPG",
        title: "From Rural Challenges to State Topper and Future Doctor",
        batch: "2014-2016 PUC",
        background: "Financially challenged background",
        achievements: [
            { icon: TrendingUp, label: "10TH STANDARD", value: "90%", color: "blue" },
            { icon: Award, label: "PUC RESULT", value: "98% (586/600)", color: "purple", highlight: "College & State Topper" },
            { icon: GraduationCap, label: "MBBS", value: "Class Topper", color: "emerald", institution: "Kodagu Institute of Medical Sciences" },
            { icon: Heart, label: "CURRENT", value: "MD Student", color: "rose", institution: "Mysore Medical College" }
        ],
        story: [
            "Radhika joined Learners PU College in the 2014–2016 PUC batch from a financially challenged background, scoring 90% in her 10th standard. It is determination, discipline, and the right learning environment that have transformed her academic journey altogether, whereby she emerged as the college topper with 98% (586/600) and secured the position of State Topper.",
            "Her excellence did not stop at PUC. She did her MBBS at Kodagu Institute of Medical Sciences, at which she again came first in the class. Today, she is doing her MD at Mysore Medical College, carrying on with her tradition of hard work and success.",
            "Her story reflects what is possible when perseverance meets the right support system."
        ],
        quote: "Determination and the right learning environment can transform any challenge into success."
    },
    {
        id: 3,
        name: "Radhika",
        image: "/images/SuccesStory/radhika.JPG",
        title: "From Rural Challenges to State Topper and Future Doctor",
        batch: "2014-2016 PUC",
        background: "Financially challenged background",
        achievements: [
            { icon: TrendingUp, label: "10TH STANDARD", value: "90%", color: "blue" },
            { icon: Award, label: "PUC RESULT", value: "98% (586/600)", color: "purple", highlight: "College & State Topper" },
            { icon: GraduationCap, label: "MBBS", value: "Class Topper", color: "emerald", institution: "Kodagu Institute of Medical Sciences" },
            { icon: Heart, label: "CURRENT", value: "MD Student", color: "rose", institution: "Mysore Medical College" }
        ],
        story: [
            "Radhika joined Learners PU College in the 2014–2016 PUC batch from a financially challenged background, scoring 90% in her 10th standard. It is determination, discipline, and the right learning environment that have transformed her academic journey altogether, whereby she emerged as the college topper with 98% (586/600) and secured the position of State Topper.",
            "Her excellence did not stop at PUC. She did her MBBS at Kodagu Institute of Medical Sciences, at which she again came first in the class. Today, she is doing her MD at Mysore Medical College, carrying on with her tradition of hard work and success.",
            "Her story reflects what is possible when perseverance meets the right support system."
        ],
        quote: "Determination and the right learning environment can transform any challenge into success."
    }
];

const colorClasses = {
    blue: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", icon: "text-blue-600" },
    purple: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200", icon: "text-purple-600" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", icon: "text-emerald-600" },
    rose: { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200", icon: "text-rose-600" }
};

const SuccessStoriesPage = () => {
    const [selectedStory, setSelectedStory] = useState<typeof successStories[0] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-primary/10 via-blue-50 to-secondary/10 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Trophy className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary tracking-wide uppercase">Inspiring Journeys</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Success Stories
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                            Celebrating the remarkable achievements of our students who have transformed their dreams into reality through dedication, perseverance, and the unwavering support of Learners Global.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Success Stories Grid */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {successStories.map((story, index) => (
                            <motion.div
                                key={story.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => setSelectedStory(story)}
                                className="group cursor-pointer"
                            >
                                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 h-full flex flex-col">
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                        <Image
                                            src={story.image}
                                            alt={story.name}
                                            width={600}
                                            height={450}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                                        {/* Name Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                            <h3 className="font-serif text-xl font-bold">{story.name}</h3>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex-1 flex flex-col">
                                        <p className="text-sm text-gray-700 font-medium mb-4 line-clamp-2 flex-1">
                                            {story.title}
                                        </p>

                                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                                            <BookOpen className="w-3.5 h-3.5" />
                                            <span>{story.batch}</span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2 mb-4">
                                            {story.achievements.slice(0, 2).map((achievement, idx) => (
                                                <div key={idx} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                                                    <p className="text-[10px] font-semibold text-gray-500 uppercase mb-1 tracking-wide">
                                                        {achievement.label}
                                                    </p>
                                                    <p className="text-base font-bold text-gray-900">
                                                        {achievement.value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <button className="w-full py-2.5 bg-gradient-to-r from-primary to-secondary hover:shadow-lg text-white font-semibold rounded-lg transition-all duration-300 text-sm">
                                            Read Full Story
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedStory && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setSelectedStory(null)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedStory(null)}
                                className="sticky top-4 right-4 float-right z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Image Carousel at Top */}
                            <div className="w-full relative">
                                <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                                    <Image
                                        src={selectedStory.images?.[currentImageIndex] || selectedStory.image}
                                        alt={`${selectedStory.name} - Image ${currentImageIndex + 1}`}
                                        width={1200}
                                        height={675}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Image Navigation - Only show if multiple images */}
                                    {selectedStory.images && selectedStory.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + selectedStory.images!.length) % selectedStory.images!.length)}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
                                            >
                                                <ChevronLeft className="w-6 h-6 text-gray-800" />
                                            </button>
                                            <button
                                                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % selectedStory.images!.length)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
                                            >
                                                <ChevronRight className="w-6 h-6 text-gray-800" />
                                            </button>

                                            {/* Image Indicators */}
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                {selectedStory.images.map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => setCurrentImageIndex(idx)}
                                                        className={`h-2 rounded-full transition-all ${currentImageIndex === idx
                                                                ? 'bg-white w-8'
                                                                : 'bg-white/60 hover:bg-white/80 w-2'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Content Below */}
                            <div className="p-8 space-y-6">
                                <div>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                                        Success Story: <span className="text-primary">{selectedStory.name}</span>
                                    </h2>
                                    <p className="text-xl text-primary font-semibold mb-3">{selectedStory.title}</p>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <BookOpen className="w-4 h-4" />
                                        <span>{selectedStory.batch}</span>
                                        <span className="text-gray-400">•</span>
                                        <span>{selectedStory.background}</span>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {selectedStory.achievements.map((achievement, idx) => {
                                        const Icon = achievement.icon;
                                        const colors = colorClasses[achievement.color as keyof typeof colorClasses];
                                        return (
                                            <div key={idx} className={`${colors.bg} border-2 ${colors.border} rounded-xl p-4`}>
                                                <Icon className={`w-5 h-5 ${colors.icon} mb-2`} />
                                                <p className="text-xs font-bold text-gray-500 uppercase mb-1">{achievement.label}</p>
                                                <p className={`text-xl font-bold ${colors.text}`}>{achievement.value}</p>
                                                {achievement.highlight && <p className="text-xs font-semibold text-gray-700 mt-1">{achievement.highlight}</p>}
                                                {achievement.institution && <p className="text-xs text-gray-600 mt-1">{achievement.institution}</p>}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Story */}
                                <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                                    {selectedStory.story.map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>

                                {/* Quote */}
                                <div className="pl-6 py-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                                    <p className="text-lg text-gray-900 italic">"{selectedStory.quote}"</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* CTA */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Your Success Story Starts Here</h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                            Join Learners Global and become part of our legacy of excellence.
                        </p>
                        <a href="/reach-us" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                            Start Your Journey
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SuccessStoriesPage;
