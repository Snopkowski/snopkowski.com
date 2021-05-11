export default {
  title: 'SanityImage',
  name: 'sanityImage',
  type: 'image',
  options: {
    hotspot: true,
    // metadata: ['location', 'palette', 'image', 'exif'],
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true,
      },
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
    },
  ],
};
