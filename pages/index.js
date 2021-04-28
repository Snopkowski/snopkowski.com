import {
  Heading,
  Text,
  Box,
  Stack,
  SimpleGrid,
  GridItem,
  ListIcon,
  List,
  ListItem,
} from '@chakra-ui/react';

import {
  SiNextDotJs,
  SiReact,
  SiJavascript,
  SiGatsby,
  SiTailwindcss,
} from 'react-icons/si';
import { AiOutlineCheckCircle } from 'react-icons/ai';
export default function Index({ allPosts }) {
  const technologies = [
    'JavaScript',
    'React',
    'Next.js',
    'Gatsby',
    'Sass',
    'Chakra UI',
    'Styled components',
    'Tailwind CSS',
    'Firebase',
    'Supabase',
  ];
  return (
    <Stack spacing={4}>
      <Heading as='h1' size='2xl' fontWeight='bold'>
        Hi, I'm Wojciech Snopkowski
      </Heading>
      <Text pb={2}>
        I'm a Birmingham-based web developer, and I enjoy creating performant
        things that live on the Internet. Currently open for an impactful role
        in the industry.
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
              Blog made with React, Gatsby, Contentful as a Headless CMS,
              instant search provided by Algolia and Styled Components mixed up
              with typography.js
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
            <Text>
              Website made with React, Next.js, Firebase and Chakra Ui. Feel
              free to submit your own.
            </Text>
          </Box>
          <Box
            borderRadius='md'
            border='1px solid gray'
            p={{ base: '2', md: '4' }}
          >
            <Heading as='h3' fontSize='2xl'>
              Small business website
            </Heading>
            <Text>
              Website for a small business made with React, Next.js, Chakra Ui.
              Form handled by Sendgrid. Hosted on Vercel. Feels like bringing a
              gun into a swordfight.
            </Text>
          </Box>
        </Stack>
        <Heading>My toolbox</Heading>
        <Text>Here are a few technologies I've been working with lately</Text>
        <List spacing={2}>
          {technologies.map((technology) => (
            <ListItem key={technology}>
              <ListIcon as={AiOutlineCheckCircle} color='green.400' />
              {technology}
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  );
}
