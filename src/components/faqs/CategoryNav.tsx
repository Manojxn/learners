"use client";

interface CategoryNavProps {
    categories: string[];
    activeCategory: string | null;
    setActiveCategory: (category: string | null) => void;
    scrollToCategory: (category: string | null) => void;
}

export default function CategoryNav({
    categories,
    activeCategory,
    setActiveCategory,
    scrollToCategory
}: CategoryNavProps) {
    return (
        <section className="sticky top-16 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                    <button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setActiveCategory(null);
                        }}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === null
                            ? 'bg-primary text-white shadow-md'
                            : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        All Questions
                    </button>

                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => scrollToCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === category
                                ? 'bg-primary text-white shadow-md'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
