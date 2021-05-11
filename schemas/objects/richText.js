import sanityLink from './sanityLink';
import sanityImage from './sanityImage';

export default {
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [sanityLink],
      },
    },
    {
      type: 'code',
    },
    sanityImage,
  ],
};
