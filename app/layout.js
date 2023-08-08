import "./globals.css";
import { Inter } from "next/font/google";
import SuperProvider from "@/redux/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Super Form Builder 💪",
  description: "Super Form is a Form Builder 💪",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SuperProvider>
          <div>{children}</div>
        </SuperProvider>
      </body>
    </html>
  );
}
