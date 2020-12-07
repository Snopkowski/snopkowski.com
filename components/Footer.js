import { Flex, Link, Stack, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex
      as='footer'
      direction='column'
      align='center'
      justifySelf='flex-end'
      py={5}
    >
      <Stack direction='row' spacing={5}>
        <Link href='https://twitter.com/' isExternal>
          Twitter
        </Link>
        <Link href='https://twitter.com/' isExternal>
          Github
        </Link>
        <Link href='https://twitter.com/' isExternal>
          Contact
        </Link>
      </Stack>
      <Text pt={5} alignSelf='flex-start'>
        &copy; Wojciech Snopkowski | Code is on github....
      </Text>
    </Flex>
  );
}

export default Footer;
