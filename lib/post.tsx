import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'
import rehypeHighlight from 'rehype-highlight'
//设置文件路径
const postsDirectory = path.join(process.cwd(), 'data/articles')

export async function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {slug: encodeURI(fileName.replace(/\.md$/, ''))};
  });
}

export function getSortedPostsData(id:string) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  return allPostsData
}

export async function getPostData(slug:string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
  .use(html)
  .process(matterResult.content);

const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    slug,
    contentHtml,
    ...matterResult.data,
    matterResult
  };
}

export async function getAboutData() {
  const fullPath = path.join(path.join(process.cwd(), 'data'), `about.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
  .use(html)
  .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    contentHtml,
  };
}



