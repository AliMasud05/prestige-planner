import Navbar from "@/components/navbar/Navbar";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Footer from "@/components/Shared/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

export const metadata = {
  title: "Prestige-planner",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <div>
              <Navbar />
              <div className="flex justify-center items-center my-8">
                {children}
              </div>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
