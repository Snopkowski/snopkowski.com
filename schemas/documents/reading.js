export default {
  name: 'reading',
  type: 'document',
  title: 'Reading',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Type',
      name: 'type',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Video', value: 'Video' },
          { title: 'Article', value: 'Article' },
          { title: 'Blog', value: 'Blog' },
          { title: 'Podcast', value: 'Podcast' },
        ],
      },
      validation: (Rule) => Rule.required().max(1),
    },
    {
      name: 'source',
      title: 'Source',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
  ],
};
