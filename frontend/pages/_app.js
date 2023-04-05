import App from "next/app"
import Head from "next/head"
import "../assets/css/style.css"
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react"
import { createContext } from "react"
import overrideTheme from "../styles/chakraStyles/theme"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import Layout from "../components/layout"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const theme = extendTheme(overrideTheme)
  const { global, categoriesData } = pageProps
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <ChakraProvider theme={theme}>
        <GlobalContext.Provider value={global.attributes}>
          <Layout
            categories={categoriesData}
            seoData={global.attributes.defaultSeo}
          >
            <Component {...pageProps} />
          </Layout>
        </GlobalContext.Provider>
      </ChakraProvider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi

  const [categoriesRes, globalRes] = await Promise.all([
    fetchAPI("/categories", {
      filters: { role: "primary" },
      sort: "priority:ASC",
      populate: {
        seo: {
          populate: "*",
        },
        categories: { populate: "*" },
      },
    }),
    await fetchAPI("/global", {
      populate: {
        favicon: "*",
        defaultSeo: {
          populate: "*",
        },
      },
    }),
  ])

  // Pass the data to our page via props
  return {
    ...appProps,
    pageProps: { global: globalRes.data, categoriesData: categoriesRes.data },
  }
}

export default MyApp
