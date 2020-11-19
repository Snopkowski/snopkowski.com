import { extendTheme } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

const config = {
  useSystemColorMode: true,
};

const styles = {
  global: () => ({
    body: {
      bg: useColorModeValue('bgLight', 'bgDark'),
    },
  }),
};

const colors = {
  primary: 'yellow',
  secondary: 'blue',
  dark: '#151719',
  bgDark: '#151719',
  bgLight: '#F7FAFC',
  bgDarkOpacity: 'rgba(21, 23, 25, 0.90)',
  bgLightOpacity: 'rgba(248, 250, 252, 0.90)',
};

const customTheme = extendTheme({ styles, colors, config });

export default customTheme;
