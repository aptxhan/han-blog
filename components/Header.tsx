import React from 'react'
import Link from 'next/link'
//引入导航数据
import headerNavLinks from '@/data/headerNavLinks'

export default function Header() {
  return (
    <header className='flex items-center justify-around py-10'>
      <div>
        <Link href="/">
          <div className='flex items-center justify-between'>
            <div className='hidden h-6 text-2xl font-semibold sm:block'><a>HAN个人博客</a></div>
          </div>
        </Link>
      </div>
      <div className='flex items-center text-base leading-5'>
        <div className='hidden sm:block'>
          {
            headerNavLinks.map((head) => (
              <Link key={head.href} href={head.href} className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"><a>{head.title}</a></Link>
            ))
          }
        </div>
      </div>
      <div></div>
    </header>

  )
}
