import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';

const NavDrawer = ({ onClose, isOpen }) => {
  return (
    <Drawer isOpen={isOpen} placement='top' onClose={onClose} isFullHeight>
      <DrawerOverlay bg={useColorModeValue('bgLightOpacity', 'bgDarkOpacity')}>
        <DrawerContent
          w='2xl'
          bg={useColorModeValue('bgLight', 'bgDark')}
          m='0 auto'
          p={5}
        >
          <Button
            alignSelf='flex-end'
            boxShadow='outlineShadow'
            onClick={onClose}
          >
            <ChevronUpIcon />
          </Button>

          <DrawerHeader>hi</DrawerHeader>

          <DrawerBody bg='teal'>hello</DrawerBody>

          <DrawerFooter mb={['20vh', '0']}>I'm a footer</DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavDrawer;
