import React from "react";
import { Text, SimpleGrid, Center, Heading, Box, Circle, Stack, VStack} from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";

const CARDS = [
  {
    id: "Card1",
    number: "01",
    heading: "Lead Generation",
    paragraph:
      "Generate Leads directly through the Video. No more need for the customer to remember the Call to Action preventing fall-offs.",
  },
  {
    id: "Card2",
    number: "02",
    heading: "Shoppable Video",
    paragraph:
      "Type of interactive video that allows viewers to make purchases directly from the video itself",
  },
  {
    id: "Card3",
    number: "03",
    heading: "Personalization",
    paragraph:
      "Create interactive video content to meet the specific needs and preferences of individual viewers.",
  },
  {
    id: "Card4",
    number: "04",
    heading: "Gamification",
    paragraph:
      "Gamification refers to the integration of game elements and mechanics on the video to increase engagement and interaction",
  },
  {
    id: "Card5",
    number: "05",
    heading: "App Acquisition",
    paragraph:
      "acquiring new users to mobile app through various marketing activities.",
  },
  {
    id: "Card6",
    number: "06",
    heading: "Survey Quiestions",
    paragraph:
      "Conduct a survey or take feedback from the customers directly on the video in a new exciting format",
  },
];

const InteractSection = (props) => {
  return (
    <>
      <Box h="auto" bg="#fff" px={10} py={10} className='hidden'>
        <Box py={20}>
          <Center>
            <Heading
              color="#1b1f2e"
              mb={5}
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              Interactive Video on Videostori
            </Heading>
          </Center>
        </Box>

        <SimpleGrid
          columns={[1, 6]}
          spacing={0}
          bgImage="url('http://web.msdi.in/wp-content/uploads/2022/12/work-process-line.png')"
          bgRepeat="no-repeat"
        >
          {CARDS.map((item, index) => {
            return (
              <Box
                key={item?.id}
                p={[0, 6]}
                py={30}
                _hover={{ div: { color: "#2D2727"} }}
                transform={index % 2 === 1 ? (index === 1 ? "translateY(25px)" : "translateY(-35px)") : ""}
              >
                <Stack pb={8} alignItems={["right", "center"]}>
                  <Circle
                    size="80px"
                    border="10px solid white"
                    boxShadow="2xl"
                    bg="#f7f7f9"
                    color="#f54444"
                  >
                    <Text fontSize="30px" fontWeight="bold">
                      {item?.number}
                    </Text>
                  </Circle>
                </Stack>

                <Stack
                  borderRadius="5px"
                  w={["auto", 200]}
                  p={5}
                  bg="#f7f7f9"
                  _hover={{ bg: "#f54444", color: "#fff" }}
                  position="relative"
                >
                  <VStack
                    color="#1b1f2e"
                    as="a"
                    _hover={{ color: "#fff" }}
                  >
                    <Text fontSize="18px" my={5} fontWeight="bold">
                      {item?.heading}
                    </Text>
                    <Text fontSize="16px">
                      {item?.paragraph}
                    </Text>
                  </VStack>
                  <Box position="absolute" top="-30px">
                    <TriangleUpIcon  color="#f54444" w={8} h={8} />
                  </Box>
                </Stack>
                
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default InteractSection;
