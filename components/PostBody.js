// import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { urlFor, imageBuilder } from '../lib/sanity';
import { Stack, Box, Link } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';
export default function PostBody({ content }) {
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
            <pre className={className} style={{ ...style }}>
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
        <Box pos='relative' minHeight='450px'>
          <Image
            src={urlFor(props.node.asset).url()}
            alt={props.node.caption}
            layout='fill'
            objectFit='contain'
          />
        </Box>
      ),
      instagramPost: (props) => (
        <div>
          <a href={props.node.url}>{props.node.url}</a>
        </div>
      ),
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
  return <BlockContent blocks={content} serializers={serializers} />;
}
