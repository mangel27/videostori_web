import React from "react"
import Banner from "../../../patterns/Banner"
import {
  REPORTSAN,
  REPORTANALYTICS,
  REPORTCARDS,
} from "../../../constants/layoutConstants"
import ImageTextTable from "../../../patterns/ImageTextTable"
import { PageContainer } from "../../../patterns/Layouts/PageContainer"
import { Box, Center, SimpleGrid, Text, Image, Heading } from "@chakra-ui/react"

const breadcrumb = [
  { text: "Home", link: "/" },
  { text: "Interactive Videos", link: "/interactive-video" },
  { text: "Reports-Analytics", link: "features/reportsanalytics" },
]

const ReportAnalytics = ({ articles }) => {
  return (
    <>
      <Banner title="Reports-Analytics" breadcrumb={breadcrumb} />
      <PageContainer>
        <ImageTextTable
          isVideo={articles[0].attributes.hasVideoContent}
          imageTextdata={articles[0]?.attributes}
        />

        <Center py={10} px={10}>
          <Heading color="gray.700"> Channel-Specific Analytics</Heading>
        </Center>

        <SimpleGrid
          className="hidden"
          columns={[1, 4]}
          spacing={10}
          px={10}
          py={15}
        >
          {REPORTCARDS.map((item, index) => {
            return (
              <Box
                key={index}
                textAlign="center"
                boxShadow={"xl"}
                p={5}
                bg={"white.100"}
                _hover={{
                  bgImage: "/assets/card_bg.jpg",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <Text py={5} fontSize={20} fontWeight="bold">
                  {item.heading}
                </Text>
                <Text size={"sm"}>{item.paragraph}</Text>
              </Box>
            )
          })}
        </SimpleGrid>

        <ImageTextTable
          isVideo={articles[1]?.attributes.hasVideoContent}
          imageTextdata={articles[1]?.attributes}
        />
      </PageContainer>
    </>
  )
}

export default ReportAnalytics
