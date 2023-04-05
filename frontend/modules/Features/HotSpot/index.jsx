import React from "react"
import {
  HOTSPOTTEXT,
  HOTSPOTCARD1,
  HOTSPOTCARD2,
  HOTSPOTCARD3,
  HOTSPOTCARD4,
} from "../../../constants/layoutConstants"
import {
  Box,
  Icon,
  SimpleGrid,
  Text,
  Stack,
  Image,
  Heading,
  Card,
  CardBody,
  Center,
} from "@chakra-ui/react"
import Banner from "../../../patterns/Banner"
import ImageTextTable from "../../../patterns/ImageTextTable"
import { PageContainer } from "../../../patterns/Layouts/PageContainer"
import { FaHandPointUp } from "react-icons/fa"
import VideoPlayer from "../../../patterns/VideoPlayer"

const breadcrumb = [
  { text: "Home", link: "/" },
  { text: "Interactive Videos", link: "/interactive-video" },
  { text: "Hot Spot", link: "features/hotspot" },
]

const HotSpot = ({ articles }) => {
  return (
    <>
      <Banner title="Hot Spot" breadcrumb={breadcrumb} />
      <PageContainer>
        {articles.map((data, index) => {
          return (
            <ImageTextTable
              key={index + "hotspot"}
              index={index}
              isVideo={data.attributes.hasVideoContent}
              imageTextdata={data.attributes}
            />
          )
        })}

        <Box className="hidden" p={[5, 20]}>
          <SimpleGrid columns={[1, 2]} spacing={3}>
            <Stack px={5} order={[2, 1]}>
              {HOTSPOTCARD1.map((item, index) => (
                <Card
                  key={index + "hotspotcard1"}
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  boxShadow={"2xl"}
                >
                  <Center ms="5" py={2}>
                    <Icon w={100} h={100} cursor="pointer" color="red.500">
                      {item.icon}
                    </Icon>
                  </Center>
                  <Stack>
                    <CardBody>
                      <Heading size="md" color={"gray.700"}>
                        {item.heading}
                      </Heading>
                      <Text py="2">{item.paragraph}</Text>
                    </CardBody>
                  </Stack>
                </Card>
              ))}
            </Stack>

            <VideoPlayer
              order={[1, 2]}
              h={["40vh", "100%"]}
              videodata={{
                thumbnail: "/assets/hotspot_thumb.png",
                videosrc: "https://videostori.io/v/l1/IVx5Y2",
              }}
            />
          </SimpleGrid>
        </Box>

        <Box className="hidden" p={[5, 20]}>
          <SimpleGrid columns={[1, 2]} spacing={3}>
            <VideoPlayer
              h={["40vh", "100%"]}
              videodata={{
                thumbnail: "/assets/hotspot_thumb.png",
                videosrc: "https://videostori.io/v/l1/IVx5Y2",
              }}
            />
            <Stack p={5}>
              {HOTSPOTCARD2.map((item, index) => (
                <Card
                  key={index + "hotspotcard2"}
                  p={[5, 2]}
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  boxShadow={"2xl"}
                >
                  <Center ms="5" py={5}>
                    <Icon w={100} h={100} cursor="pointer" color="red.500">
                      {item.icon}
                    </Icon>
                  </Center>
                  <Stack>
                    <CardBody>
                      <Heading size="md" color={"gray.700"}>
                        {item.heading}
                      </Heading>
                      <Text py="2">{item.paragraph}</Text>
                    </CardBody>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </SimpleGrid>
        </Box>

        <Box className="hidden" p={[5, 20]}>
          <SimpleGrid columns={[1, 2]} spacing={3}>
            <Stack px={5} order={[2, 1]}>
              {HOTSPOTCARD3.map((item, index) => (
                <Card
                  key={index + "hotspotcard3"}
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  boxShadow={"2xl"}
                >
                  <Center ms="5" py={2}>
                    <Icon w={100} h={100} cursor="pointer" color="red.500">
                      {item.icon}
                    </Icon>
                  </Center>
                  <Stack>
                    <CardBody>
                      <Heading size="md" color={"gray.700"}>
                        {item.heading}
                      </Heading>
                      <Text py="2">{item.paragraph}</Text>
                    </CardBody>
                  </Stack>
                </Card>
              ))}
            </Stack>
            <VideoPlayer
              order={[1, 2]}
              h={["40vh", "100%"]}
              videodata={{
                thumbnail: "/assets/hotspot_thumb.png",
                videosrc: "https://videostori.io/v/l1/IVx5Y2",
              }}
            />
          </SimpleGrid>
        </Box>

        <Box className="hidden" p={[5, 20]}>
          <SimpleGrid columns={[1, 2]} spacing={3}>
            <VideoPlayer
              h={["40vh", "100%"]}
              videodata={{
                thumbnail: "/assets/hotspot_thumb.png",
                videosrc: "https://videostori.io/v/l1/IVx5Y2",
              }}
            />
            <Stack px={5}>
              {HOTSPOTCARD4.map((item, index) => (
                <Card
                  key={index + "hotspotcard4"}
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  boxShadow={"2xl"}
                >
                  <Center ms="5" py={2}>
                    <Icon w={100} h={100} cursor="pointer" color="red.500">
                      {item.icon}
                    </Icon>
                  </Center>
                  <Stack>
                    <CardBody>
                      <Heading size="md" color={"gray.700"}>
                        {item.heading}
                      </Heading>
                      <Text py="2">{item.paragraph}</Text>
                    </CardBody>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </SimpleGrid>
        </Box>
      </PageContainer>
    </>
  )
}

export default HotSpot
