import { Flex, useColorMode, Spacer } from '@chakra-ui/react';
import Footer from './Footer';
import DarkModeSwitch from './DarkModeSwitch';

const Layout = ({ children }, props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'bgLight', dark: 'bgDark' };

  const color = { light: 'bgDark', dark: 'bgLight' };
  return (
    <>
      <Flex
        direction='column'
        alignItems='center'
        justifyContent='flex-start'
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        minH='100vh'
        px={10}
        {...props}
      >
        {' '}
        <DarkModeSwitch />
        <Flex direction='column' as='main'>
          {children}
        </Flex>
        <Spacer />
        <Footer />
      </Flex>
    </>
  );
};
export default Layout;
