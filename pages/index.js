import {
  Container,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Badge,
  Text,
  Code,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

const Home = () => (
  <Container>
    <Box mt={10} mb={6} p={6}>
      <Badge mt={4} mb={5}>
        關於
      </Badge>
      <Stat mt={3} mb={5}>
        <StatLabel>我是</StatLabel>
        <StatNumber>SUNN</StatNumber>
        <StatHelpText>( 自動化開發 / 平面設計 )</StatHelpText>
      </Stat>

      <Text fontSize="md" mb={3}>
        I&lsquo;m 來自中國大陸的高中生!
      </Text>
      <Text fontSize="md" mb={3}>
        站點創建於 <Code> 二月二日 </Code>, 專注於藝術創作
      </Text>
    </Box>

    <Box
      mt={10}
      mb={6}
      p={6}
      bg={useColorModeValue("#edf2f780", "#2d2d2d")}
      borderRadius="lg"
    >
      <Badge mt={8} mb={14}>
        喜好
      </Badge>
      <UnorderedList>
        <ListItem mt={3}>Linux, 尤其是Archlinux</ListItem>
        
    
      </UnorderedList>
    </Box>

    <Box
      mt={10}
      mb={6}
      p={6}
      bg={useColorModeValue("#edf2f780", "#2d2d2d")}
      borderRadius="lg"
    >
      <Badge mt={4} mb={7}>
        我的朋友們
      </Badge>
      <UnorderedList>
        <ListItem mt={3}>
          <Link href="https://chakra-blog.vercel.app/" isExternal>
            Willie Xu
          </Link>
        </ListItem>
        <ListItem mt={3}>
          <Link href="https://anillc.cn" isExternal>
            Anillc
          </Link>
        </ListItem>
        <ListItem mt={3}>
          <Link href="https://www.chinq.xyz" isExternal>
            CHINQ
          </Link>
        </ListItem>
        <ListItem mt={3}>
          <Link href="https://ncdwlq.space" isExternal>
            NCDWLQ
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  </Container>
);

export default Home;
