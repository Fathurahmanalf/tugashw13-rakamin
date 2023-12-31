import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";
 


export default function Homepage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (
  <VStack
    w="100%"
    align="center"
    justify="center"
    p={8}
    bgGradient="linear(to-r, blue.400, blue.200)"
    color="white"
    borderRadius="md"
    boxShadow="xl"
    spacing={4}
  >
    <Box fontSize="2xl" fontWeight="bold">
      Explore our Collection
    </Box>
    <Flex w="100%" justify="center" flexWrap="wrap">
      {books?.books?.map((book) => (
        <Box
          key={book.id}
          maxW="300px"
          borderRadius="md"
          boxShadow="md"
          p={4}
          bg="blue.500"
          color="white"
          m={4}
        >
          <Books {...book} />
        </Box>
      ))}
    </Flex>
  </VStack>
  
  );
}
