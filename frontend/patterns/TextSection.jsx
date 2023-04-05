import { Flex, Heading, Text } from "@chakra-ui/react"
import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"
const TextSection = (props) => {
  const { title, content } = props
  const markdowntheme = {
    p: (props) => {
      const { children } = props
      return (
        <Text variant="body" my="1em">
          {children}{" "}
        </Text>
      )
    },

    a: (props) => {
      const { children } = props
      return <a style={{ color: "red", cursor: "pointer" }}>{children}</a>
    },
  }
  return (
    <Flex
      pos="relative"
      h="100%"
      bg="cardBackground"
      direction={"column"}
      textAlign="left"
      justifyContent="space-around"
      {...props}
    >
      {title && (
        <Heading variant={"headLine"} my="1em">
          {title}
        </Heading>
      )}
      <ReactMarkdown
        skipHtml={false}
        components={ChakraUIRenderer(markdowntheme)}
      >
        {content}
      </ReactMarkdown>
    </Flex>
  )
}
export default TextSection
