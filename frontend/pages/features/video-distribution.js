import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"
import VideoDistribution from "../../modules/Features/VideoDistribution"

const VideoDistributionPage = ({ videoDistbData }) => {
  return (
    <>
      <Seo seo={videoDistbData.attributes.seo} />
      <VideoDistribution articles={videoDistbData.attributes.articles.data} />
    </>
  )
}
export async function getStaticProps() {
  const videoDistbDataRes = await fetchAPI("/categories", {
    filters: {
      slug: "video-distribution",
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
      videoDistbData: videoDistbDataRes.data[0],
    },
    revalidate: 1,
  }
}

export default VideoDistributionPage
