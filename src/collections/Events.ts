import { CollectionConfig } from 'payload/types'

const Events: CollectionConfig = {
  slug: 'events',
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
      name: 'date',
      label: 'Event Date',
      type: 'date',
      required: true
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      required: true,
    },
  ],
}

export default Events
