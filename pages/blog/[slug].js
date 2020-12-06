import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import { useRouter } from 'next/router';
import Head from 'next/head';
import PostBody from '../../components/PostBody';
import { Stack } from '@chakra-ui/react';
export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      {/* <Header /> */}
      {router.isFallback ? (
        <h1>Loading Maja…</h1>
      ) : (
        <>
          <Stack as='article' spacing={20}>
            <Head>
              <title>{post.title} | Snopkowski.com</title>
              {/* <meta property="og:image" content={post.ogImage.url} /> */}
            </Head>
            <div>
              <h1>{post.title}</h1>
            </div>
            <PostBody content={post.content} />
          </Stack>
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </>
      )}
    </div>
  );
}

// const query = `*[_type == "post"]{
//     ...,
//     body[]{
//       ...,
//       markDefs[]{
//         ...,
//         _type == "internalLink" => {
//           "slug": @.reference->slug
//         },
//       }
//     }
//   }`;

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      //   morePosts: data?.morePosts || null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
