import externalLink from '../objects/externalLink';
import internalLink from '../objects/internalLink';
import sanityImage from '../objects/sanityImage';
import twitterEmbed from '../objects/twitterEmbed';

export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.title}`,
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    //Content Start
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean',
                  },
                  {
                    title: 'Own post',
                    name: 'own',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'code',
        },
        sanityImage,
        twitterEmbed,
      ],
    },
    //Content end
  ],
};
