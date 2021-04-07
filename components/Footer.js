import { Stack, Text } from '@chakra-ui/react';
import Social from './Social';

function Footer() {
  return (
    <Stack
      as='footer'
      justifyContent='space-between'
      spacing={8}
      w='100%'
      py={8}
      px={{ base: '4', md: '8' }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Social />
      <Text textAlign='start' fontSize='sm'>
        &copy; Wojciech Snopkowski
      </Text>
    </Stack>
  );
}

export default Footer;
