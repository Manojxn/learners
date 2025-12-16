import HomePage from "@/components/pages/HomePage";

export const metadata = {
  title: "Home",
  description: "Welcome to Learners Global School, Learners PU College & Learners Digital in Mysore. Discover quality education that combines academic excellence with holistic development. Shaping tomorrow's leaders today since 2006.",
  keywords: ["Learners School Mysore", "Best PU College Mysore", "CBSE School Karnataka", "Quality education", "Holistic development", "Academic excellence"],
  openGraph: {
    title: "Learners School & PU College Mysore | Quality Education Since 2006",
    description: "Welcome to Learners School & PU College. Discover quality education that combines academic excellence with holistic development.",
    url: "https://learnersglobal.com",
    images: [
      {
        url: "/images/LL.png",
        width: 1200,
        height: 630,
        alt: "Learners Global School & PU College Mysore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learners School & PU College Mysore",
    description: "Quality education combining academic excellence with holistic development since 2006.",
  },
  alternates: {
    canonical: "https://learnersglobal.com",
  },
};

export default function Page() {
  return <HomePage />;
}



