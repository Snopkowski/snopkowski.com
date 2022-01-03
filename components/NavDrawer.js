import {
  Drawer,
  Box,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  IconButton,
  Button,
  Flex,
} from '@chakra-ui/react';
import { TriangleUpIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Social from 'components/Social';

import {
  AiOutlineBook,
  AiOutlineFontSize,
  AiOutlineForm,
  AiOutlineRollback,
} from 'react-icons/ai';

const NavDrawer = ({ onClose, isOpen }) => {
  return (
    <Drawer isOpen={isOpen} placement='top' onClose={onClose} isFullHeight>
      <DrawerOverlay bg={useColorModeValue('bgLight', 'bgDark')}>
        <DrawerContent
          w='3xl'
          bg={useColorModeValue('bgLight', 'bgDark')}
          backdropFilter='auto'
          backdropBlur='16px'
          m='0 auto'
          px={{ base: '4', md: '12' }}
          py={4}
          shadow='none'
        >
          <Flex w='100%' justifyContent='space-between' py={2}>
            <Link passHref href='/'>
              <Button aria-label='Homepage' onClick={onClose}>
                WS
              </Button>
            </Link>
            <IconButton
              alignSelf='flex-end'
              boxShadow='outlineShadow'
              onClick={onClose}
              icon={<TriangleUpIcon />}
              aria-label='Close Navigation'
            />
          </Flex>
          <DrawerBody
            display='flex'
            justifyContent='center'
            alignItems='flex-start'
            flexDirection='column'
          >
            <Link href='/'>
              <Button
                leftIcon={<AiOutlineRollback />}
                iconSpacing={4}
                fontSize='2xl'
                p={8}
                my={4}
                onClick={onClose}
              >
                Home
              </Button>
            </Link>
            <Link href='/reading'>
              <Button
                leftIcon={<AiOutlineBook />}
                iconSpacing={4}
                fontSize='2xl'
                p={8}
                my={4}
                onClick={onClose}
              >
                Reading List
              </Button>
            </Link>
            <Link passHref href='/blog'>
              <Button
                leftIcon={<AiOutlineFontSize />}
                iconSpacing={4}
                fontSize='2xl'
                p={8}
                my={4}
                onClick={onClose}
              >
                Blog
              </Button>
            </Link>
            <Link href='/contact'>
              <Button
                leftIcon={<AiOutlineForm />}
                iconSpacing={4}
                fontSize='2xl'
                p={8}
                my={4}
                onClick={onClose}
              >
                Contact
              </Button>
            </Link>
          </DrawerBody>
          <DrawerFooter
            alignSelf={{ base: 'center', md: 'end' }}
            mb={['10vh', '0']}
          >
            <Social />
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavDrawer;
