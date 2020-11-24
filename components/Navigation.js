import { useDisclosure, Button, Flex } from '@chakra-ui/react';
import { useRef } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NavDrawer from './NavDrawer';
const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex
      py={5}
      as='nav'
      direction='row'
      w='100%'
      pos='sticky'
      top='0'
      px={5}
      justifyContent='space-between'
    >
      <Link href='/'>
        <Button variant='outline' size='sm' as='a'>
          HI
        </Button>
      </Link>
      <Button ref={btnRef} size='sm' onClick={onOpen}>
        <ChevronDownIcon />
      </Button>
      <NavDrawer onClose={onClose} isOpen={isOpen} btnRef={btnRef} />
    </Flex>
  );
};

export default Navigation;
