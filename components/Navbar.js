import { Flex, Button, Box, Spacer, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import { useState } from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const bgColor = useColorModeValue('bgLightOpacity', 'bgDarkOpacity');

  const Nav = styled(Flex)`
    backdrop-filter: blur(20px);
  `;
  return (
    <Nav
      py={5}
      as='nav'
      bg={bgColor}
      direction='row'
      position='sticky'
      top='0'
      w='100%'
    >
      <Link href='/'>
        <Button variant='outline' size='sm' as='a'>
          WS
        </Button>
      </Link>
      <Spacer />
      <HStack spacing={[1, 2, 3, 4]}>
        <Link href='/blog/first-post'>
          <Button variant='outline' size='sm' as='a'>
            First post
          </Button>
        </Link>
        <Link href='/reading'>
          <Button variant='outline' size='sm' as='a'>
            Home
          </Button>
        </Link>
        <Link href='/reading'>
          <Button variant='outline' size='sm' as='a'>
            Home
          </Button>
        </Link>
        <DarkModeSwitch />
      </HStack>
    </Nav>
  );
};

export default Navbar;
