import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "My Portfolio",
  description: "Professional developer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="p-4">
            <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
