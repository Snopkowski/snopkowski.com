import { getReadingList } from '@/lib/api';

import {
  Heading,
  LinkBox,
  List,
  ListItem,
  Text,
  LinkOverlay,
  Box,
  Stack,
  Center,
  Spacer,
  Divider,
  Link,
  Flex,
  SimpleGrid,
} from '@chakra-ui/layout';
import { outline } from '@chakra-ui/styled-system';
import NextLink from 'next/link';
export default function Reading(props) {
  const list = props.readingList;
  return (
    <Stack spacing={4}>
      <Heading as='h1'>Reading list</Heading>
      <Text opacity='50%'>Not limited to programming</Text>
      <List py={8} spacing={6}>
        {list.map((item) => {
          return (
            <NextLink
              passHref
              href={item.source}
              display='flex'
              key={item.title}
            >
              <Flex
                px={{ base: '2', md: '8' }}
                direction='column'
                outlineColor='red.300'
                as='a'
              >
                <Flex py={4}>
                  <Heading fontSize={{ base: 'lg', md: '4xl' }}>
                    {item.title}
                  </Heading>
                  <Spacer />
                  <Box
                    gridTemplateColumns={1}
                    fontSize={{ base: 'sm', md: 'lg' }}
                    opacity='50%'
                    px={{ base: '2', md: '10' }}
                    alignContent='center'
                  >
                    {item.type}
                  </Box>
                </Flex>
                <Text opacity='50%'>{item.description}</Text>
              </Flex>
            </NextLink>
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
