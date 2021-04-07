import {
  FaEnvelope,
  FaGithub,
  FaDev,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { IconButton, Link, HStack } from '@chakra-ui/react';
export default function Social() {
  return (
    <HStack spacing={4}>
      <IconButton
        as={Link}
        rounded='md'
        isExternal
        href='https://github.com/Snopkowski'
        icon={<FaGithub />}
      />

      <IconButton
        as={Link}
        rounded='md'
        isExternal
        href='https://twitter.com/w_snopkowski'
        icon={<FaTwitter />}
      />

      <IconButton
        as={Link}
        rounded='md'
        isExternal
        href='https://www.linkedin.com/in/wojciechsnopkowski'
        icon={<FaLinkedin />}
      />

      <IconButton
        rounded='md'
        isExternal
        href='https://dev.to/snopkowski'
        as={Link}
        icon={<FaDev />}
      />

      <IconButton
        rounded='md'
        href='mailto:hello@snopkowski.com'
        as={Link}
        icon={<FaEnvelope />}
      />
    </HStack>
  );
}
