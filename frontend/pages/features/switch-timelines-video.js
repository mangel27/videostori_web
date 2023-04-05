import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"
import SwitchTimeline from "../../modules/Features/SwitchTimeline"

const SwitchTimelinePage = ({ switchTimelineData }) => {
  return (
    <>
      <Seo seo={switchTimelineData.attributes.seo} />
      <SwitchTimeline articles={switchTimelineData.attributes.articles.data} />
    </>
  )
}
export async function getStaticProps() {
  const switchTimelineDataRes = await fetchAPI("/categories", {
    filters: {
      slug: "switch-timelines-video",
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
      switchTimelineData: switchTimelineDataRes.data[0],
    },
    revalidate: 1,
  }
}

export default SwitchTimelinePage
