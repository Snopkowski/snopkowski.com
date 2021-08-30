import {
  Heading,
  Stack,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Text,
  Link,
  Button,
} from '@chakra-ui/react';
import SEO from 'components/SEO';
import { useState } from 'react';
export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: '',
    message: '',
    name: '',
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
        name: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };
  return (
    <Stack spacing={4}>
      <Heading as='h1' size='2xl'>
        <SEO title='Contact' />
        Contact
      </Heading>
      <Text>
        I always love to hear about opportunities. If you have any queries, go
        ahead and shoot a{' '}
        <Link href='https://twitter.com/w_snopkowski'>Twitter DM</Link>, send
        an&nbsp;
        <Link href='mailto:hello@snopkowski.com'>email</Link> or contact me
        here.
      </Text>

      <form onSubmit={handleOnSubmit}>
        <Stack px={{ base: '2', md: '4' }} py={2} spacing={2}>
          <FormControl id='name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type='text'
              onChange={handleOnChange}
              value={inputs.name}
              _focus={{
                borderColor: 'red.300',
              }}
            />
          </FormControl>
          <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type='email'
              onChange={handleOnChange}
              value={inputs.email}
              _focus={{
                borderColor: 'red.300',
              }}
            />
          </FormControl>
          <FormControl id='message' isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              onChange={handleOnChange}
              value={inputs.message}
              _focus={{
                borderColor: 'red.300',
              }}
            />
          </FormControl>
          <Button
            w='xs'
            alignSelf='center'
            type='submit'
            disabled={status.submitting}
          >
            {!status.submitting
              ? !status.submitted
                ? 'Send'
                : "It's done! 🥳"
              : 'Sending...'}
          </Button>
          {status.info.error && <Text>Error: {status.info.msg}</Text>}
        </Stack>
      </form>
    </Stack>
  );
}
