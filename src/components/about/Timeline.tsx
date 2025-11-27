import { motion } from 'framer-motion';

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

const Timeline = ({ timeline }: TimelineProps) => {
    if (!timeline || timeline.length === 0) return null;

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                        Our Journey
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                        Milestones in Excellence
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600">
                        Key moments that shaped our educational legacy.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical line - hidden on mobile */}
                    <div className="hidden md:block absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 to-secondary/20 -translate-x-1/2"></div>

                    {/* Timeline items */}
                    <div className="space-y-8 md:space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item._id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="relative w-full"
                            >
                                <div className="md:flex md:items-start">
                                    {/* Year badge */}
                                    <div className={`flex items-center mb-3 md:mb-0 md:w-1/2 ${index % 2 === 0 ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8 md:order-2'}`}>
                                        <div className="relative flex items-center">
                                            <div
                                                className="hidden md:block absolute w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md"
                                                style={{ [index % 2 === 0 ? 'right' : 'left']: '-2.5rem', top: '50%', transform: 'translateY(-50%)' }}
                                            ></div>
                                            <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                                                }`}>
                                                {item.year}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:order-1'}`}>
                                        <div className={`p-4 sm:p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}>
                                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
