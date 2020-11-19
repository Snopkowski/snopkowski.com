import { Flex, Button, Box, Spacer, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Flex py={5} as='nav' direction='row' w='100%'>
      <Link href='/'>
        <Button as='a'>Home</Button>
      </Link>
      <Spacer />
      <HStack spacing={[1, 2, 3, 4]}>
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
      </HStack>
    </Flex>
  );
};

export default Navbar;
