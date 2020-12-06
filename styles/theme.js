import { theme } from '@chakra-ui/react';
const customTheme = {
  ...theme,
  colors: {
    primary: 'yellow',
    secondary: 'blue',
    dark: '#151719',
    bgDark: '#151719',
    bgLight: '#F7FAFC',
    bgDarkOpacity: 'rgba(21, 23, 25, 0.6)',
    bgLightOpacity: 'rgba(248, 250, 252, 0.9)',
  },
  shadows: {
    ...theme.shadows,
    outline: '0 0 0 2px salmon',
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
