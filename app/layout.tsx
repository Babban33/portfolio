import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import Navbar from "./components/NavBar"
import Preloader from "@/components/preloader"

export const metadata = {
  title: "Chaitanya Wankhede - Personal Portfolio",
  description: "Personal portfolio showcasing skills, experience, and projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <div className="max-w-screen-xl mx-auto">
                {children}
              </div>
            </main>
          </div>
          <Preloader />
        </ThemeProvider>
      </body>
    </html>
  )
}