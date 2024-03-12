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
              name: 'isReadPages',
              label: 'Read',
              type: 'checkbox'
            },
            {
              name: 'isCreatePages',
              label: 'Create and Update',
              type: 'checkbox'
            },
            {
              name: 'isDeletePages',
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
              name: 'isReadEvents',
              label: 'Read',
              type: 'checkbox'
            },
            {
              name: 'isCreateEvents',
              label: 'Create and Update',
              type: 'checkbox'
            },
            {
              name: 'isDeleteEvents',
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
