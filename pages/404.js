import NextLink from "next/link";
import {
  Box,
  Heading,
  Container,
  Button,
  Image
} from "@chakra-ui/react";



const NotFound = () => {
  return (
    <Container>
      <Box align="center" mt={20}>
        <Image alt="notfound" src="/images/bak.png" width={360} height={330} />
       <Heading fontFamily="sans-serif" fontSize="2xl" fontWeight="bold">嚄...好像迷路囉？</Heading>
       <Heading fontFamily="sans-serif" fontSize="1xl">您所搜尋的資訊不存在亦或無訪問權限。</Heading>  
</Box>
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="gray">返回主頁</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
