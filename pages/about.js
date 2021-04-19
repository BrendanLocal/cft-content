import * as React from 'react'
import { usePlugin } from 'tinacms'
import { useJsonForm } from 'next-tinacms-json'

 export default function Page({ jsonFile }) {
   // Create the Form
const [post, form] = useJsonForm(jsonFile)

   // Register it with the CMS
usePlugin(form)

   return (
     <>
<h1>{post.title}</h1>
     </>
   )
 }

 export async function getStaticProps({ ...ctx }) {
   const { slug } = ctx.params
   const content = await import(`../../posts/${slug}.json`)

   return {
     props: {
       jsonFile: {
         fileRelativePath: `/posts/${slug}.json`,
         data: content.default,
       },
     },
   }
 }

export async function getStaticPaths() {
  //get all .json files in the posts dir
  const posts = glob.sync('posts/**/*.json')

  //remove path and extension to leave filename only
  const postSlugs = posts.map(file =>
    file
      .split('/')[2]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  )

  // create paths with `slug` param
  const paths = postSlugs.map(slug => `/posts/${slug}`)
  return {
    paths,
    fallback: true,
  }
}
