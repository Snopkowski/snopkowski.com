import { extendTheme } from '@chakra-ui/react';

const colors = {
  bgDark: '#0b0c0d',
  bgLight: '#F7FAFC',
  bgDarkOpacity: 'rgba(11, 12, 13, 0.8)',
  bgLightOpacity: 'rgba(248, 250, 252, 0.8)',
  textDarkBg: '#acafb0',
  textLightBg: '#545455',
};
const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const shadows = {
  outline: '0 0 0 2px #FC8181',
};

const styles = {
  global: (props) => ({
    'html, body': {
      color: props.colorMode === 'dark' ? 'bgLight' : 'bgDark',
      bg: props.colorMode === 'dark' ? 'bgDark' : 'bgLight',
    },
    'p, li': {
      color: props.colorMode === 'dark' ? 'textDarkBg' : 'textLightBg',
    },
    'h1,h2,h3,h4,h5,h6': {
      color: props.colorMode === 'dark' ? 'bgLight' : 'bgDark',
    },
  }),
};

const customTheme = extendTheme({ colors, styles, config, shadows });

export default customTheme;
