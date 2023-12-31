import './globals.css'
// import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});




// const inter = Inter({ subsets: ['latin'] })

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
     
      <body className={`{poppins.className} `}> <Navbar />{children}<Footer /></body>
      
    </html>
  )
}
