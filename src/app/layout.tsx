import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Ubuntu } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";



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
  title: "Coder's-Brain",
  description: "Home",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${ubuntu.variable} antialiased`}>
        <Providers>
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
