import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { footerdata } from "@/lib/constData";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Home Page | Yamuna Digitech Pvt. Ltd.",
    template: "%s | Yamuna Digitech Pvt. Ltd.",
  },
  description:
    "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
  keywords: ["IT Courses", " Placement Assurance", "Practical Training"],
  publisher: "Yagnesh Modh",
  authors: [
    {
      name: "The Specail Char",
      url: "https://https://thespecialcharacter.com/",
    },
  ],
  creator: "Yagnesh Modh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Training and Services in Ahmedabad",
    siteId: "1467726470533754880",
    description: "Join our practical courses to upskill your tech knowledge.",
    creator: "Yagnesh Modh",
    creatorId: "1467726470533754880",
  },
  openGraph: {
    title: "IT Training and Services in Ahmedabad",
    description: "Want to Upskill? Join our practical courses",
    url: "https://thespecialcharacter.com",
    siteName: "Yamuna Digitech Pvt. Ltd.",
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Contact />
        <Footer data={footerdata} />
      </body>
    </html>
  );
}
