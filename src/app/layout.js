// import { Geist, Geist_Mono } from "next/font/google";
import { Radio_Canada_Big } from "next/font/google";

import "./globals.css";
import HomePage from "./page";
import Product from "./product/page";
import About from "./about/page";
import Footer from "@/components/Footer";
import Contact from "./contact/page";
import EmailSection from "@/components/EmailSection";
import Achivment from "@/components/Ahivement";

const radioCanadaBig = Radio_Canada_Big({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Regular, Medium, Bold
  variable: "--font-radio-canada-big",
  display: "swap",
});

export const metadata = {
  title: "Apura",
  description:
    "APURA is an ecosystem dedicated to the privacy and security of their users; completely build from scratch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={radioCanadaBig.variable}>
      <body>
        <HomePage/>
        <EmailSection />
        <Product />
        <About/>
        <Achivment />
        <Contact />
        {/* {children} */}
        <Footer />
      </body>
    </html>
  );
}
