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
      <Link rounded='md' isExternal href='https://github.com/Snopkowski'>
        <IconButton as='a' icon={<FaGithub />} />
      </Link>
      <Link rounded='md' isExternal href='https://twitter.com/w_snopkowski'>
        <IconButton as='a' icon={<FaTwitter />} />
      </Link>
      <Link
        rounded='md'
        isExternal
        href='https://www.linkedin.com/in/wojciechsnopkowski'
      >
        <IconButton as='a' icon={<FaLinkedin />} />
      </Link>
      <Link rounded='md' isExternal href='https://dev.to/snopkowski'>
        <IconButton as='a' icon={<FaDev />} />
      </Link>
      <Link rounded='md' href='mailto:hello@snopkowski.com'>
        <IconButton as='a' icon={<FaEnvelope />} />
      </Link>
    </HStack>
  );
}