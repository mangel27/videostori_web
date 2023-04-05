import React, { useState } from "react"
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Icon,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import { BsCheckCircle } from "react-icons/bs"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import VideoPlayer from "../../../patterns/VideoPlayer"
import "slick-carousel/slick/slick-theme.css"
import { getStrapiMedia } from "../../../lib/media"

const settings = {
  dots: false,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function Carousel({ slideData }) {
  const [slider, setSlider] = useState(null)
  const top = useBreakpointValue({ base: "60%", md: "60%" })
  const side = useBreakpointValue({ base: "10px", md: "5px" })

  const cards = [
    {
      img: "assets/img1.png",
      label: "Quit boring survey and make them interactive like never before",
      desc: "Create a Survey now on Video. Collect feedback on Videos. The plain and boring surveys can now be made interesting with a story and capturing user responses on Video. Capture user insights while surveying or collecting feedback/response.",
      subdesc: "Bringing new video Surveys formats",
    },
    {
      img: "assets/img2.png",
      label: "Now brand can use Videos to Personalize the Shopping Experience",
      desc: "A video is a visually appealing format for shoppers. Videostori enables conversion of  linear videos to shoppable videos thus reducing the friction and streamlining the shopping experience. This enables the viewer to shop directly from the Video.",
      subdesc: "Shop Till You Drop: The Evolution of Video Commerce",
    },
    {
      img: "assets/img3.png",
      label: "Use Interactive Videos and start making leads",
      desc: "Interactive Videos are a great source to generate leads. Interactive Videos can be designed to guide viewers, with each interactive element helping to move the viewer to take a specific action. The viewer can share his response on the CTA included within the Video preventing fall-offs.",
      subdesc: "The New and Exciting way to Generate Leads",
    },
    {
      img: "assets/img4.png",
      label: "Use Hotspots in your Videos and create the magic",
      desc: "Hotspots can make any part of the Video clickable thus enabling a variety of Interactive actions. By providing Interactive Experiences, Hotspots help increase Engagement and Retention, and provide a more Dynamic User Experience.",
      subdesc: "Hotspot: The new engagement tool in the Video world",
    },
    {
      img: "assets/img5.png",
      label: "Rewind and Fast-Forward",
      desc: "Interact with our switch timeline videos according to the interest and intent. Switch timeline is great feature where there is large amount of content and viewer has the power to define the path of the story",
      subdesc: "Bringing new video solutions to the market",
    },
  ]

  return (
    <Box
      className="hidden"
      position={"relative"}
      minH={"100vh"}
      width={["100%", "85%"]}
      m="0 auto"
      overflow={"hidden"}
    >
      <Heading textAlign={"center"} py={10} color="1b1f2e">
        Videostori Sample Video
      </Heading>
      <IconButton
        aria-label="left-arrow"
        colorScheme="red"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        colorScheme="red"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {slideData.map((item, index) => (
          <Box key={index} w="100%" py={20}>
            <Flex
              w="100%"
              h="400px"
              direction={["column-reverse", "row"]}
              justifyContent="space-evenly"
            >
              <Flex
                direction={"column"}
                p={5}
                width={["100%", "40%"]}
                alignSelf="center"
              >
                <Text pos={"relative"} fontSize={["2xl"]} fontWeight="bold">
                  {item.title}
                </Text>
                <Text pos={"relative"} py={8} lineHeight={7} fontSize={["sm"]}>
                  {item.description}
                </Text>
                <Flex>
                  <Icon as={BsCheckCircle} boxSize={5} fill="red" />
                  <Text pos={"relative"} fontSize={["sm"]} px={4}>
                    {item.listItem}
                  </Text>
                </Flex>
              </Flex>
              <VideoPlayer
                p={10}
                width={["90%", "45%"]}
                height={["70%", "100%"]}
                alignSelf={["center", "normal"]}
                videodata={{
                  thumbnail: getStrapiMedia(item.thumbnail),
                  videosrc: "https://videostori.io/v/l4/IVyEio",
                }}
              />
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
