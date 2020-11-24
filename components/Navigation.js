import {
  useDisclosure,
  Button,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NavDrawer from './NavDrawer';
import styled from '@emotion/styled';
const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Nav = styled(Flex)`
    backdrop-filter: blur(20px);
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
      <Button onClick={onOpen}>
        <ChevronDownIcon />
      </Button>
      <NavDrawer onClose={onClose} isOpen={isOpen} />
    </Nav>
  );
};

export default Navigation;
