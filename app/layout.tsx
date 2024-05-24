import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { AOSInit } from "./aos";
import { AuthProvider } from "./contexts/AuthContext";
export const metadata: Metadata = {
  title: "Prival Homes",
  description: "Booking Now",
  icons: {
    icon: "/images/navBar/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="m-auto">
      <AOSInit />
      <body>
        <AuthProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
