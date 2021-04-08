import { getAllPostsForHome } from '@/lib/api';
import { Heading, Stack, Text, Box } from '@chakra-ui/layout';
import NextLink from 'next/link';
import Image from 'next/image';
export default function BlogPage(props) {
  const posts = props.data;

  return (
    <Stack spacing={4}>
      <Heading as='h1'>Articles</Heading>
      <Text opacity='50%'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ipsam
        mollitia doloremque.
      </Text>
      <Stack py={8} spacing={6}>
        {posts.map((post) => (
          <NextLink key={post.slug} passHref href={`blog/${post.slug}`}>
            <Box px={{ base: '2', md: '8' }} cursor='pointer'>
              <Heading fontSize={{ base: 'lg', md: '4xl' }} key={post.title}>
                {post.title}
              </Heading>
              <Text opacity='50%'>{post.excerpt}</Text>
            </Box>
          </NextLink>
        ))}
      </Stack>
    </Stack>
  );
}

export async function getStaticProps() {
  const data = await getAllPostsForHome();
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}