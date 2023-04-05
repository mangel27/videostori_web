import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Blog from "../modules/Blog"

const BlogPage = ({ blogData }) => {
  return (
    <>
      <Seo seo={blogData.attributes.seo} />
      <Blog articles={blogData.attributes.articles.data} />
    </>
  )
}
export async function getStaticProps() {
  const blogDataRes = await fetchAPI("/categories", {
    filters: {
      slug: "blog",
    },
    sort: "priority:ASC",
    populate: {
      seo: {
        populate: "*",
      },
      articles: {
        populate: "*",
      },
    },
  })

  return {
    props: {
      blogData: blogDataRes.data[0],
    },
    revalidate: 1,
  }
}

export default BlogPage
