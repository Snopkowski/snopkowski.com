// import { extendTheme, theme } from '@chakra-ui/react';
// import { useColorModeValue } from '@chakra-ui/react';

// const config = {
//   useSystemColorMode: true,
// };

// const styles = {
//   global: (props) => ({
//     'html, body': {
//       bg: useColorModeValue('bgLight', 'bgDark'),
//       color: useColorModeValue('bgLight', 'bgDark'),
//       'overflow-x': 'hidden',
//     },
//   }),
// };

// const colors = {
//   primary: 'yellow',
//   secondary: 'blue',
//   dark: '#151719',
//   bgDark: '#151719',
//   bgLight: '#F7FAFC',
//   bgDarkOpacity: 'rgba(21, 23, 25, 0.85)',
//   bgLightOpacity: 'rgba(248, 250, 252, 0.85)',
// };

// const customTheme = extendTheme({ styles, colors, config });

// export default customTheme;

import { theme } from '@chakra-ui/react';
const customTheme = {
  ...theme,
  colors: {
    primary: 'yellow',
    secondary: 'blue',
    dark: '#151719',
    bgDark: '#151719',
    bgLight: '#F7FAFC',
    bgDarkOpacity: 'rgba(21, 23, 25, 0.9)',
    bgLightOpacity: 'rgba(248, 250, 252, 0.9)',
  },
  config: {
    useSystemColorMode: true,
    initialColorMode: 'light',
  },
  styles: {
    global: (props) => ({
      'html, body': {
        color: props.colorMode === 'dark' ? 'bgLight' : 'bgDark',
        bg: props.colorMode === 'dark' ? 'bgDark' : 'bgLight',
      },
    }),
  },
};
export default customTheme;
