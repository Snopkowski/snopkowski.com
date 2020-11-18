import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
