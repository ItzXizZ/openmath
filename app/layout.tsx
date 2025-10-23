import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenMath - Global STEM Education",
  description: "OpenMath bridges the gap in global STEM education by providing free competitions and workshops to students who otherwise wouldn't have access to such programs.",
  keywords: "STEM, education, competitions, workshops, mathematics, science",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
