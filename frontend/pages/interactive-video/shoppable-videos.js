import Seo from "../../components/seo"
import ShoppableVideos from "../../modules/InteractiveVideo/ShoppableVideos"
import { fetchAPI } from "../../lib/api"

const Shop = ({ shoppableVideo }) => {
  return (
    <>
      <Seo seo={shoppableVideo.attributes.seo} />
      <ShoppableVideos articles={shoppableVideo.attributes.articles.data} />
    </>
  )
}
export async function getStaticProps() {
  const shoppableVideoRes = await fetchAPI("/categories", {
    filters: {
      slug: "shoppable-videos",
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
      shoppableVideo: shoppableVideoRes.data[0],
    },
    revalidate: 1,
  }
}

export default Shop
