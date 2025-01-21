import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import ChatBotAssistant from "../components/chatbot/chatbot";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "| HARSH TYAGI |",
  description: "Web Developer Portfolio",
  // icons: {
  //   icon: [
  //     {
  //       media: '(prefers-color-scheme: dark)',
  //       url: '/Images/user.png',
  //       href: '/Images/user.png',
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(spaceGrotesk.className, "bg-black text-white")}>
        <Navbar />
        {children}
        <ChatBotAssistant />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
