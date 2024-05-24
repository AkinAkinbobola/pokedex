import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"]
});

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
        <body className={roboto.className}>
        <div className={"max-w-7xl mx-auto py-12"}>
            <Header/>
            {children}
        </div>
        </body>
        </html>
    );
}
