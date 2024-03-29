import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tomio Geek',
  description: 'Projeto do Desafio de Interação Humano Computador',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container">
            <div className="flex min-h-screen flex-col">
              <div className="mb-auto">
                <Navbar />
                <main className="">{children}</main>
              </div>
              <div className="w-full">
                <Footer />
              </div>
            </div>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
