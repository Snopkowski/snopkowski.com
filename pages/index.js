import {
  Heading,
  Text,
  Box,
  Stack,
  ListIcon,
  List,
  Flex,
  Spacer,
  ListItem,
  IconButton,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

import {
  AiOutlineCheckCircle,
  AiOutlineGithub,
  AiOutlineLink,
} from 'react-icons/ai';
import { getProjects } from '@/lib/api';
export default function Index({ projects } = props) {
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
          {projects.map((project) => (
            <Box
              borderRadius='md'
              border='1px solid'
              borderColor={useColorModeValue('gray.200', 'whiteAlpha.300')}
              p={4}
              key={project.title}
            >
              <Flex pb={2}>
                <Heading as='h3' fontSize='2xl'>
                  {project.title}
                </Heading>
                <Spacer />
                {project.github && (
                  <IconButton
                    as={Link}
                    href={project.github}
                    variant='outline'
                    aria-label='visit github'
                    icon={<AiOutlineGithub />}
                  />
                )}
                {project.demo && (
                  <IconButton
                    as={Link}
                    href={project.demo}
                    variant='outline'
                    aria-label='visit demo'
                    icon={<AiOutlineLink />}
                  />
                )}
              </Flex>
              <Text>{project.description}</Text>
            </Box>
          ))}
        </Stack>
        <Heading>Toolbox</Heading>
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
export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
}
