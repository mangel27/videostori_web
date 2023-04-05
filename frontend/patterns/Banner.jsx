import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Heading,
} from "@chakra-ui/react";
const Banner = ({ title, breadcrumb }) => {
  return (
    <Center
      flexDirection="column"
      p={["5vw", "10vw"]}
      mx="auto"
      h={["40vh", "50vh"]}
      bg="light_bg.blue"
    >
      <Heading textAlign="center" mx="auto">
        {title}
      </Heading>
      {breadcrumb && (
        <Breadcrumb
          w="100%"
          mt="1em"
          mx="auto"
          textAlign={"center"}
          sx={{ ol: { flexWrap: "wrap", justifyContent: "center" } }}
        >
          {breadcrumb.map((item, index) => {
            return (
              <BreadcrumbItem
                color="text.base"
                isCurrentPage={item.isCurrentPage}
                key={index + item.link}
              >
                <BreadcrumbLink whiteSpace="nowrap" href={item.link}>
                  {item.text}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
      )}
    </Center>
  );
};

export default Banner;
