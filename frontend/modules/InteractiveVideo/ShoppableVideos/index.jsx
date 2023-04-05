import Banner from "../../../patterns/Banner"
import { Box } from "@chakra-ui/react"
import React from "react"
import { shopText } from "../../../constants/layoutConstants"
import ImageTextTable from "../../../patterns/ImageTextTable"
import { PageContainer } from "../../../patterns/Layouts/PageContainer"

const ShoppableVideos = ({ articles }) => {
  const breadcrumb = [
    { text: "Home", link: "/" },
    { text: "Interactive Video", link: "/interactive-video" },
    { text: "Shoppable Videos", link: "/interactive-video/shoppable-videos/" },
  ]

  return (
    <Box>
      <Banner title="Shoppable Videos" breadcrumb={breadcrumb} />
      <PageContainer>
        {articles.map((data, index) => {
          return (
            <ImageTextTable
              key={index + "shoppablevideo"}
              isVideo={data.attributes.hasVideoContent}
              imageTextdata={data.attributes}
              index={index}
            />
          )
        })}
      </PageContainer>
    </Box>
  )
}

export default ShoppableVideos
