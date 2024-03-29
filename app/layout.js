import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "McGuire Landscape Co",
  description:
    "Elevate your outdoor space with expert landscaping services in Southeastern Wisconsin. Transform your surroundings and thrive with us!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
