import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const metadata = {
  title: "As-if",
  description: "Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased bg-neutral-50 text-neutral-900`}
      >
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen pt-24 pb-12">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
