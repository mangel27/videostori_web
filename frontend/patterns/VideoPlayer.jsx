import { AspectRatio, Box, Square, Icon } from "@chakra-ui/react"
import { useState } from "react"
import { BsFillPlayCircleFill } from "react-icons/bs"
import ModalPattern from "./ModalPattern"

const VideoPlayer = ({ videodata, ...props }) => {
  const { thumbnail, videosrc } = videodata
  const [playVideo, setPlayVideo] = useState(false)
  const VideoContainer = () => {
    return (
      <AspectRatio ratio={1}>
        <iframe title="naruto" autoplay src={videosrc} allowFullScreen />
      </AspectRatio>
    )
  }
  return (
    <Box {...props}>
      <Square
        bgImage={`url(${thumbnail})`}
        bgSize="cover"
        bgPos="center"
        opacity={0.8}
        height="100%"
        bgRepeat={"no-repeat"}
        pos="relative"
      >
        <Icon
          cursor={"pointer"}
          onClick={() => setPlayVideo(true)}
          as={BsFillPlayCircleFill}
          boxSize={62}
          fill="red"
        />
        {playVideo && (
          <ModalPattern
            isOpen={playVideo}
            onToggle={() => setPlayVideo(!playVideo)}
            onClose={() => setPlayVideo(false)}
          >
            <VideoContainer />
          </ModalPattern>
        )}
      </Square>
    </Box>
  )
}
export default VideoPlayer
