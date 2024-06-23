import MenuSidebar from "@/features/home/MenuSidebar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Barber Pro",
  description: "Barber Pro é uma plataforma de agendamento de barbearias.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <body className={poppins.className}>
        <div className="flex flex-col bg-primary h-screen sm:flex-row">
          <MenuSidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
