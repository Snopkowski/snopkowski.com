import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Button,
  Link as ChakraLink,
  IconButton,
} from '@chakra-ui/react';
import { TriangleUpIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const NavDrawer = ({ onClose, isOpen }) => {
  return (
    <Drawer isOpen={isOpen} placement='top' onClose={onClose} isFullHeight>
      <DrawerOverlay bg={useColorModeValue('bgLightOpacity', 'bgDarkOpacity')}>
        <DrawerContent
          w='4xl'
          bg={useColorModeValue('bgLight', 'bgDark')}
          m='0 auto'
          px={5}
          py={7}
        >
          <IconButton
            alignSelf='flex-end'
            boxShadow='outlineShadow'
            onClick={onClose}
            icon={<TriangleUpIcon />}
          />
          <DrawerHeader>hi</DrawerHeader>

          <DrawerBody>
            <ChakraLink fontSize='2xl' onClick={onClose}>
              <Link passHref href='/blog/hello'>
                <a>Hello Blog</a>
              </Link>
            </ChakraLink>
            <ChakraLink fontSize='2xl' onClick={onClose}>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </ChakraLink>
          </DrawerBody>

          <DrawerFooter mb={['20vh', '0']}>I'm a footer</DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavDrawer;
