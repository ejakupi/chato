import "./globals.css";
import { Public_Sans } from "next/font/google";

import { Navbar } from "@/components/Navbar";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Techy The Geeky Chatbot</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta property="og:title" content="Techy the Geeky Chatbot" />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Techy The Geeky Chatbot" />
        <meta
          name="twitter:description"
          content="Techy the Geeky Chatbot"
        />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <body className={publicSans.className}>
        <div className="flex flex-col p-4 md:p-12 h-[100vh]">
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
