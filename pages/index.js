import { Heading, Text, Link, Stack } from '@chakra-ui/react';
import { getAllPostsForHome } from '@/lib/api';

export default function Index({ allPosts }) {
  return (
    <Stack spacing={4}>
      <Heading as='h1' size='2xl' fontWeight='bold'>
        Hi, I'm Wojciech Snopkowski
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem
        eum atque porro distinctio animi totam doloremque nulla pariatur
        perspiciatis!
      </Text>
      <Stack p={4} spacing={4}>
        <Heading>Stack</Heading>
        <Text>Strong opinions.. losely held</Text>
        <Heading>Projects</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          voluptatem eum atque porro distinctio animi totam doloremque nulla
          pariatur perspiciatis!
        </Text>
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
export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
