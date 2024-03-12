import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      label: 'Role',
      type: 'select',
      options: [
        {
          label: 'Owner',
          value: 'owner',
        },
        {
          label: 'Staff',
          value: 'staff'
        }
      ]
    },
    {
      name: 'permissions',
      label: 'Permissions',
      type: 'group',
      fields: [
        {
          label: 'Pages',
          type: 'collapsible',
          fields: [
            {
              name: 'readPages',
              label: 'Read',
              type: 'checkbox'
            },
            {
              name: 'createAndUpdatePages',
              label: 'Create and Update',
              type: 'checkbox'
            },
            {
              name: 'deletePages',
              label: 'Delete',
              type: 'checkbox'
            }
          ]
        },
        {
          label: 'Events',
          type: 'collapsible',
          fields: [
            {
              name: 'readEvents',
              label: 'Read',
              type: 'checkbox'
            },
            {
              name: 'createAndUpdateEvents',
              label: 'Create and Update',
              type: 'checkbox'
            },
            {
              name: 'deleteEvents',
              label: 'Delete',
              type: 'checkbox'
            }
          ]
        }
      ]
    }
  ],
}

export default Users
