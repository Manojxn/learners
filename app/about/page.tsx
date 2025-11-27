"use client";

import dynamic from 'next/dynamic';

// Dynamically import the new AboutPage component with SSR disabled
const AboutPage = dynamic(
  () => import('@/components/pages/AboutPage'),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading page...</div>
      </div>
    )
  }
);

export default function AboutRoute() {
  return (
    <div className="min-h-screen">
      <AboutPage />
    </div>
  );
}
