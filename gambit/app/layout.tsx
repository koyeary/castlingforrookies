import React from "react";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import ThemeRegistry from "./providers/ThemeProvider";
import "@/app/ui/global.css";

export const metadata: Metadata = {
  title: "Gambit",
  description: "Learn to short-sell currencies and stocks with Gambit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-US"
      style={{ transitionProperty: "none", marginRight: "0px" }}
    >
      <ThemeRegistry>
        <body>
          <Navbar user={{ userName: "", isLoggedIn: true }} />
          <main className="app-container">
            <div className="centered-content">{children}</div>
          </main>
        </body>
      </ThemeRegistry>
    </html>
  );
}
