import { CollectionConfig } from 'payload/types'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      label: 'Content',
      type: 'richText',
    },
    {
      name: 'isPublished',
      label: 'Published',
      type: 'checkbox',
      required: true,
      defaultValue: false
    },
  ],
}

export default Pages
