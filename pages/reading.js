import SEO from '@/components/SEO';
import { getReadingList } from '@/lib/api';

import {
  Heading,
  List,
  Text,
  Box,
  Stack,
  Spacer,
  Link,
  Flex,
} from '@chakra-ui/layout';
export default function Reading(props) {
  const list = props.readingList;
  return (
    <Stack spacing={4}>
      <SEO title='Reading list' />
      <Heading as='h1' size='2xl'>
        Reading list
      </Heading>
      <Text>Not limited to programming</Text>
      <List as='ul' py={8} spacing={6}>
        {list.map((item) => {
          return (
            <Flex
              px={{ base: '2', md: '4' }}
              direction='column'
              outlineColor='red.300'
              key={item.title}
              as='li'
            >
              <Link
                href={item.source}
                _hover={{ textUnderline: 'none' }}
                isExternal
              >
                <Flex py={2}>
                  <Heading fontSize={{ base: 'lg', md: '3xl' }}>
                    {item.title}
                  </Heading>
                  <Spacer />
                  <Box
                    gridTemplateColumns={1}
                    fontSize={{ base: 'sm', md: 'lg' }}
                    px={{ base: '2', md: '10' }}
                    alignContent='center'
                    as='p'
                  >
                    {item.type}
                  </Box>
                </Flex>
                <Text maxWidth={{ base: '90%', md: '80%' }}>
                  {item.description}
                </Text>
              </Link>
            </Flex>
          );
        })}
      </List>
    </Stack>
  );
}

export async function getStaticProps() {
  const readingList = await getReadingList();
  return {
    props: {
      readingList,
    },
    revalidate: 60,
  };
}
