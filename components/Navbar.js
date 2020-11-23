import { Flex, Button, Stack, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import { useState } from 'react';
import styled from '@emotion/styled';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const Nav = styled(Flex)`
    backdrop-filter: blur(10px);
  `;

  return (
    <Nav
      py={5}
      as='nav'
      direction='row'
      w='100%'
      pos='sticky'
      top='0'
      px={5}
      justifyContent='space-between'
    >
      <Link href='/'>
        <Button variant='outline' size='sm' as='a'>
          HI
        </Button>
      </Link>

      <Stack
        display={{ base: show ? 'flex' : 'none', md: 'flex' }}
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
      <IconButton
        size='md'
        display={{ base: 'flex', md: 'none' }}
        onClick={handleToggle}
        justify='flex-end'
        aria-label='Toggle Navigation'
        onClickCapture={
          show
            ? (e) => clearAllBodyScrollLocks(e.currentTarget)
            : (e) => disableBodyScroll(e.currentTarget)
        }
        icon={show ? <ChevronUpIcon /> : <ChevronDownIcon />}
      />
    </Nav>
  );
};

export default Navbar;
