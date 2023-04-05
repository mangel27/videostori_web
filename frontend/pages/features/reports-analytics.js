import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"
import ReportAnalytics from "../../modules/Features/ReportAnalytics"

const ReportAnalyticsPage = ({ reportData }) => {
  return (
    <>
      <Seo seo={reportData.attributes.seo} />
      <ReportAnalytics articles={reportData.attributes.articles.data} />
    </>
  )
}
export async function getStaticProps() {
  const reportDataRes = await fetchAPI("/categories", {
    filters: {
      slug: "reports-analytics",
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
      reportData: reportDataRes.data[0],
    },
    revalidate: 1,
  }
}

export default ReportAnalyticsPage
