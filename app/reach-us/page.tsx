import ReachUsPage from "@/components/pages/ReachUsPage";

export const metadata = {
  title: "Contact Us",
  description: "Visit our campuses in Mysore. Find contact details, addresses, and maps for Learners School, PU College, and Learners Digital. Get in touch with us today for admissions and inquiries.",
  keywords: ["Contact Learners Mysore", "School address", "PU College location", "Admissions contact", "Learners Digital", "Campus locations Mysore"],
  openGraph: {
    title: "Contact Us | Learners School & PU College Mysore Locations",
    description: "Visit our campuses in Mysore. Find contact details, addresses, and maps for Learners School, PU College, and Learners Digital.",
    url: "https://learnersglobal.com/reach-us",
    images: [
      {
        url: "/images/LL.png",
        width: 1200,
        height: 630,
        alt: "Learners Global Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Learners School & PU College",
    description: "Visit our campuses in Mysore. Get in touch for admissions and inquiries.",
  },
  alternates: {
    canonical: "https://learnersglobal.com/reach-us",
  },
};

export default function Page() {
  return <ReachUsPage />;
}



