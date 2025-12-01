"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@/components/ui/image";
import { GraduationCap, Award, TrendingUp, Heart, BookOpen, Trophy, X, ChevronLeft, ChevronRight } from "lucide-react";

interface Achievement {
    icon: any;
    label: string;
    value: string;
    color: string;
    highlight?: string;
    institution?: string;
}

interface SuccessStory {
    id: number;
    name: string;
    image: string;
    images?: string[];
    videoUrl?: string;
    videoUrls?: string[];
    title: string;
    batch: string;
    background: string;
    achievements: Achievement[];
    story: string[];
    quote: string;
}

const successStories: SuccessStory[] = [
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
        name: "Shuchitha M N",
        image: "/images/SuccesStory/shuchitha.png",
        videoUrl: "https://www.youtube.com/embed/wXWYkwEBa6U?si=YILfobXIwP4FTvzh",
        title: "Empowered by Individual Attention and Holistic Growth",
        batch: "2020-2022 Batch",
        background: "Proud Alumnus",
        achievements: [
            { icon: BookOpen, label: "BATCH", value: "2020-2022", color: "blue" },
            { icon: Heart, label: "FOCUS", value: "Holistic Growth", color: "purple" },
            { icon: Trophy, label: "HIGHLIGHT", value: "Individual Attention", color: "emerald" },
            { icon: Award, label: "STATUS", value: "Proud Alumnus", color: "rose" }
        ],
        story: [
            "Shuchitha M N from the 2020-2022 batch focuses on the exceptional support system and learning environment at Learners PU College. She emphasizes that the most remarkable aspect of the institution is the individual attention students receive, where every single doubt is cleared—a level of commitment she found to be \"rare\". This dedication to clarity often involves teachers providing personalized one-on-one sessions through online platforms, ensuring that no student is left behind.",
            "The friendly faculty employ great methodologies, utilizing specialized check sheets and assignments designed to help students achieve the maximum score in their board examinations. Beyond academics, the college ensures holistic growth by giving equal importance to extracurricular activities, providing students with opportunities to participate in diverse fields like coding, essay writing, and artwork.",
            "Shuchitha is a proud alumnus who assures that under the guidance of these dedicated teachers, any student can have a great and successful academic journey. Her testimonial is a proud reflection of an educational environment that perfectly balances dedicated teaching, comprehensive support, and equal opportunity for both curricular and co-curricular excellence."
        ],
        quote: "The most remarkable aspect of the institution is the individual attention students receive, where every single doubt is cleared."
    },
    {
        id: 3,
        name: "Anju Bishwas",
        image: "/images/SuccesStory/anju.png",
        videoUrl: "https://www.youtube.com/embed/xv8otY-VaW8?si=jODShoGRPI5NnUUD",
        title: "Exceptional Faculty Guidance and Holistic Development",
        batch: "II PU 2022",
        background: "Proud Alumnus",
        achievements: [
            { icon: BookOpen, label: "BATCH", value: "2022", color: "blue" },
            { icon: Heart, label: "FOCUS", value: "Holistic Growth", color: "purple" },
            { icon: Trophy, label: "HIGHLIGHT", value: "Faculty Support", color: "emerald" },
            { icon: Award, label: "STATUS", value: "Proud Alumnus", color: "rose" }
        ],
        story: [
            "Anju Bishwas from the II PU batch of 2022 shares her highly positive experience and gratitude toward Learners PUC College. She highlights that the faculty, including the Principal and other teachers, were incredibly supportive and always ready to help students, ensuring all their academic needs were met. She mentions the importance of the educational environment, where teachers actively help students prepare for their exams, particularly by focusing on the most important questions for the board exams.",
            "Anju emphasizes that the college's dedication extends beyond the classroom. The institution provided ample opportunities for participation in extra-curricular activities, encouraging a well-rounded development. She highly commends the teachers for their individual care, dedication, and effort.",
            "Her words serve as a strong endorsement of the college's holistic approach to education. Anju Bishwas's testimonial celebrates Learners PUC College as a place of exceptional faculty guidance and holistic development, crediting the teachers and the environment for her successful and fulfilling II PU experience."
        ],
        quote: "The support received at Learners PUC made my college life exceptionally memorable and beneficial."
    },
    {
        id: 4,
        name: "Pruthviraj D M",
        image: "/images/SuccesStory/pruthviraj.png",
        videoUrls: [
            "https://www.youtube.com/embed/sTOht1bc8oI?si=DuhRxrZ8fMNVQz8V",
            "https://www.youtube.com/embed/uydWqifT230?si=WNuH5-WG9vmslPwf"
        ],
        title: "From Solid Start to State Topper and NEET Success",
        batch: "2017-2019 PUC",
        background: "State 11th Topper",
        achievements: [
            { icon: TrendingUp, label: "SSLC", value: "88%", color: "blue" },
            { icon: Award, label: "PUC RESULT", value: "97.33% (584/600)", color: "purple", highlight: "State 11th Topper" },
            { icon: BookOpen, label: "MASTERY", value: "100/100 Math", color: "emerald", institution: "99 Chem, 98 Phy" },
            { icon: Trophy, label: "NEET", value: "Topper 2019", color: "rose" }
        ],
        story: [
            "Pruthviraj D M joined Learners PU College and demonstrated exceptional academic growth. Starting with a commendable 88% in his 10th standard (SSLC), his dedication, discipline, and the focused environment at the college propelled him to become the College's 1st Topper and the State 11th Topper in the PUC examinations, scoring an impressive 97.33% (584 out of 600).",
            "His subject mastery was evident across the sciences and mathematics, with perfect scores in Mathematics (100), near-perfect scores in Chemistry (99), and Physics (98).",
            "Pruthviraj’s success continued beyond his PUC result. As highlighted in a subsequent interview by his college, he went on to become a NEET Topper in 2019, confirming his path toward a career in medicine. His journey underscores that consistent hard work and a supportive educational foundation can bridge the gap between initial potential and outstanding achievement."
        ],
        quote: "Consistent hard work and a supportive educational foundation can bridge the gap between initial potential and outstanding achievement."
    },
    {
        id: 5,
        name: "Thanushree",
        image: "/images/SuccesStory/thanushree.png",
        videoUrl: "https://www.youtube.com/embed/S69n90BAWxI?si=TwsnrazYGxVce4Pd",
        title: "Scientific Learning Strategies & Holistic Growth",
        batch: "2017-2019 Batch",
        background: "Proud Alumnus",
        achievements: [
            { icon: BookOpen, label: "BATCH", value: "2017-2019", color: "blue" },
            { icon: TrendingUp, label: "IMPACT", value: "15% Retention Boost", color: "purple", highlight: "Memory Strategies" },
            { icon: Trophy, label: "ACTIVITIES", value: "Co-curriculars", color: "emerald" },
            { icon: Award, label: "STATUS", value: "Proud Alumnus", color: "rose" }
        ],
        story: [
            "Thanushree, an alumna from the 2017-2019 batch of Learners PU College, highlights the institution's unique use of stereotechnics and memory strategies. These scientifically proven techniques are employed to significantly boost students' retention power by an estimated 10 to 15 percent, preparing them effectively for their academic challenges.",
            "Beyond academics, she describes Learners as a platform for co-curricular activities, offering a stage for students to exhibit their hidden talents in areas like music, dance, art, and sports. She praises the college's framework, which fosters a continuous learning process for both students and faculty, leading to a friendly and collaborative atmosphere.",
            "Thanushree concludes by expressing gratitude, noting that the lessons and guidance from Learners have shown her a path that continues to benefit her even after completing her PU course. Her testimonial underscores that Learners PU College offers a well-rounded education by combining scientifically-backed memory techniques with a holistic approach."
        ],
        quote: "The lessons and guidance from Learners have shown me a path that continues to benefit me even after completing my PU course."
    },
    {
        id: 6,
        name: "Kshema",
        image: "/images/SuccesStory/kshema.png",
        videoUrl: "https://www.youtube.com/embed/6lCX91Lgi6g?si=1_IH3DKRIifKZWIW",
        title: "Driven by Quality Education and Innovation",
        batch: "2016 Batch",
        background: "Employee at Accenture",
        achievements: [
            { icon: BookOpen, label: "BATCH", value: "2016", color: "blue" },
            { icon: TrendingUp, label: "CURRENT", value: "Accenture", color: "purple", highlight: "Employee" },
            { icon: Trophy, label: "FOCUS", value: "Innovation", color: "emerald", institution: "5W1H & Mind Mapping" },
            { icon: Award, label: "HIGHLIGHT", value: "Leadership", color: "rose", institution: "Dedicated Team" }
        ],
        story: [
            "Kshema, an accomplished alumnus from the 2016 batch of Learners PU College and currently an Employee at Accenture, proudly reflects on her experience, crediting the institution's leadership and innovative approach for her success.",
            "Kshema highly commends the college's leadership, specifically naming Murali Sir and Madhvi Mam as the \"pillars of Learners PU College.\" She notes that they, along with their entire team, are dedicated to creating a better education system through hard work and the implementation of innovative methodologies.",
            "She specifically highlights the use of techniques like 5W1H (Who, What, When, Where, Why, How) and mind mapping to significantly enhance student learning and conceptual understanding. Kshema emphasizes the excellent quality of teaching, the comprehensive study materials provided, and the strong student-teacher relationships. Crucially, she points out that one-on-one attention is consistently given to students to ensure continuous skill improvement and to effectively build their confidence—a key factor in maximizing student potential."
        ],
        quote: "One-on-one attention is consistently given to students to ensure continuous skill improvement and to effectively build their confidence."
    },
    {
        id: 7,
        name: "Varsha",
        image: "/images/SuccesStory/varsha.png",
        title: "From Strong Foundations to State Topper and Medical Aspirations",
        batch: "PUC Alumnus",
        background: "State 13th Topper",
        achievements: [
            { icon: TrendingUp, label: "SSLC", value: "88.5%", color: "blue" },
            { icon: Award, label: "PUC RESULT", value: "97.00% (582/600)", color: "purple", highlight: "State 13th Topper" },
            { icon: BookOpen, label: "MASTERY", value: "100/100 Math", color: "emerald", institution: "99 Chem, 98 Phy, 98 Bio" },
            { icon: Heart, label: "GOAL", value: "Medical", color: "rose", institution: "Aspiring Professional" }
        ],
        story: [
            "Varsha joined Learners PU College with a robust academic background, having scored an impressive 88.5% in her 10th standard (SSLC). Her time at the college was marked by exceptional dedication and a relentless pursuit of academic excellence. This drive led her to become the College's 2nd Topper and the State 13th Topper in the PUC examinations, achieving an outstanding 97.00% (582 out of 600).",
            "Her subject scores highlight her comprehensive understanding and high aptitude across the science and mathematics streams. Varsha achieved a perfect 100 in Mathematics, a near-perfect 99 in Chemistry, and 98 in both Physics and Biology, demonstrating her strong foundation for a career in medicine.",
            "Varsha's journey is a testament to what focused effort and a supportive learning environment can achieve. Her excellent performance in PUC firmly places her on a path toward realizing her aspirations in the medical field."
        ],
        quote: "Focused effort and a supportive learning environment can achieve outstanding results."
    },
    {
        id: 8,
        name: "Darshan H. Girigowda",
        image: "/images/SuccesStory/p1.png",
        videoUrl: "https://www.youtube.com/embed/DxVT-_EH-jI?si=kpRwiBam0nngRNWB",
        title: "Excellence Amidst Challenges: A Journey of Resilience",
        batch: "2021-2022 Batch",
        background: "II PU Topper",
        achievements: [
            { icon: Award, label: "PUC SCORE", value: "585/600", color: "purple", highlight: "II PU Topper" },
            { icon: Trophy, label: "NEET", value: "602", color: "emerald", institution: "Medical Aspirant" },
            { icon: TrendingUp, label: "CET", value: "Top Rank", color: "blue" },
            { icon: Heart, label: "SUPPORT", value: "Faculty", color: "rose", institution: "Online Classes" }
        ],
        story: [
            "Darshan H. Girigowda, an II PU Topper from the 2021-2022 batch, recounts his academic journey which began during the challenging COVID-19 lockdown. He highlights that despite the difficult situation, Learners PU College responded swiftly by initiating online classes and providing check sheets. Darshan credits these check sheets with significantly helping him achieve exceptional results: a 585 in the board exams, a 602 in the NEET exam, and a very good rank in the CET exam.",
            "He expresses immense gratitude for the college faculty, describing the teachers as very hard-working. He gives a special mention to Principal Madam, Madhavi Mam, who was not only a very good teacher but also personally helped him, particularly with the Computer Science (CS) class. His success, he emphasizes, was a direct result of the dedicated support and hard work of all the faculties, whom he personally thanks for helping him reach his goal.",
            "Darshan H. Girigowda's testimonial is a powerful example of how the proactive online instruction and dedicated faculty support at Learners PU College—even during a global pandemic—enabled him to achieve top scores in both the board and competitive entrance examinations."
        ],
        quote: "My success was a direct result of the dedicated support and hard work of all the faculties."
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
                                onClick={() => { setSelectedStory(story); setCurrentImageIndex(0); }}
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
                                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-800" />
                            </button>

                            {/* Media at Top (Video or Image Carousel) */}
                            <div className="w-full relative">
                                <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                                    {selectedStory.videoUrls && selectedStory.videoUrls.length > 0 ? (
                                        <>
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={selectedStory.videoUrls[currentImageIndex]}
                                                title={`${selectedStory.name} - Video ${currentImageIndex + 1}`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                                className="absolute inset-0 w-full h-full"
                                            ></iframe>

                                            {/* Video Navigation - Only show if multiple videos */}
                                            {selectedStory.videoUrls.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={() => setCurrentImageIndex((prev) => (prev - 1 + selectedStory.videoUrls!.length) % selectedStory.videoUrls!.length)}
                                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
                                                    >
                                                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                                                    </button>
                                                    <button
                                                        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % selectedStory.videoUrls!.length)}
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
                                                    >
                                                        <ChevronRight className="w-6 h-6 text-gray-800" />
                                                    </button>

                                                    {/* Video Indicators */}
                                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                        {selectedStory.videoUrls.map((_, idx) => (
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
                                        </>
                                    ) : selectedStory.videoUrl ? (
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={selectedStory.videoUrl}
                                            title={selectedStory.name}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            className="absolute inset-0 w-full h-full"
                                        ></iframe>
                                    ) : (
                                        <>
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
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Content Below */}
                            <div className="p-6 sm:p-8 space-y-6">
                                <div>
                                    <span className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Success Story</span>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                                        {selectedStory.name}
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
                                <div className="space-y-4 text-gray-700 text-base leading-relaxed text-justify">
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
