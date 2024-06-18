import { Box, Text, Heading, VStack, Flex } from '@chakra-ui/react';

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About Contextual News Retrieval</Heading>
      <Text fontSize="lg" mb={6}>This application provides contextually relevant and thematically organized news articles based on user queries.</Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <Text ml={2}>User Query Analysis using NLP</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Contextual Theme Identification</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>News Source Integration</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Relevance Scoring and Sorting</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Meta-Contextual Layer</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>User Feedback Loop</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default About;