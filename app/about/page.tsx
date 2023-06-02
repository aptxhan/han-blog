import { getAboutData } from "@/lib/post"
export default async function About() {
    const aboutData = await getAboutData()
    return (
        <div className="divide-y">
            <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                <div className="flex flex-col items-center space-x-2 pt-8">
                    <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">HAN</h3>
                    <div className="text-gray-500 dark:text-gray-400">分享记录技术知识和学习心得</div>
                    <div className="text-gray-500 dark:text-gray-400">热爱技术每一天</div>
                </div>
                <div className="prose prose-invert max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
                    <div dangerouslySetInnerHTML={{__html: aboutData.contentHtml}}/>
                </div>
            </div>
        </div>
    )
}

