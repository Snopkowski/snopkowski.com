import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Stack,
  Heading,
  Text,
  Link,
  Textarea,
} from '@chakra-ui/react';
import SEO from 'components/SEO';

export default function HookForm() {
  const [status, setStatus] = useState('Send');
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleResponse = (status) => {
    if (status === 200) {
      reset();
      setStatus("It's done! 🥳");
      setTimeout(() => setStatus('Send'), 5000);
    } else {
      setStatus('Oops, try again.');
      setTimeout(() => setStatus('Send'), 5000);
    }
  };

  const handleOnSubmit = async (values) => {
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    handleResponse(res.status);
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
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Stack px={{ base: '2', md: '3' }} py={2} spacing={2}>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input
              id='name'
              {...register('name', {
                required: 'Name is required',
                minLength: { value: 3, message: 'Minimum length should be 3' },
              })}
              _focus={{
                borderColor: 'red.300',
              }}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
              id='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format',
                },
              })}
              _focus={{
                borderColor: 'red.300',
              }}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.message}>
            <FormLabel htmlFor='message'>Message</FormLabel>
            <Textarea
              id='message'
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 5,
                  message: 'Minimum length should be 5',
                },
              })}
              _focus={{
                borderColor: 'red.300',
              }}
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            w='xs'
            alignSelf='center'
            disabled={isSubmitting}
            type='submit'
          >
            {status}
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
