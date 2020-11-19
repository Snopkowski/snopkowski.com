import { Flex, Link, Stack, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
function Footer() {
  return (
    <Stack
      as='footer'
      direction='column'
      align='center'
      justifySelf='flex-end'
      py={5}
    >
      <Stack direction='row' spacing={5}>
        <Link href='https://twitter.com/' isExternal>
          Twitter <ExternalLinkIcon />
        </Link>
        <Link href='https://twitter.com/' isExternal>
          Twitter <ExternalLinkIcon />
        </Link>
        <Link href='https://twitter.com/' isExternal>
          Twitter <ExternalLinkIcon />
        </Link>
      </Stack>
      <Text fontSize='sm'>&copy; Wojciech Snopkowski</Text>
    </Stack>
  );
}

export default Footer;
