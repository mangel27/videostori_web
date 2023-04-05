import Seo from "../../components/seo"
import PersonalizedVideos from "../../modules/InteractiveVideo/PersonalizedVideos"
import { fetchAPI } from "../../lib/api"

const Shop = ({ personalVideo }) => {
  return (
    <>
      <Seo seo={personalVideo.attributes.seo} />
      <PersonalizedVideos articles={personalVideo.attributes.articles.data} />
    </>
  )
}
export async function getStaticProps() {
  const personalVideoRes = await fetchAPI("/categories", {
    filters: {
      slug: "personalized-videos",
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
      personalVideo: personalVideoRes.data[0],
    },
    revalidate: 1,
  }
}

export default Shop
