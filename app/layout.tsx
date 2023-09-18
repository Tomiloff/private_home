import { Header } from '@/components/layout/Header/Header'
import '../assets/basic_styles/reset.scss'
import '../assets/basic_styles/globals.scss'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'INCHAPIN',
  description: 'Test task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
