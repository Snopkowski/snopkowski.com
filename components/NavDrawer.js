import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { TriangleUpIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Social from './Social';

import styled from '@emotion/styled';
import { FaHome, FaBook, FaPen, FaEnvelope } from 'react-icons/fa';
const NavDrawer = ({ onClose, isOpen }) => {
  const BlurredDrawer = styled(DrawerContent)`
    backdrop-filter: blur(10px);
  `;

  return (
    <Drawer isOpen={isOpen} placement='top' onClose={onClose} isFullHeight>
      <DrawerOverlay bg={useColorModeValue('bgLightOpacity', 'bgDarkOpacity')}>
        <BlurredDrawer
          w='4xl'
          bg={useColorModeValue('bgLightOpacity', 'bgDarkOpacity')}
          m='0 auto'
          px={5}
          py={7}
          shadow='none'
        >
          <IconButton
            alignSelf='flex-end'
            boxShadow='outlineShadow'
            onClick={onClose}
            icon={<TriangleUpIcon />}
          />

          <DrawerBody
            display='flex'
            justifyContent='center'
            alignItems='flex-start'
            flexDirection='column'
          >
            <Link href='/'>
              <Button
                leftIcon={<FaHome />}
                fontSize='3xl'
                p={8}
                my={4}
                onClick={onClose}
              >
                <a>Home</a>
              </Button>
            </Link>
            <Link href='/reading'>
              <Button
                leftIcon={<FaBook />}
                fontSize='3xl'
                p={8}
                my={4}
                onClick={onClose}
              >
                <a>Reading List</a>
              </Button>
            </Link>
            <Link passHref href='/blog/hello'>
              <Button
                leftIcon={<FaPen />}
                fontSize='3xl'
                p={8}
                my={4}
                onClick={onClose}
              >
                <a>Blog</a>
              </Button>
            </Link>
            <Link href='/reading'>
              <Button
                leftIcon={<FaEnvelope />}
                fontSize='3xl'
                p={8}
                my={4}
                onClick={onClose}
              >
                <a>Contact</a>
              </Button>
            </Link>
          </DrawerBody>

          <DrawerFooter mb={['10vh', '0']}>
            <Social />
          </DrawerFooter>
        </BlurredDrawer>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavDrawer;
