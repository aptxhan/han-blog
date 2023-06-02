'use client'
import { Metadata } from 'next'
import { useEffect } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

export const metadata: Metadata = {
  title: "HAN的文章",
  description: 'Created by HAN',
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    hljs.highlightAll()
    console.log(111)
  })

  return (
    <>
      <main>
        {children}
      </main>
    </>
  )
}

