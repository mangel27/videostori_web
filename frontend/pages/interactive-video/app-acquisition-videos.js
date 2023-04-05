import Seo from "../../components/seo"
import AppAcquistion from "../../modules/InteractiveVideo/AppAcquistion"
import { fetchAPI } from "../../lib/api"

const AppAcquist = ({ appAcquist }) => {
  return (
    <>
      <Seo seo={appAcquist.attributes.seo} />
      <AppAcquistion articles={appAcquist.attributes.articles.data} />
    </>
  )
}
export async function getStaticProps() {
  const appAcquistRes = await fetchAPI("/categories", {
    filters: {
      slug: "app-acquisition-videos",
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
      appAcquist: appAcquistRes.data[0],
    },
    revalidate: 1,
  }
}

export default AppAcquist
