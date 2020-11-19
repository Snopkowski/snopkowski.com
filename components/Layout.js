import { Flex, useColorMode, Spacer, Stack, Container } from '@chakra-ui/react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }, props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'bgLight', dark: 'bgDark' };

  const color = { light: 'bgDark', dark: 'bgLight' };
  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='flex-start'
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
      p={5}
    >
      <Flex
        direction='column'
        minH='100vh'
        alignItems='center'
        maxW={{ base: '90%', md: '80%', lg: '70%', xl: '60%' }}
      >
        <Navbar />
        <Flex direction='column' as='main'>
          {children}
        </Flex>
        <Spacer />
        <Footer />
      </Flex>
    </Flex>
  );
};
export default Layout;
