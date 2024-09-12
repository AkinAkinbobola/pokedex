import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Pokedex with Next JS 14",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-lightGray min-h-screen antialiased font-sans",
          roboto.className,
        )}
      >
        <ReactQueryProvider>
          <div className={"container pt-12"}>
            <Header />
            {children}
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
