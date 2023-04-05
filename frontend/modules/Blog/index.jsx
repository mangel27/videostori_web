import Banner from "../../patterns/Banner"
import { blogText } from "../../constants/layoutConstants"
import ImageTextTable from "../../patterns/ImageTextTable"
import NextImage from "../../components/image"
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react"
import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"

const Blog = ({ articles }) => {
  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "Blog", link: "blog", isCurrentPage: true },
  ]
  const markdowntheme = {
    p: (props) => {
      const { children } = props
      return (
        <Text variant="body" my="1em">
          {children}{" "}
        </Text>
      )
    },
  }

  const BlogCard = ({ blog }) => {
    return (
      <Flex
        className="hidden"
        alignItems="center"
        justifyContent="center"
        as={Link}
        href={blog.blogUrl}
        _hover={{ textDecor: "none!important" }}
        direction={["column", "row"]}
        py={["130px", "0"]}
        h="100vh"
        w="100%"
      >
        <Box h="60%" w={["95%", "40%"]}>
          <NextImage alt="img" image={blog.image} h="100%" />
        </Box>
        <Box
          h="60%"
          w={["95%", "45%"]}
          p={["30px", "60px"]}
          boxShadow="0px 10px 60px 0px rgba(223, 223, 223, 0.5)"
        >
          <Box h="100%">
            <Text as="button" mb="10px">
              {blog.description}
            </Text>
            <Box h="100%">
              <Text
                fontSize="24px"
                fontWeight={"600"}
                lineHeight={1.4}
                mb="25px"
              >
                {blog.title}
              </Text>
              <ReactMarkdown
                skipHtml={false}
                components={ChakraUIRenderer(markdowntheme)}
              >
                {blog.content}
              </ReactMarkdown>
            </Box>
          </Box>
        </Box>
      </Flex>
    )
  }
  return (
    <>
      <Banner title="Latest Blog" />
      {articles &&
        articles.map((article, index) => (
          <BlogCard key={index + "blog"} blog={article.attributes} />
        ))}
      {/* <ImageTextTable imageTextdata={blogText} index={2} /> */}
      {/* <Flex
        className="hidden"
        alignItems="center"
        justifyContent="center"
        direction={["column", "row"]}
        py={["130px", "0"]}
        h="100vh"
        w="100%"
      >
        <Box h="60%" w={["95%", "40%"]}>
          <Image alt="img" src={blogText.imageurl} h="100%" />
        </Box>
        <Box
          h="60%"
          w={["95%", "45%"]}
          p={["30px", "60px"]}
          boxShadow="0px 10px 60px 0px rgba(223, 223, 223, 0.5)"
        >
          <Box h="100%">
            <Link as="button" mb="10px">
              {blogText.category}
            </Link>
            <Box h="100%">
              <Text
                fontSize="24px"
                fontWeight={"600"}
                lineHeight={1.4}
                mb="25px"
              >
                {blogText.title}
              </Text>
              <Text lineHeight={2}>{blogText.description}</Text>
              <Text mt="30px" fontSize={"16px"}>
                {blogText.authordate}
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex> */}
    </>
  )
}
export default Blog
