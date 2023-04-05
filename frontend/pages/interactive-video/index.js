import InteractiveVideo from "../../modules/InteractiveVideo"
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"

import React from "react"

const Interact = ({ interactVideo }) => {
  return (
    <>
      <Seo seo={interactVideo.attributes.seo} />
      <InteractiveVideo articles={interactVideo.attributes.articles.data} />
    </>
  )
}
export async function getStaticProps() {
  const interactVideoRes = await fetchAPI("/categories", {
    filters: {
      slug: "interactive-video",
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
      interactVideo: interactVideoRes.data[0],
    },
    revalidate: 1,
  }
}

export default Interact
