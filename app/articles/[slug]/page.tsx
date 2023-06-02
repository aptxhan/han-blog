import {getAllPostIds, getPostData} from '../../../lib/post'

import Link from 'next/link'


export default async function Post({params}:{params:{slug:string}}) {

  //使用decodeURI解码，防止中文名报错


  const postData = await getPost(decodeURI(params.slug))

  return (
    <div className='flex justify-center'>

      <div className='prose dark:prose-invert mt-10'>

        <h1>
          {postData.matterResult.data.title}
        </h1>
        <div className='items-center'>
          <Link href='articles'>返回文档列表</Link>
        </div>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}></div>
        <div className='items-center'>
          <Link href='articles'>返回文档列表</Link>
        </div>
      </div>
    </div>

  )
}

export async function generateStaticParams() {
  const posts = await getAllPostIds()
  
  return posts
}

export const dynamicParams = false



async function getPost(slug:string) {
  const postData = getPostData(slug)
  return postData
}





