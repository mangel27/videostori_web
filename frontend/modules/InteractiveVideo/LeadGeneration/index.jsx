import Banner from "../../../patterns/Banner"
import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react"
import React from "react"
import FeatureSection from "../../Home/FeatureSection"
import { leadText } from "../../../constants/layoutConstants"
import ImageTextTable from "../../../patterns/ImageTextTable"
import { PageContainer } from "../../../patterns/Layouts/PageContainer"

const LeadGeneration = ({ articles }) => {
  const breadcrumb = [
    { text: "Home", link: "/" },
    { text: "Interactive Video", link: "/interactive-video" },
    {
      text: "Lead Generations Videos",
      link: "/interactive-video/lead-generation-videos/",
    },
  ]

  return (
    <Box>
      <Banner title="Lead Generations Videos" breadcrumb={breadcrumb} />
      <PageContainer>
        {articles.map((data, index) => {
          return (
            <ImageTextTable
              key={index + "leadGen"}
              index={index}
              isVideo={data.attributes.hasVideoContent}
              imageTextdata={data.attributes}
            />
          )
        })}
        <FeatureSection />
      </PageContainer>
    </Box>
  )
}

export default LeadGeneration
