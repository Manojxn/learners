import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Discover our mission to provide holistic education combining academic excellence with character development. Learn about our journey, values, and commitment to shaping future leaders since 2006.",
    keywords: ["About Learners", "Educational philosophy", "School history Mysore", "PU College values", "Our mission", "Educational excellence"],
    openGraph: {
        title: "About Us | Learners School & PU College - Our Journey Since 2006",
        description: "Discover our mission to provide holistic education combining academic excellence with character development.",
        url: "https://learnersglobal.com/about",
        images: [
            {
                url: "/images/LL.png",
                width: 1200,
                height: 630,
                alt: "About Learners Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | Learners School & PU College",
        description: "Our mission to provide holistic education and shape future leaders since 2006.",
    },
    alternates: {
        canonical: "https://learnersglobal.com/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
