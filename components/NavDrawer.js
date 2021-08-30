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
import Social from 'components/Social';

import styled from '@emotion/styled';
import {
  AiOutlineBook,
  AiOutlineFontSize,
  AiOutlineForm,
  AiOutlineRollback,
} from 'react-icons/ai';
const NavDrawer = ({ onClose, isOpen }) => {
  const BlurredDrawer = styled(DrawerContent)`
    backdrop-filter: blur(10px);
  `;

  return (
    <Drawer isOpen={isOpen} placement='top' onClose={onClose} isFullHeight>
      <DrawerOverlay bg={useColorModeValue('bgLightOpacity', 'bgDarkOpacity')}>
        <BlurredDrawer
          w='3xl'
          bg={useColorModeValue('bgLightOpacity', 'bgDarkOpacity')}
          m='0 auto'
          px={{ base: '4', md: '12' }}
          py={7}
          shadow='none'
        >
          <IconButton
            alignSelf='flex-end'
            boxShadow='outlineShadow'
            onClick={onClose}
            icon={<TriangleUpIcon />}
            aria-label='Close Navigation'
          />

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
        </BlurredDrawer>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavDrawer;
