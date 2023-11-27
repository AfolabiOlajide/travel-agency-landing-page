import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
    title: "MKS",
    description: "Best Agency In the World",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <div id="navPortal"></div>
                {children}
            </body>
        </html>
    );
}
