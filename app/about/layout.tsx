import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "关于HAN",
  description: 'Created by HAN',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <main className=''>
        {children}
      </main>
    </>
  )
}

