import type { ReactNode } from "react";
import "./globals.css";
import FloatingContactButton from "@/components/FloatingContactButton";

export const metadata = {
  title: {
    default: "Learners School & PU College Mysore | Quality Education Since 2006",
    template: "%s | Learners Global",
  },
  description: "Premier educational institution in Mysore offering holistic K-12 education and PU College programs. Nurturing tomorrow's leaders with academic excellence and character development.",
  keywords: ["School in Mysore", "PU College Mysore", "CBSE school", "Pre-University College", "Quality education Karnataka", "Learners Global", "Best school Mysore"],
  authors: [{ name: "Learners Global" }],
  creator: "Learners Global",
  publisher: "Learners Global",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://learnersglobal.com",
    title: "Learners School & PU College Mysore | Quality Education Since 2006",
    description: "Premier educational institution in Mysore offering holistic K-12 education and PU College programs.",
    siteName: "Learners Global",
    images: [
      {
        url: "/images/LL.png",
        width: 1200,
        height: 630,
        alt: "Learners Global School & PU College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learners School & PU College Mysore",
    description: "Premier educational institution offering holistic K-12 education and PU College programs in Mysore.",
    images: ["/images/LL.png"],
  },
  icons: {
    icon: "/images/LL.png",
    shortcut: "/images/LL.png",
    apple: "/images/LL.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="w-full h-full">
      <body className="w-full h-full bg-background text-foreground">
        {children}
        <FloatingContactButton />
      </body>
    </html>
  );
}



