import React from "react"
import Banner from "../../../patterns/Banner"
import { VIDEODB } from "../../../constants/layoutConstants"
import {
  Box,
  Icon,
  SimpleGrid,
  Text,
  Flex,
  Image,
  Heading,
} from "@chakra-ui/react"
import ImageTextTable from "../../../patterns/ImageTextTable"
import {
  FaMailBulk,
  FaSms,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaRegCreditCard,
} from "react-icons/fa"
import { PageContainer } from "../../../patterns/Layouts/PageContainer"

const ICONS = [
  {
    id: "1",
    icon: <FaMailBulk />,
    text: "Email",
  },
  {
    id: "2",
    icon: <FaSms />,
    text: "SMS",
  },
  {
    id: "3",
    icon: <FaWhatsapp />,
    text: "WhatsApp",
  },
  {
    id: "4",
    icon: <FaFacebook />,
    text: "Facebook",
  },
  {
    id: "5",
    icon: <FaTwitter />,
    text: "Twitter",
  },
  {
    id: "6",
    icon: <FaRegCreditCard />,
    text: "Programmatic Ads",
  },
]

const breadcrumb = [
  { text: "Home", link: "/" },
  { text: "Interactive Videos", link: "/interactive-video" },
  { text: "Video Distribution", link: "features/videodistribution" },
]

const VideoDstribution = ({ articles }) => {
  return (
    <>
      <Banner title="Video Distribution" breadcrumb={breadcrumb} />
      <PageContainer>
        {articles.map((data, index) => {
          return (
            <ImageTextTable
              key={index + "videoDistb"}
              index={index}
              isVideo={data.attributes.hasVideoContent}
              imageTextdata={data.attributes}
            />
          )
        })}

        <Box className="hidden">
          <Heading textAlign={"center"} color={"gray.700"}>
            Distribution Channels for
          </Heading>
          <Flex
            flexWrap={"wrap"}
            justifyContent={"center"}
            alignItems="center"
            my="70px"
          >
            {ICONS.map((item) => {
              return (
                <Box
                  key={item.id}
                  h="160px"
                  display="flex"
                  flexDirection={"column"}
                  alignItems="center"
                  justifyContent="center"
                  w="190px"
                  m="20px"
                  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  _hover={{
                    bg: "black",
                    color: "#fff",
                    cursor: "pointer",
                    svg: {
                      color: "#fff",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Icon
                    ms="30"
                    boxSize={20}
                    color="red.500"
                    // _hover={{ color: "#fff", cursor: "pointer" }}
                  >
                    {item.icon}
                  </Icon>
                  <Text fontSize={"lg"} p={1} fontWeight={"bold"}>
                    {item.text}
                  </Text>
                </Box>
              )
            })}
          </Flex>
        </Box>
      </PageContainer>
    </>
  )
}

export default VideoDstribution
