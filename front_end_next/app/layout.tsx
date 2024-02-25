import type { Metadata } from "next";
import { fonts } from "@/app/components/ui/fonts";
import ReactQueryProvider from "./components/global/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./globals.css";
import RegNavbar from "./components/ui/RegNavbar";

export const metadata: Metadata = {
  title: "Rwanda Rentals",
  description: "The number one rental platform in Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${fonts.className} antialiased`}
      >
        {/* <RegNavbar /> */}
        <ReactQueryProvider>
          {children}
          <ReactQueryDevtools />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
