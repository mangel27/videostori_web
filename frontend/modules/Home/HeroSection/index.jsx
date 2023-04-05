import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Box,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import NextImage from "../../../components/image"

export default function HeroSection({ heroData }) {
  return (
    <Stack
      minH={"135vh"}
      bg="#13161F"
      direction={{ base: "column", md: "row" }}
    >
      <Flex flex={1} p={[4, 8]} align={"center"} justify={"center"}>
        <Stack className="hidden" spacing={["50px", 8]} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text color={"white"} as={"span"}>
              {heroData.title}
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"white"}>
            {heroData.subtitle}
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={6}>
            <Button
              bg={"white"}
              w={["50%", "40%"]}
              py={"27px"}
              borderRadius="0"
              color={"black"}
              _hover={{
                bg: "red.500",
              }}
            >
              {heroData.ctaText}
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex className="hidden" flex={1}>
        <Box
          pos="relative"
          alignSelf={["none", "center"]}
          mx={["auto", "none"]}
          h={["40vh", "80vh"]}
          w={["90vw", "40vw"]}
          overflow={"hidden"}
          borderRadius={"50%"}
        >
          <NextImage image={heroData.bannerImage} />
        </Box>
      </Flex>
    </Stack>
  )
}
