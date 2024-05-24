import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Pokedex",
    description: "Pokedex with Next JS 14",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className={"max-w-7xl mx-auto pt-12"}>
            <Header/>
            {children}
        </div>
        </body>
        </html>
    );
}
