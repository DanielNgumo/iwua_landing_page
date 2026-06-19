import type { Metadata } from "next";
import "../styles/index.css";
import { AosProvider } from "./components/AosProvider";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Farm Fresh — Murang'a to the Nation",
  description: "Farm Fresh is Kenya's direct agritech marketplace connecting Murang'a farmers to buyers nationwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
          <AosProvider>{children}</AosProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}