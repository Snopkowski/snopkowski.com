import { Flex, Spacer, Stack, Divider } from '@chakra-ui/react';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import SEO from 'components/SEO';

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Flex
        direction='column'
        alignItems='center'
        justifyContent='flex-start'
        py={2}
        maxW='3xl'
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
          px={{ base: '6', md: '16' }}
        >
          {children}
        </Stack>
        <Spacer />
        <Footer />
      </Flex>
    </>
  );
};
export default Layout;
