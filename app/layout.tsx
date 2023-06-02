import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'


export const metadata: Metadata = {
  title: "HAN Blog",
  description: 'Created by HAN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="zh-CN" className='scroll-smooth dark'>
      <meta charSet='utf-8'/>
      <body >
        <div className= "mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">

        <div className='h-screen flex flex-col justify-between'>
          <Header/>

          <main className="mb-auto">
            {children}
          </main>        
          <Footer/>
        </div>
        </div>
        <div>

        </div>
        
      </body>
    </html>
  )
}