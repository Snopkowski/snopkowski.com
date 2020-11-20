import { Flex, Button, Spacer, Stack, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import { useState } from 'react';
import styled from '@emotion/styled';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const Nav = styled(Flex)`
    backdrop-filter: blur(12px);
  `;
  return (
    <Nav
      py={5}
      as='nav'
      direction='row'
      w='100%'
      maxW='2xl'
      pos='sticky'
      top='0'
    >
      <Link href='/'>
        <Button variant='outline' size='sm' as='a'>
          HI
        </Button>
      </Link>
      <Spacer display={{ base: 'none', md: 'block' }} />
      <Stack
        display={{ base: show ? 'flex' : 'none', md: 'flex' }}
        width={{ base: '100%', md: 'auto' }}
        grow='1'
        spacing={[1, 2, 3, 4]}
        direction={{ base: 'column', md: 'row' }}
        h={{ base: '100vh', md: 'auto' }}
        pt={{ base: '20%', md: '0' }}
      >
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
      </Stack>
      <Button
        size='sm'
        display={{ base: 'flex', md: 'none' }}
        onClick={handleToggle}
        justify='flex-end'
      >
        {show ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Button>
    </Nav>
  );
};

export default Navbar;
