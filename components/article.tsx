import React from 'react'
import Link from 'next/link'
import { getPostData } from '@/lib/post'

export default function Article({slug, summary}:{slug:string, summary: string}){
  slug = decodeURI(slug)
  const postData = getPostData(slug)
  return (
    <li key={slug} className="py-12">
      <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-start xl:gap-5 xl:space-y-0">
          <div className="space-y-4 xl:col-span-3">
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <Link href={`/articles/${slug}`} className="text-gray-900 dark:text-gray-100">
                    {slug}
                  </Link>
                </h2>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                {summary}
              </div>
            </div>
            <div className="text-base font-medium leading-6">
              <Link
                href={`/articles/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                查看更多 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </article>
    </li>
  )
}
