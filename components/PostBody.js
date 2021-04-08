// import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { urlFor, imageBuilder } from '../lib/sanity';
import { Stack, Text, Box, Link, chakra, Heading } from '@chakra-ui/react';

import Image from 'next/image';
import NextLink from 'next/link';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';
export default function PostBody({ content }) {
  const Wrapper = chakra(BlockContent);

  const serializers = {
    types: {
      code: (props) => (
        <Highlight
          {...defaultProps}
          code={props.node.code}
          language={props.node.language}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{ ...style, padding: '16px', overflowX: 'scroll' }}
            >
              {tokens.map((line, index) => {
                const lineProps = getLineProps({ line, key: index });
                return (
                  <div key={index} {...lineProps}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                );
              })}
            </pre>
          )}
        </Highlight>
      ),
      sanityImage: (props) => (
        <Box py={2}>
          <img
            src={urlFor(props.node.asset).maxWidth(1920).url()}
            alt={props.node.caption}
          />
        </Box>
      ),
      block(props) {
        switch (props.node.style) {
          case 'h1':
            return (
              <Heading as='h1' pt='4' fontSize='5xl'>
                {props.children}
              </Heading>
            );
          case 'h2':
            return (
              <Heading as='h2' pt='4' fontSize='4xl'>
                {props.children}
              </Heading>
            );
          case 'h3':
            return (
              <Heading as='h3' pt='4' fontSize='3xl'>
                {props.children}
              </Heading>
            );
          case 'h4':
            return (
              <Heading as='h4' pt='4' fontSize='2xl'>
                {props.children}
              </Heading>
            );
          case 'h5':
            return (
              <Heading as='h5' pt='4' fontSize='xl'>
                {props.children}
              </Heading>
            );

          default:
            return <Text>{props.children}</Text>;
        }
      },
    },

    marks: {
      sanityLink: ({ mark, children }) => {
        const { href } = mark;
        return (
          <NextLink passHref href={href} target='_blank' rel='noopener'>
            <Link>{children}</Link>
          </NextLink>
        );
      },
    },
  };
  return (
    <Stack
      as={Wrapper}
      spacing={2}
      blocks={content}
      serializers={serializers}
    />
  );
}
