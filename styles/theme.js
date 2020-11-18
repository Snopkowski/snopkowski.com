import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: 'yellow',
  secondary: 'blue',
  bgDark: '#131415',
  bgLight: 'gray.50',
};

const customTheme = extendTheme({ colors });

export default customTheme;
