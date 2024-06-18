import { Box, Text, Heading, VStack, Flex } from '@chakra-ui/react';

const Contact = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>Contact Us</Heading>
      <Text fontSize="lg" mb={6}>For any inquiries or feedback, please reach out to us at contact@newsretrieval.com.</Text>
    </Flex>
  </Box>
);

export default Contact;