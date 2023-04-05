import Seo from "../../components/seo"
import CustomerSurvey from "../../modules/InteractiveVideo/CustomerSurvey"
import { fetchAPI } from "../../lib/api"

const Customer = ({ custSurvey }) => {
  return (
    <>
      <Seo seo={custSurvey.attributes.seo} />
      <CustomerSurvey articles={custSurvey.attributes.articles.data} />
    </>
  )
}
export async function getStaticProps() {
  const custSurveyRes = await fetchAPI("/categories", {
    filters: {
      slug: "customer-survey-videos",
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
      custSurvey: custSurveyRes.data[0],
    },
    revalidate: 1,
  }
}

export default Customer
