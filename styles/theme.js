import { extendTheme } from '@chakra-ui/react';

const config = {
  useSystemColorMode: true,
};

const colors = {
  primary: 'yellow',
  secondary: 'blue',
  bgDark: '#151719',
  bgLight: '#F7FAFC',
  bgDarkOpacity: 'rgba(21, 23, 25, 0.95)',
  bgLightOpacity: 'rgba(248, 250, 252, 0.95)',
};

const customTheme = extendTheme({ colors, config });

export default customTheme;
