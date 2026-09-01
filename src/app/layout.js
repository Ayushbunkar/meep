import {Inter, Varela_Round } from "next/font/google";
import localFont from "next/font/local"
import "bootstrap/dist/css/bootstrap.css"
import "./globals.css";
// import { Nav } from "@/Component/Common/Nav";
// import { Suspense } from "react";
// import Loading from "./loading";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const varela = Varela_Round({
  variable: "--font-varela",
  subsets: ["latin"],
  weight:['400']
});

const violet = localFont({
  src:"./Font/violet-sans.regular.ttf",
  variable:"--font-sans"
})

export const metadata = {
  title: "Meep",
  description: "The AI Writer Do Magic for you" 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${violet.variable} ${varela.variable}`}>
        {/* <Nav/> */}
        {/* <Suspense fallback ={<Loading/>}> */}
        {children}
        {/* </Suspense> */}
      </body>
    </html>
  );
}
