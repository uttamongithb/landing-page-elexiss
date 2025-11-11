import "./globals.css";
import Navbar from "@/components/Navbar";
import { inter, rethinkSans } from "./fonts";



export const metadata = {
  title: "Cradle Style Landing Page",
  description: "AI-driven protein engineering platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${rethinkSans.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
       
       
      </body>
    </html>
  );
}
