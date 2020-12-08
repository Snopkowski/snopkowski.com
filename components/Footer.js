import { Flex, Link, Stack, Text } from '@chakra-ui/react';
import Social from './Social';

function Footer() {
  return (
    <Flex
      as='footer'
      // direction='column'
      align='center'
      justifyContent='space-between'
      py={5}
      w='100%'
    >
      <Text fontSize='sm'>&copy; Wojciech Snopkowski</Text>
      <Social />
    </Flex>
  );
}

export default Footer;
