import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'





const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IceCube',
  description: 'Generated by create next app',
  
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
