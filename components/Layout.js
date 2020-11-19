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
        width='100%'
        minH='100vh'
        alignItems='center'
        maxW={960}
        py={10}
      >
        <Navbar />
        <Flex
          direction='column'
          width='100%'
          justifyContent='flex-start'
          as='main'
        >
          {children}
        </Flex>
        <Spacer />
        <Footer />
      </Flex>
    </Flex>
  );
};
export default Layout;
