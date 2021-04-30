import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../styles/theme';
import Layout from '@/components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
