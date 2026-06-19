import type { Metadata } from "next";
import "../styles/index.css";
import { AosProvider } from "./components/AosProvider";

export const metadata: Metadata = {
  title: "IWUA Landing Page",
  description: "IWUA Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AosProvider>{children}</AosProvider>
      </body>
    </html>
  );
}