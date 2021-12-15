import {
  useDisclosure,
  Button,
  Flex,
  Box,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import { TriangleDownIcon } from '@chakra-ui/icons';
import NavDrawer from 'components/NavDrawer';
import DarkModeSwitch from 'components/DarkModeSwitch';
const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      py={5}
      as='nav'
      direction='row'
      w='100%'
      zIndex='10'
      pos='sticky'
      top='0'
      backdropFilter='auto'
      backdropBlur='12px'
      px={{ base: '4', md: '12' }}
      justifyContent='space-between'
      bg={useColorModeValue('bgLightOpacity', 'bgDarkOpacity')}
    >
      <Link passHref href='/'>
        <Button aria-label='Homepage'>WS</Button>
      </Link>
      <Box>
        <DarkModeSwitch />
        <IconButton
          aria-label='Open Navigation'
          ml={4}
          onClick={onOpen}
          icon={<TriangleDownIcon />}
        />
      </Box>
      <NavDrawer onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
};

export default Navigation;
