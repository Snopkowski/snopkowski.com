import { Heading, Text, Box, Link, Stack } from '@chakra-ui/react';
import { getAllPostsForHome } from '@/lib/api';
import Image from 'next/image';

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
      <Image src='/IndexIMG.jpg' width={6000} height={4000} />
      <Stack px={{ base: '2', md: '4' }} spacing={4}>
        <Heading>Projects</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          voluptatem eum atque porro distinctio animi totam doloremque nulla
          pariatur perspiciatis!
        </Text>
        <Heading>Stack</Heading>
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
export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
