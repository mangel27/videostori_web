import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import { BiMobileAlt } from 'react-icons/bi';
import { FaRegObjectGroup,FaChartBar } from 'react-icons/fa';
import { MdOutlineGroups3,MdOutlineScreenSearchDesktop } from 'react-icons/md';

export default function FeatureSection() {
  return (
    <Box className='hidden' bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} py={10} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 10, md: 20 }}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Box>
                <Text fontSize={'3xl'} color={'white'} fontWeight='bold'>
                  Why You Should Create Interactive Videos ?
                </Text>
              </Box>
              {stats.map((stat) => (
                <Box display={'flex'} key={stat.title}>
                  <Icon
                    cursor={"pointer"}
                    as={stat.icon}
                    boxSize={55}
                    fill="white"
                  />
                  <Flex direction={'column'} mx={5}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'xl'}
                    color={'white'}
                    fontWeight="bold"
                    mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'sm'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: 'Boosts engagement',
    icon: FaRegObjectGroup,
    content: (
      <>

        Boosts engagement
        Interactive video provides viewers with a unique and engaging experience that encourages active participation, leading to higher engagement rates and better retention
      </>
    ),
  },
  {
    title: 'Drives conversions',
    icon: FaChartBar,
    content: (
      <>
        By integrating calls-to-action and other interactive elements, interactive video can help to drive more conversions and improve the ROI of your marketing efforts
      </>
    ),
  },
  {
    title: 'Provides valuable data',
    icon: BiMobileAlt,
    content: (
      <>
        Interactive video can provide valuable data on viewer behavior and engagement, allowing marketers to optimize their strategies and drive better results
      </>
    ),
  },
  {
    title: 'Improves brand awareness',
    icon: MdOutlineGroups3,
    content: (
      <>
        Interactive video provides a unique opportunity to showcase your brand and tell your story in a more engaging and memorable way
      </>
    ),
  },
  {
    title: 'Enhances user experience',
    icon: MdOutlineScreenSearchDesktop,
    content: (
      <>
        Interactive video can enhance the user experience by providing a more personalized and immersive experience that allows viewers to control their own journey
      </>
    ),
  },
];