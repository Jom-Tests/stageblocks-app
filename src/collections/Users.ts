import { CollectionConfig } from 'payload/types'
import { createEnumOptions } from '../utils/collection'

export enum UserRole {
  Owner = 'owner',
  Staff= 'staff'
}

export const userRoleLabel: Record<UserRole, string> = {
  [UserRole.Owner]: 'Owner',
  [UserRole.Staff]: 'Staff',
}

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
      required: true,
      options: createEnumOptions(UserRole, userRoleLabel)
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
