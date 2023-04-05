import Banner from "../../../patterns/Banner"
import { Box } from "@chakra-ui/react"
import React from "react"
import ImageTextTable from "../../../patterns/ImageTextTable"
import { customerText } from "../../../constants/layoutConstants"
import { PageContainer } from "../../../patterns/Layouts/PageContainer"

const CustomerSurvey = ({ articles }) => {
  console.log(articles)
  const breadcrumb = [
    { text: "Home", link: "/" },
    { text: "Interactive Video", link: "/interactive-video" },
    {
      text: "Customer Survey Videos",
      link: "/interactive-video/customer-survey-videos/",
    },
  ]
  return (
    <Box>
      <Banner title="Customer Survey Videos" breadcrumb={breadcrumb} />
      <PageContainer>
        {articles.map((data, index) => {
          return (
            <ImageTextTable
              key={index + "custSurvey"}
              isVideo={data.attributes.hasVideoContent}
              index={index}
              imageTextdata={data.attributes}
            />
          )
        })}
      </PageContainer>
    </Box>
  )
}

export default CustomerSurvey
