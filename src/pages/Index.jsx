import { Container, Text, VStack, Input, Box, Heading, Flex, Link } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);

  const searchArticles = async () => {
    const apiKey = 'YOUR_API_KEY';
    const searchUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    const response = await fetch(searchUrl);
    const data = await response.json();
    const sortedArticles = data.articles.sort((a, b) => b.relevance - a.relevance);
    setArticles(sortedArticles);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Contextual News Retrieval</Heading>
        <Input 
          placeholder="Search for articles..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && searchArticles()}
        />
        <Box w="100%">
          {articles.map((article, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg" mb={4}>
              <Heading as="h2" size="md">{article.title}</Heading>
              <Text>{article.description}</Text>
              <Link href={article.url} color="teal.500" isExternal>Read more</Link>
            </Box>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;