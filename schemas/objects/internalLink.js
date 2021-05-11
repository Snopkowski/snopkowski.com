export default {
  name: 'internalLink',
  type: 'object',
  title: 'InternalLink',
  fields: [
    {
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [{ type: 'post' }],
    },
  ],
};
