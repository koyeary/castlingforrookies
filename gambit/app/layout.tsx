import React from "react";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import ThemeRegistry from "./providers/ThemeProvider";
import UserProvider from "./providers/UserProvider";
import MenuSelectProvider from "./providers/MenuSelectProvider";
import "@/app/ui/global.css";

export const metadata: Metadata = {
  title: "Gambit",
  description:
    "Learn about the ForEx market and how to short-sell currencies with Gambit",
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
      <body>
        <ThemeRegistry>
          <UserProvider>
            <MenuSelectProvider>
              <Navbar />
              <main className="app-container">
                <div className="centered-content">{children}</div>
              </main>
            </MenuSelectProvider>
          </UserProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
