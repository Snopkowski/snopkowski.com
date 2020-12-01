import { Heading, Text, Link } from '@chakra-ui/react';

const Index = () => (
  <>
    <Heading as='h1' size='3xl' fontWeight='300'>
      Hi, I'm Wojciech Snopkowski
    </Heading>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, optio.
      Nihil labore dicta officiis possimus nostrum nemo quasi eaque ullam
      asperiores enim, corporis nam exercitationem!
    </Text>
    <Text fontSize='6xl'>(6xl) In love with React & Next</Text>
    <Link href='https://google.com'>
      <a>Google</a>
    </Link>
  </>
);

export default Index;
