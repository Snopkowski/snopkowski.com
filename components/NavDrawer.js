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
import { FaHome, FaBook, FaPen, FaEnvelope } from 'react-icons/FA';
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
            flexDirection='column'
          >
            <Link href='/'>
              <Button
                leftIcon={<FaHome />}
                fontSize='4xl'
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
                fontSize='4xl'
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
                fontSize='4xl'
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
                fontSize='4xl'
                p={8}
                my={4}
                onClick={onClose}
              >
                <a>Contact</a>
              </Button>
            </Link>
          </DrawerBody>

          <DrawerFooter mb={['10vh', '0']}>I'm a footer</DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavDrawer;
