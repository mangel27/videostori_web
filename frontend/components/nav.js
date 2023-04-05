import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react"
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons"
import NextImage from "./image"

import { useRouter } from "next/router"

export default function Nav({ categories, logo }) {
  const { isOpen, onToggle } = useDisclosure()
  const router = useRouter()

  return (
    <Box fontFamily={"Roboto"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("#1b1f2e", "white")}
        minH={"100px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={8} h={8} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 2 }} justify={{ base: "end", md: "start" }}>
          <Box height="65px" w="150px" as={Link} href="/" overflow={"hidden"}>
            <NextImage image={logo} />
          </Box>
          <Flex
            display={{ base: "none", md: "flex" }}
            align="center"
            pl={"100px"}
          >
            <DesktopNav categories={categories} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"md"}
            fontWeight={400}
            variant={"link"}
            border="2px"
            color={"red"}
            borderColor={"red"}
            px={4}
            href={"#"}
            onClick={() => {
              router.push("https://videostori.io/login")
            }}
          >
            Login
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"md"}
            fontWeight={600}
            color={"white"}
            bg={"red"}
            href={"#"}
            _hover={{
              cursor: "pointer",
            }}
            onClick={() => {
              router.push("https://videostori.io/signup")
            }}
          >
            Signup
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav categories={categories} />
      </Collapse>
    </Box>
  )
}

const DesktopNav = ({ categories }) => {
  const linkColor = useColorModeValue("#1b1f2e", "#1b1f2e")
  const linkHoverColor = useColorModeValue("rgb(244,48,48,0.9)", "white")
  const popoverContentBgColor = useColorModeValue("white", "gray.800")

  return (
    <Stack direction={"row"} spacing={4}>
      {categories.map((navItem) => (
        <Box key={navItem.id}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={"/" + navItem.attributes.slug ?? "#"}
                fontSize={"lg"}
                fontWeight={700}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  svg: { color: linkHoverColor },
                }}
                _active={{ color: linkHoverColor }}
              >
                {navItem.attributes.name}
                {navItem.attributes.categories &&
                  navItem.attributes.categories.data &&
                  navItem.attributes.categories.data.length > 0 && (
                    <Icon
                      as={ChevronDownIcon}
                      transition={"all .25s ease-in-out"}
                      w={6}
                      h={6}
                    />
                  )}
              </Link>
            </PopoverTrigger>

            {navItem.attributes.categories &&
              navItem.attributes.categories.data &&
              navItem.attributes.categories.data.length > 0 && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.attributes.categories.data.map((child) => (
                      <DesktopSubNav
                        parentSlug={navItem.attributes.slug}
                        key={child.attributes.name}
                        {...child.attributes}
                      />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ name, slug, parentSlug }) => {
  return (
    <Link
      href={"/" + parentSlug + "/" + slug}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("red.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "red.400" }}
            fontWeight={500}
          >
            {name}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"red.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}
const MobileNav = ({ categories }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {categories.map((navItem) => (
        <MobileNavItem key={navItem.id} {...navItem.attributes} />
      ))}
    </Stack>
  )
}

const MobileNavItem = (props) => {
  const { name, slug, categories } = props

  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack
      spacing={4}
      onClick={
        categories && categories.data && categories.data.length > 0 && onToggle
      }
    >
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
          as={Link}
          href={slug ?? "#"}
        >
          {name}
        </Text>
        {categories && categories.data && categories.data.length > 0 && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {categories.data &&
            categories.data.map((child) => (
              <Link
                key={child.attributes.name}
                py={2}
                href={slug + "/" + child.attributes.slug}
              >
                {child.attributes.name}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}
const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Interactive Videos",
    href: "/interactive-video",
    children: [
      {
        label: "Lead Generation Videos",
        href: "/interactive-video/lead-generation-videos/",
      },
      {
        label: "Shoppable Videos",
        href: "/interactive-video/shoppable-videos/",
      },
      {
        label: "Personalized Videos",
        href: "/interactive-video/personalized-videos/",
      },
      {
        label: "Customer Survery Videos",
        href: "/interactive-video/customer-survey-videos/",
      },
      {
        label: "App Acquistion",
        href: "/app-acquistion-videos/",
      },
    ],
  },
  {
    label: "Features",
    children: [
      {
        label: "Hot Spot",
        href: "/features/hotspot",
      },
      {
        label: "Switch Timeline",
        href: "/features/switchtimeline",
      },
      {
        label: "Video Distribution",
        href: "/features/videodistribution",
      },
      {
        label: "Reports-Analytics",
        href: "/features/reportsanalytics",
      },
    ],
    href: "#",
  },
  {
    label: "Blog",
    href: "/blog",
  },
]
