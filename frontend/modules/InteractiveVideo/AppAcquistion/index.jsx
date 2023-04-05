import Banner from "../../../patterns/Banner"
import { Box } from "@chakra-ui/react"
import React from "react"
import { appText } from "../../../constants/layoutConstants"
import ImageTextTable from "../../../patterns/ImageTextTable"

const AppAcquistion = ({ articles }) => {
  const breadcrumb = [
    { text: "Home", link: "/" },
    { text: "App Acquisition Videos", link: "/app-acquistion-videos/" },
  ]

  return (
    <Box>
      <Banner title="App Acquisition Videos" breadcrumb={breadcrumb} />
      {articles.map((data, index) => {
        return (
          <ImageTextTable
            key={index + "appacq"}
            index={index}
            isVideo={data.attributes.hasVideoContent}
            imageTextdata={data.attributes}
          />
        )
      })}
    </Box>
  )
}

export default AppAcquistion
