import Banner from "../../../patterns/Banner"
import { Box } from "@chakra-ui/react"
import React from "react"
import { perText } from "../../../constants/layoutConstants"
import ImageTextTable from "../../../patterns/ImageTextTable"
import { PageContainer } from "../../../patterns/Layouts/PageContainer"

const PersonalizedVideos = ({ articles }) => {
  const breadcrumb = [
    { text: "Home", link: "/" },
    { text: "Interactive Video", link: "/interactive-video" },
    {
      text: "Personalized Videos",
      link: "/interactive-video/personalized-videos/",
    },
  ]
  return (
    <Box>
      <Banner title="Personalized Videos" breadcrumb={breadcrumb} />
      <PageContainer>
        {articles.map((data, index) => {
          return (
            <ImageTextTable
              key={index + "pers"}
              isVideo={data.attributes.hasVideoContent}
              index={index + 1}
              imageTextdata={data.attributes}
            />
          )
        })}
      </PageContainer>
    </Box>
  )
}

export default PersonalizedVideos
