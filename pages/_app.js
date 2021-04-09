import { ChakraProvider } from '@chakra-ui/react';
// import customTheme from '../styles/theme';
import customTheme from '../styles/styles';
import Layout from '@/components/Layout';
// import 'prismjs/themes/prism-tomorrow.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
