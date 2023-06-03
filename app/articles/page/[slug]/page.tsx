import Article from '@/components/article'
import Pagination from '@/components/pagination'
import { getAllPostIds, getArticleData } from '@/lib/post'

export default async function Page({params}:{params:{slug:string}}) {
  
  const posts = await getAllPostIds()
  const totalPages = Math.ceil(posts.length/5)
  const currentPage = Number(params.slug)
  const currentIndex = (currentPage - 1) * 5
  
  const currentPosts = posts.slice(currentIndex, currentIndex + 5)
  //当前summary
  const currentSummarys = new Map()
  //当前title
  const currentTitles = new Map()

  for(let i = 0; i < currentPosts.length; i++){
    const slug = decodeURI(currentPosts[i].slug)
    const postData = await getArticleData(slug)
    currentSummarys.set(slug, postData.matterResult.data.summary)
    currentTitles.set(slug, postData.matterResult.data.title)
  }

  return (
    <>
    <div className="divide-y">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          全部文章
        </h1>
        <div className="relative max-w-lg">
          <input
            aria-label="搜索文章"
            type="text"
            placeholder="搜索文章"
            className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <ul>
        {currentPosts.map((post) => {
          return <Article key={post.slug} slug={post.slug} 
          summary={currentSummarys.get(decodeURI(post.slug))}
          title={currentTitles.get(decodeURI(post.slug))}/>
        })}
      </ul>
    </div>
    <Pagination totalPages={totalPages} currentPage={currentPage}/>
  </>
  )
}




export async function generateStaticParams(){
  const posts = await getAllPostIds()
  const number = posts.length;
  const tatalPages = Math.ceil(number/5)
  let res = [];
  for(let i = 2; i <= tatalPages; i++){
    res.push({slug: i.toString()})
  }
  return res
}

export const dynamicParams = false