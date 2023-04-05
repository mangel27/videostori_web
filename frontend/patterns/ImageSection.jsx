import { Box, Image } from "@chakra-ui/react"
import NextImage from "../components/image"
const ImageSection = ({ imgSrc, ...props }) => {
  return (
    imgSrc && (
      <Box pos="relative" overflow={"hidden"} {...props}>
        <NextImage image={imgSrc} />
      </Box>
    )
  )
}
export default ImageSection
