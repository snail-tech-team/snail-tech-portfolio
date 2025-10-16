import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Snail Tech | Full-Stack Development Team",
  description:
    "We are a compact team of four: two Full‑stack Developers, one QA Engineer, and one UI/UX Designer who also serves as Project Manager. We build end‑to‑end web products with high quality standards, fast iteration, and user‑centered design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={`${roboto.className} select-none`}>{children}</body>
    </html>
  );
}
