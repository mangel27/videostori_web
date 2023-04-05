import VideoPlayer from "./VideoPlayer"
import { Box, Flex } from "@chakra-ui/react"
import React, { useRef } from "react"
import ImageSection from "./ImageSection"
import TextSection from "./TextSection"
import { getStrapiMedia } from "../lib/media"

const ImageTextTable = ({ imageTextdata, isVideo, index }) => {
  const ref = useRef(null)

  return (
    <Flex
      className="hidden"
      minH={["auto", "50vh"]}
      w="100%"
      direction={["column", "row"]}
      p="2vw"
      transition="background .3s,border .3s,border-radius .3s,box-shadow .3s,transform .5s"
      ref={ref}
    >
      {isVideo ? (
        <VideoPlayer
          p={10}
          m={[0, 10]}
          width={["100%", "50%"]}
          h={["40vh", "auto"]}
          minH={["40vh", "60vh"]}
          videodata={{
            thumbnail: getStrapiMedia(imageTextdata.thumbnail),
            videosrc: imageTextdata.videoUrl,
          }}
        />
      ) : (
        <ImageSection
          w={["100%", "50%"]}
          h={"auto"}
          order={[1, index % 2 === 0 ? 2 : 1]}
          imgSrc={imageTextdata.image}
          py={[5, 0]}
          px={[0, 10]}
        />
      )}
      <TextSection
        w={["100%", "50%"]}
        order={[2, index % 2 === 0 ? 1 : 2]}
        {...imageTextdata}
        p={[5, 10]}
        textAlign="left"
      />
    </Flex>
  )
}

export default ImageTextTable
