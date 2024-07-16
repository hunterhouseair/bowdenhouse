import { Inter } from "next/font/google";
import "../globals.css";
import CleanerNav from "../../components/CleanerNav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CleanerNav />

        {children}
      </body>
    </html>
  );
}
