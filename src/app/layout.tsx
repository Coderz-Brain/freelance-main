import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Ubuntu } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
});


export const metadata: Metadata = {
  title: "VisionCode",
  description: "Home",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true} className={`${poppins.variable} ${ubuntu.variable} antialiased min-h-screen w-full overflow-x-hidden px-4 lg:px-0`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
