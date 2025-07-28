import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});



export const metadata: Metadata = {
  title: "Js Privezy",
  description: "Most interesting js privezy",
  icons: {
    icon: '/frame_1.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased flex flex-col min-h-screen px-2", poppins.variable)}
      >
        {/*Navbar  */}
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer/>
      </body>
    </html>
  );
}
