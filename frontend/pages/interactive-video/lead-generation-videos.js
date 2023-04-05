import Seo from "../../components/seo"
import LeadGeneration from "../../modules/InteractiveVideo/LeadGeneration"
import { fetchAPI } from "../../lib/api"

const Lead = ({ leadGeneration }) => {
  return (
    <>
      <Seo seo={leadGeneration.attributes.seo} />
      <LeadGeneration articles={leadGeneration.attributes.articles.data} />
    </>
  )
}
export async function getStaticProps() {
  const leadGenereationRes = await fetchAPI("/categories", {
    filters: {
      slug: "lead-generation-videos",
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
      leadGeneration: leadGenereationRes.data[0],
    },
    revalidate: 1,
  }
}

export default Lead
