import {
  AiOutlineForm,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineGithub,
} from 'react-icons/ai';
import { IconButton, Link, HStack } from '@chakra-ui/react';
export default function Social() {
  return (
    <HStack spacing={4}>
      <IconButton
        as={Link}
        rounded='md'
        isExternal
        aria-label='github'
        href='https://github.com/Snopkowski'
        icon={<AiOutlineGithub />}
      />

      <IconButton
        as={Link}
        rounded='md'
        isExternal
        aria-label='twitter'
        href='https://twitter.com/w_snopkowski'
        icon={<AiOutlineTwitter />}
      />

      <IconButton
        as={Link}
        rounded='md'
        isExternal
        aria-label='linkedin'
        href='https://www.linkedin.com/in/wojciechsnopkowski'
        icon={<AiOutlineLinkedin />}
      />

      <IconButton
        rounded='md'
        href='mailto:hello@snopkowski.com'
        as={Link}
        aria-label='email'
        icon={<AiOutlineForm />}
      />
    </HStack>
  );
}
