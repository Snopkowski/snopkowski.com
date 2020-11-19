import { Flex, Button, Box, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

const Navbar = () => {
  return (
    <Flex as='nav' direction='row' w='100%'>
      <Link href='/'>
        <Button as='a'>Home</Button>
      </Link>
      <Spacer />
      <Box>
        <Link href='/blog/first-post'>
          <Button as='a'>First post</Button>
        </Link>
        <Link href='/'>
          <Button as='a'>Home</Button>
        </Link>
        <Link href='/'>
          <Button as='a'>Home</Button>
        </Link>
        <DarkModeSwitch />
      </Box>
    </Flex>
  );
};

export default Navbar;
