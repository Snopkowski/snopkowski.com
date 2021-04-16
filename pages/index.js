import {
  Heading,
  Text,
  Box,
  Link,
  List,
  ListItem,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react';
import { getAllPostsForHome } from '@/lib/api';

export default function Index({ allPosts }) {
  return (
    <Stack spacing={4}>
      <Heading as='h1' size='2xl' fontWeight='bold'>
        Hi, I'm Wojciech Snopkowski
      </Heading>
      <Text pb={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem
        eum atque porro distinctio animi totam doloremque nulla pariatur
        perspiciatis!
      </Text>
      <Stack px={{ base: '2', md: '4' }} spacing={4}>
        <Heading>Projects</Heading>
        <Stack spacing={4}>
          <Box
            borderRadius='md'
            border='1px solid gray'
            p={{ base: '2', md: '4' }}
          >
            <Heading as='h3' fontSize='2xl'>
              Wifes' blog
            </Heading>
            <Text>
              Blog made with Gatsby, Contentful as a CMS, instant search
              provided by Algolia and Styled Components mixed up with
              typography.js
            </Text>
          </Box>
          <Box
            borderRadius='md'
            border='1px solid gray'
            p={{ base: '2', md: '4' }}
          >
            <Heading as='h3' fontSize='2xl'>
              Jokes
            </Heading>
            <Text>Dev to clone made with Next.js, Firebase and Chakra UI.</Text>
          </Box>
          <Box
            borderRadius='md'
            border='1px solid gray'
            p={{ base: '2', md: '4' }}
          >
            <Heading as='h3' fontSize='2xl'>
              Small business website
            </Heading>
            <Text>Website for a small business made with Next.js</Text>
          </Box>
        </Stack>
        <Heading>Tech stack</Heading>
        <Text>Strong opinions.. losely held</Text>
        <Heading>Something else</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          voluptatem eum atque porro distinctio animi totam doloremque nulla
          pariatur perspiciatis!
        </Text>
      </Stack>
    </Stack>
  );
}
