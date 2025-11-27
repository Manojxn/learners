import FAQsPage from "@/components/pages/FAQsPage";

export const metadata = {
  title: "FAQs",
  description: "Find answers to common questions about admissions, programs, facilities, and more at Learners School & PU College in Mysore. Get the information you need about our educational offerings.",
  keywords: ["School admissions FAQ", "PU College questions", "Mysore education queries", "Learners FAQs", "Admission process", "School facilities"],
  openGraph: {
    title: "FAQs | Learners School & PU College - Admissions & Programs",
    description: "Find answers to common questions about admissions, programs, facilities, and more at Learners School & PU College in Mysore.",
    url: "https://learnersglobal.com/faqs",
    images: [
      {
        url: "/images/LL.png",
        width: 1200,
        height: 630,
        alt: "Learners Global FAQs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | Learners School & PU College",
    description: "Get answers to your questions about admissions, programs, and facilities.",
  },
  alternates: {
    canonical: "https://learnersglobal.com/faqs",
  },
};

export default function Page() {
  return <FAQsPage />;
}



