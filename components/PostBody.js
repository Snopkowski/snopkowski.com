// import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { urlFor, imageBuilder } from '../lib/sanity';
// import { Stack } from '@chakra-ui/react';
import Image from 'next/image';
// import Link from 'next/link';

export default function PostBody({ content }) {
  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
      image: (props) => (
        <div style={{ width: '100%' }}>
          <Image
            src={urlFor(props.node.asset).url()}
            alt={props.node.caption}
            width={856}
            height={480}
            layout='responsive'
          />
        </div>
      ),
      instagramPost: (props) => (
        <div>
          <a href={props.node.url}>{props.node.url}</a>
        </div>
      ),
    },
    marks: {
      internalLink: ({ children }) => {
        return <a href={href}>{children}</a>;
      },
    },
  };
  return <BlockContent blocks={content} serializers={serializers} />;
}
