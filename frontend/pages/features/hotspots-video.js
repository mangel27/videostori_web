import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"
import HotSpot from "../../modules/Features/HotSpot"

const HotSpotPage = ({ hotSpotData }) => {
  return (
    <>
      <Seo seo={hotSpotData.attributes.seo} />
      <HotSpot articles={hotSpotData.attributes.articles.data} />
    </>
  )
}
export async function getStaticProps() {
  const hotSpotDataRes = await fetchAPI("/categories", {
    filters: {
      slug: "hotspots-video",
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
      hotSpotData: hotSpotDataRes.data[0],
    },
    revalidate: 1,
  }
}

export default HotSpotPage
