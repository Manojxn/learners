"use client";

import React, { useState, Suspense } from "react";
import dynamic from 'next/dynamic';

// Dynamically import components
const Header = dynamic(() => import('@/components/Header'));
const Footer = dynamic(() => import('@/components/Footer'));
const Hero = dynamic(() => import('@/components/about/Hero'));
const AboutSection = dynamic(() => import('@/components/about/AboutSection'));
const MissionVision = dynamic(() => import('@/components/about/MissionVision'));
const Timeline = dynamic(() => import('@/components/about/Timeline'));
const Founder = dynamic(() => import('@/components/about/Founder'));
const Events = dynamic(() => import('@/components/about/Events'));

// Import types
import type { TimelineItem } from "@/components/about/Timeline";
import type { Event } from "@/components/about/Events";

const DEFAULT_TIMELINE: TimelineItem[] = [
  {
    _id: "tl-2005",
    year: "2005",
    title: "Founding of Learners Global School",
    description:
      "Learners Global School was established with a vision to provide holistic education, fostering academic excellence and character development in a nurturing environment.",
  },
  {
    _id: "tl-2012",
    year: "2012",
    title: "Launch of PU College Division",
    description:
      "Responding to the growing demand for quality pre-university education, Learners Global PU College was inaugurated, offering specialized streams in Science and Commerce.",
  },
  {
    _id: "tl-2018",
    year: "2018",
    title: "Introduction of GCC & Talent Acquisition",
    description:
      "To bridge the gap between education and industry, the GCC & Talent Acquisition division was launched, focusing on career guidance, skill development, and placement assistance for students.",
  },
  {
    _id: "tl-2020",
    year: "2020",
    title: "Digital Learning Transformation",
    description:
      "In response to global changes, Learners Global successfully implemented a robust digital learning platform, ensuring uninterrupted and high-quality education for all students.",
  },
  {
    _id: "tl-2021",
    year: "2021",
    title: "Accreditation and Academic Excellence",
    description:
      "Learners Global achieved significant academic milestones, receiving prestigious accreditations and consistently ranking among the top educational institutions in the region for its innovative teaching methodologies.",
  },
  {
    _id: "tl-2023",
    year: "2023",
    title: "Community Engagement & Global Partnerships",
    description:
      "Furthering its commitment to societal impact, Learners Global initiated several community outreach programs and forged international partnerships to offer global exposure and exchange opportunities to its students.",
  },
];

const DEFAULT_EVENTS: Event[] = [
  {
    _id: "ev-1",
    eventName: "Innovation & Entrepreneurship Workshop",
    eventImage:
      "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=1200",
    eventDateTime: "2025-09-01T16:30:00",
    location: "GCC Innovation Hub",
    shortDescription:
      "A hands-on workshop for students and aspiring entrepreneurs.",
    registrationUrl: "#",
  },
  {
    _id: "ev-2",
    eventName: "Parent-Teacher Interaction Day",
    eventImage:
      "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200",
    eventDateTime: "2025-07-10T15:30:00",
    location: "Learners Global School Grounds",
    shortDescription:
      "An open day for parents to meet teachers and discuss student progress.",
    registrationUrl: "#",
  },
  {
    _id: "ev-3",
    eventName: "National Mathematics Day Celebration",
    eventImage:
      "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1200",
    eventDateTime: "2025-12-22T10:00:00",
    location: "School Main Hall & Online",
    shortDescription:
      "Celebrating the beauty of mathematics with interactive activities, competitions, and guest lectures.",
    registrationUrl: "#",
  },
  {
    _id: "ev-4",
    eventName: "Corporate Partnership Forum",
    eventImage:
      "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200",
    eventDateTime: "2025-05-22T20:00:00",
    location: "Online Webinar",
    shortDescription:
      "Connecting businesses with future talent and educational initiatives.",
    registrationUrl: "#",
  },
  {
    _id: "ev-5",
    eventName: "Annual Education Summit 2025",
    eventImage:
      "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1200",
    eventDateTime: "2025-03-15T14:30:00",
    location: "Learners Global Campus Auditorium",
    shortDescription:
      "Exploring the future of education and skill development.",
    registrationUrl: "#",
  },
];

// Component to show while loading
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse text-lg text-gray-600">Loading...</div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error in AboutPage:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Something went wrong</h2>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const AboutPageContent = () => {
  const [events] = useState<Event[]>(DEFAULT_EVENTS);
  const [timeline] = useState<TimelineItem[]>(DEFAULT_TIMELINE);

  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<LoadingFallback />}>
        <Header />
        <Hero />
        <AboutSection />
        <MissionVision />
        <Timeline timeline={timeline} />
        <Founder />
        <Events events={events} />
        <Footer />
      </Suspense>
    </div>
  );
};

export default function AboutPage() {
  return (
    <ErrorBoundary>
      <AboutPageContent />
    </ErrorBoundary>
  );
}
