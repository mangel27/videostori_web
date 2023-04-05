import React from "react"
import Articles from "../components/articles"
import Home from "../modules/Home"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const HomePage = ({ homepage }) => {
  return (
    <>
      <Seo seo={homepage.attributes.seo} />
      <Home homepage={homepage.attributes} />
    </>
  )
}

export async function getStaticProps() {
  const [articlesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: {
          populate: {
            bannerImage: { populate: ["url"] },
          },
        },
        carouselArticles: {
          sort: "priority:ASC",
          populate: {
            thumbnail: { populate: "*" },
            videoSrc: { populate: "*" },
          },
        },
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default HomePage
