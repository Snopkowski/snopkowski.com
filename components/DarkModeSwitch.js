import { useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label='Toggle Night Mode'
      onClick={toggleColorMode}
      icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
    />
  );
};
export default DarkModeSwitch;
