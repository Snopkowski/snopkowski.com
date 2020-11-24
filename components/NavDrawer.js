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

const NavDrawer = ({ onClose, isOpen, btnRef }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement='top'
      onClose={onClose}
      finalFocusRef={btnRef}
      isFullHeight
    >
      <DrawerOverlay bg={useColorModeValue('bgLightOpacity', 'bgDarkOpacity')}>
        <DrawerContent
          // boxShadow='none'
          w='2xl'
          bg={useColorModeValue('bgLight', 'bgDark')}
          m='0 auto'
          p={5}
        >
          <Button alignSelf='flex-end' size='sm' onClick={onClose}>
            <ChevronUpIcon />
          </Button>

          <DrawerHeader>hi</DrawerHeader>

          <DrawerBody>hello</DrawerBody>

          <DrawerFooter mb='20vh'>I'm a footer</DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavDrawer;
