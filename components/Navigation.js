import {
  useDisclosure,
  Button,
  Flex,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { TriangleDownIcon } from '@chakra-ui/icons';
import NavDrawer from './NavDrawer';
import styled from '@emotion/styled';
import DarkModeSwitch from './DarkModeSwitch';
const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Nav = styled(Flex)`
    backdrop-filter: blur(10px);
    z-index: 10;
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
      bg={useColorModeValue('bgLightOpacity', 'bgDarkOpacity')}
    >
      <Link href='/'>
        <Button size='sm' as='a'>
          HI
        </Button>
      </Link>
      <Box>
        <DarkModeSwitch />
        <Button ml={4} onClick={onOpen}>
          <TriangleDownIcon />
        </Button>
      </Box>
      <NavDrawer onClose={onClose} isOpen={isOpen} />
    </Nav>
  );
};

export default Navigation;
