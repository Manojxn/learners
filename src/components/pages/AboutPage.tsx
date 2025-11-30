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
    _id: "tl-2025",
    year: "2025",
    title: "Setup of GCCs for Onyx & Abacus Insights through Learners Digital",
    description:
      "Established Global Capability Centres (GCCs) for Onyx and Abacus Insights under Learners Digital, expanding the organization's reach into global technology partnerships.",
  },
  {
    _id: "tl-2023",
    year: "2023",
    title: "Launch of Learners Global School & PU College, Mysore",
    description:
      "Founded Learners Global School and PU College, Mysore, taking on the roles of Founder Director and Founder Principal, bringing global experience back to the field of education.",
  },
  {
    _id: "tl-2021",
    year: "2021",
    title: "Establishment of Learners Digital",
    description:
      "Founded Learners Digital, aiming to create a modern platform for skill development, technology training, and learning innovation.",
  },
  {
    _id: "tl-2012",
    year: "2012",
    title: "Received Honorary Citizen award from Government of China",
    description:
      "Murali Mohan Konareddy, Head of Education and Research, Infosys Technologies (China), was conferred the title of 'Honorary citizen of Nahu district' by Joaxing Nahu District People's government during the 'Spring in Nanhu' function held in China.",
  },
  {
    _id: "tl-2011-1",
    year: "2011",
    title: "Setup Learners Pre University College in Mysore",
    description:
      "The long cherished dream and passion to provide a PU college with high standards of learning has culminated in the founding of Learners Pre-University College in the year 2011.",
  },
  {
    _id: "tl-2011-2",
    year: "2011",
    title: "Received Extraordinary Science and Technology mentor award",
    description:
      "Mr. Murali has received the Extraordinary Science and Technology mentor award for his contribution in the field.",
  },
  {
    _id: "tl-2010-1",
    year: "2010",
    title: "Setup Infosys China Education Center at Jiaxing",
    description:
      "With his previous experience, Mr. Murali has handled a huge responsibility of setting up Education Center in China very effectively.",
  },
  {
    _id: "tl-2010-2",
    year: "2010",
    title: "Received Infosys Excellence Award for people development",
    description:
      "Mr. Murali has been honoured with Infosys Excellence Award for his contribution towards people development.",
  },
  {
    _id: "tl-2008-2014",
    year: "2008–2014",
    title: "Infosys China",
    description:
      "Continued his journey with Infosys in China, contributing to global operations, training, and technology development.",
  },
  {
    _id: "tl-2004-2008",
    year: "2004–2008",
    title: "Part of the Core Team Establishing Infosys Global Institute, Mysore",
    description:
      "Was an integral member of the team that helped set up the Global Education Centre (GEC) of Infosys in Mysore, one of the world's largest corporate training campuses.",
  },
  {
    _id: "tl-2000-2004",
    year: "2000–2004",
    title: "Project Coordinator at Aetna (Infosys Assignment)",
    description:
      "Worked with Aetna as part of Infosys, taking on the responsibility of Project Coordinator, managing large-scale client processes and delivery operations.",
  },
  {
    _id: "tl-1998-2000",
    year: "1998–2000",
    title: "Infosys (Bangalore & Pune)",
    description:
      "Joined Infosys in Bangalore and Pune as a Trainee and later an Employee, stepping into the corporate technology world.",
  },
  {
    _id: "tl-1996-1998",
    year: "1996–1998",
    title: "IIT Kanpur",
    description:
      "Associated with IIT Kanpur, gaining valuable exposure to advanced academic and technical environments.",
  },
  {
    _id: "tl-1992-1996",
    year: "1992–1996",
    title: "Coordinator, Vishvam ECET Coaching Centre, Tirupati",
    description:
      "Served as the Technical Coordinator and Director at Vishvam ECET Coaching Centre, Tirupati, where he oversaw academic planning, training systems, and student learning outcomes.",
  },
  {
    _id: "tl-1991",
    year: "1991",
    title: "Beginning as a Volunteer Teacher",
    description:
      "Murali Konareddy sir began his career in 1991 by volunteering as a Mathematics teacher at Rangasamudram Government High School, Andhra Pradesh, marking the start of his commitment to education.",
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
        <MissionVision />
        <AboutSection />
        <Timeline timeline={timeline} />


        {/* <Events events={events} /> */}
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
