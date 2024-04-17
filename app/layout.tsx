import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { AOSInit } from "./aos";
export const metadata: Metadata = {
  title: "Prival Homes",
  description: "Booking Now",
  // icons:{
  //   icon:"@/public/images/navBar/logo.svg"
  // }
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
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
