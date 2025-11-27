"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/reach-us/HeroSection";
import LocationsSection from "@/components/reach-us/LocationsSection";
import ContactFormSection from "@/components/reach-us/ContactFormSection";
import MapModal from "@/components/reach-us/MapModal";
import { DEFAULT_LOCATIONS } from "@/components/reach-us/constants";
import { Location } from "@/components/reach-us/types";

export default function ReachUsPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const locations: Location[] = DEFAULT_LOCATIONS;

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
    setIsMapOpen(true);
  };

  const closeMapModal = () => {
    setIsMapOpen(false);
    // Small delay to allow the animation to complete before clearing the location
    setTimeout(() => setSelectedLocation(null), 300);
  };

  return (
    <div className="min-h-screen bg-background bg-gradient-to-b from-background to-background/80">
      <Header />

      {/* Google Maps Modal */}
      <MapModal
        isOpen={isMapOpen}
        onClose={closeMapModal}
        location={selectedLocation}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Locations Section */}
      <LocationsSection
        locations={locations}
        onLocationClick={handleLocationClick}
      />

      {/* Contact Form Section */}
      <ContactFormSection />

      <Footer />
    </div>
  );
}
