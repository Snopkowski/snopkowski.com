import { Divider, Stack, Text, Spacer, Link } from '@chakra-ui/react';
import Social from 'components/Social';

function Footer() {
  return (
    <Stack as='footer' spacing={8} w='100%' py={8} px={{ base: '4', md: '16' }}>
      <Divider />
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Social />
        <Spacer />
        <Text fontSize='sm'>&copy; Wojciech Snopkowski</Text>
      </Stack>
    </Stack>
  );
}

export default Footer;
