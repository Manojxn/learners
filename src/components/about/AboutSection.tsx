import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section className="relative py-12 sm:py-16 lg:py-20 xl:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay"></div>
                            <Image
                                src="/images/students.png"
                                alt="Students at Learners Global"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-gray-100 hidden lg:block">
                            <div className="text-4xl font-bold text-primary">12+</div>
                            <div className="text-sm font-medium text-gray-600">Years of Excellence</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary mb-4 sm:mb-6">
                            Our Story
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                            A Legacy of <span className="text-primary">Educational Excellence</span>
                        </h2>
                        <div className="space-y-6 text-gray-600">
                            <p className="text-base sm:text-lg leading-relaxed">
                                Founded in 2011, Learners Global has grown from a single institution to a comprehensive educational ecosystem,
                                serving thousands of students across multiple verticals. Our journey has been marked by innovation,
                                academic excellence, and an unwavering commitment to student success.
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed">
                                We believe education should be transformative, not just transactional. Our holistic approach
                                combines rigorous academics with character development, leadership training, and real-world
                                skills that prepare students for the challenges of tomorrow.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-12">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-primary">10K+</div>
                                <div className="text-gray-600">Students Impacted</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-secondary">98%</div>
                                <div className="text-gray-600">Success Rate</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-primary">200+</div>
                                <div className="text-gray-600">Expert Educators</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-secondary">15+</div>
                                <div className="text-gray-600">Campuses & Centers</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
