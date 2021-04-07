import { Heading, Text, Link, Stack } from '@chakra-ui/react';
import { getAllPostsForHome } from '@/lib/api';

export default function Index({ allPosts }) {
  return (
    <Stack spacing={5}>
      <Heading as='h1' size='3xl' fontWeight='300'>
        Hi, I'm Wojciech Snopkowski
      </Heading>
      <Text>To be populated on friday</Text>
    </Stack>
  );
}
export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
