import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Image,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import NextImage from "../components/image"
import { MdPhoneEnabled } from "react-icons/md"
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FiFacebook } from "react-icons/fi"

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  )
}

const footerIcons = [
  {
    item: FaFacebookF,
  },
  {
    item: FaTwitter,
  },
  {
    item: FaInstagram,
  },
  {
    item: FaWhatsapp,
  },
]

export default function Footer({ logo }) {
  return (
    <Box
      bg={useColorModeValue("#1b1f2b", "gray.900")}
      color={useColorModeValue("gray.400", "gray.200")}
      mt={[52, 32]}
      pos="relative"
    >
      <Flex
        direction={["column", "row"]}
        position={"absolute"}
        //bottom={["0", "610px"]}
        top={["-200px", "-100px"]}
        left="2%"
        w="96%"
        h={["40vh", "26vh"]}
        alignItems={["flex-start", "center"]}
        justifyContent={["space-evenly", "space-between"]}
        px={[10, "100px"]}
        zIndex={1}
        bg="#303441"
        mb={8}
      >
        <Flex direction={"column"} color="#1b1f2e" fontWeight={"bold"}>
          <Text py={4}>Need Any Consultations ?</Text>
          <Text fontSize={["xl", "4xl"]}>
            We’re Ready to Growth IT Business
          </Text>
        </Flex>
        <Flex>
          <Button mx="4" bg="#1b1f2e" color={"white"} _hover={{ bg: "red" }}>
            Get Free Quote
          </Button>
          <Icon
            cursor={"pointer"}
            borderRadius="50%"
            bg="white"
            as={MdPhoneEnabled}
            boxSize={8}
            fill="red"
          />
        </Flex>
      </Flex>
      <Container as={Stack} maxW={"90%"} py={"130px"}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "3fr 2fr 2fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={14} display="flex" justifyContent="center">
            <Box
              height="65px"
              mx={["auto", "0px"]}
              bg="white"
              w="150px"
              as={Link}
              href="/"
              overflow={"hidden"}
            >
              <NextImage image={logo} />
            </Box>
            <Text fontSize={"sm"} w={["100%", "65%"]}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accntiumc doloremque laudantium totam
            </Text>
          </Stack>
          <Stack align={"flex-start"} spacing={[5, 8]}>
            <Text fontSize={"2xl"} color="white" fontWeight="bold">
              Services
            </Text>
            <Link href={"#"}>Product Design</Link>
            <Link href={"#"}>Design & Development</Link>
            <Link href={"#"}>UX/UI Strategy</Link>
            <Link href={"#"}>Search Engine</Link>
            <Link href={"#"}>IT Consulting</Link>
            <Link href={"#"}>Business Analysis</Link>
          </Stack>
          <Stack align={"flex-start"} spacing={8}>
            <Text fontSize={"2xl"} color="white" fontWeight="bold">
              Support
            </Text>
            <Link href={"#"}>Start Here</Link>
            <Link href={"#"}>Style guide</Link>
            <Link href={"#"}>About Company</Link>
            <Link href={"#"}>Password Protected</Link>
            <Link href={"#"}>Licenses</Link>
            <Link href={"#"}>Changelog</Link>
          </Stack>
          <Stack align={"flex-start"} spacing={8}>
            <Text fontSize={"2xl"} color="white" fontWeight="bold">
              Newsletter
            </Text>
            <Text>
              Sed perspiciatis unde omnste natus error voluptatem accusante.
            </Text>
            <Stack direction={"row"} py={6}>
              <Input size={"xs"} variant="flushed" mr={6} />
              <Button
                colorScheme="gray"
                px={6}
                borderRadius="0"
                _hover={{
                  bg: "#1b1f2e",
                }}
              >
                Submit
              </Button>
            </Stack>
            <Link href={"#"}>Follow Us</Link>
            <Flex>
              {footerIcons.map((icon, index) => {
                return (
                  <Icon
                    key={index + "icon"}
                    cursor={"pointer"}
                    as={icon.item}
                    mr={4}
                    boxSize={5}
                    fill="gray.300"
                    _hover={{ fill: "red" }}
                  />
                )
              })}
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#0f1425"
        h="10vh"
      >
        <Text color="gray.500">Copyright © 2022. All rights reserved.</Text>
      </Box>
    </Box>
  )
}
