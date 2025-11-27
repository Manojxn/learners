"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/faqs/HeroSection";
import CategoryNav from "@/components/faqs/CategoryNav";
import FAQList from "@/components/faqs/FAQList";
import { DEFAULT_FAQS } from "@/components/faqs/constants";
import { FAQ } from "@/components/faqs/types";

const ITEMS_PER_PAGE = 6;

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [faqs] = useState<FAQ[]>(DEFAULT_FAQS);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = Array.from(
    new Set(faqs.map((faq) => faq.category).filter(Boolean) as string[])
  );

  const getFAQsByCategory = (category: string) =>
    faqs.filter((faq) => faq.category === category);

  const featuredFAQs = faqs.filter((faq) => faq.isFeatured);
  const generalFAQs = faqs.filter((faq) => !faq.category || faq.category === "");

  // Get FAQs to display based on active category or search
  const getDisplayFAQs = () => {
    if (searchQuery) {
      return faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (activeCategory) {
      return getFAQsByCategory(activeCategory);
    }

    return featuredFAQs;
  };

  const displayFAQs = getDisplayFAQs();

  // Calculate pagination
  const totalPages = Math.ceil(displayFAQs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedFAQs = displayFAQs.slice(startIndex, endIndex);

  // Reset to page 1 when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // Toggle FAQ item expansion
  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  // Auto-expand first item
  useEffect(() => {
    if (paginatedFAQs.length > 0 && expandedItems.size === 0) {
      setExpandedItems(new Set([paginatedFAQs[0]._id]));
    }
  }, [paginatedFAQs]);

  // Handle category click
  const handleCategoryClick = (category: string | null) => {
    setActiveCategory(category);
    setSearchQuery('');
  };

  // Handle "All FAQs" click
  const handleShowAll = () => {
    setActiveCategory(null);
    setSearchQuery('');
  };

  // Pagination handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredCount={displayFAQs.length}
      />

      {/* Category Navigation */}
      {!searchQuery && (
        <CategoryNav
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryClick}
          scrollToCategory={handleCategoryClick}
        />
      )}
      {/* 
      {/* Show All Button */}

      {/* Main Content Area */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {searchQuery
              ? 'Search Results'
              : activeCategory
                ? activeCategory
                : 'Popular Questions'}
          </h2>

          {/* FAQ List */}
          {paginatedFAQs.length > 0 ? (
            <>
              <FAQList
                faqs={paginatedFAQs}
                expandedItems={expandedItems}
                toggleItem={toggleItem}
                className="w-full"
              />

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8">
                  {/* Previous Button */}
                  <Button
                    variant="outline"
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>

                  {/* Page Numbers */}
                  <div className="hidden sm:flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${currentPage === page
                          ? 'bg-primary text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  {/* Mobile Page Indicator */}
                  <div className="sm:hidden text-sm text-gray-600">
                    Page {currentPage} of {totalPages}
                  </div>

                  {/* Next Button */}
                  <Button
                    variant="outline"
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            /* No Results */
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg
                  className="mx-auto h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">No results found</h3>
              <p className="mt-1 text-gray-500">We couldn't find any questions matching your search.</p>
              <div className="mt-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory(null);
                  }}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Clear filters
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}


