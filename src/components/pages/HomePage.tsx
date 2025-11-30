"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import VerticalsSection from "@/components/home/VerticalsSection";
import RecognitionsSection from "@/components/home/RecognitionsSection";
import LegacySection from "@/components/home/LegacySection";
import DifferentiatorsSection from "@/components/home/DifferentiatorsSection";
import PartnersSection from "@/components/home/PartnersSection";
import SuccessStoriesCarousel from "@/components/home/SuccessStoriesCarousel";
import {
  DEFAULT_VERTICALS,
  DEFAULT_RECOGNITIONS,
  DEFAULT_DIFFERENTIATORS,
} from "@/components/home/constants";
import { Vertical, Recognition, Differentiator } from "@/components/home/types";

export default function HomePage() {
  // Static data mirroring the original home page; can be replaced with real APIs later.
  const [verticals] = useState<Vertical[]>(DEFAULT_VERTICALS);
  const [recognitions] = useState<Recognition[]>(DEFAULT_RECOGNITIONS);
  const [differentiators] = useState<Differentiator[]>(DEFAULT_DIFFERENTIATORS);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Verticals Section */}
      <VerticalsSection verticals={verticals} />

      {/*  / Legacy Section */}
      <LegacySection />

      {/* Recognitions Section */}
      <RecognitionsSection />

      {/* Success Stories Carousel */}
      <SuccessStoriesCarousel />

      {/* What Sets Us Apart Section */}
      {/* <DifferentiatorsSection differentiators={differentiators} /> */}

      {/* Partners Section */}
      <PartnersSection />

      <Footer />
    </div>
  );
}
