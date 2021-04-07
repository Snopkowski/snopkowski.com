import { Flex, Spacer, Stack, Divider } from '@chakra-ui/react';
import Footer from './Footer';
import Navigation from './Navigation';
const Layout = ({ children }) => {
  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='flex-start'
      py={2}
      maxW='4xl'
      minH='100vh'
      width='100%'
      m='0 auto'
    >
      <Navigation />
      <Stack
        direction='column'
        width='100%'
        justifyContent='flex-start'
        as='main'
        overflow='hidden'
        py={10}
        px={{ base: '4', md: '16' }}
      >
        {children}
      </Stack>
      <Spacer />
      <Footer />
    </Flex>
  );
};
export default Layout;
