import { Config, Plugin } from "payload/config";
import { CollectionConfig } from "payload/types";
import { createPermissionAccessHandler, createUserRoleAccessHandler } from "../../utils/permissions";
import { UserRole } from "../../collections/Users";

const accessControl: Plugin = (incomingConfig) => {

  const config: Config = {
    ...incomingConfig,
    collections: incomingConfig.collections.map((collection) => {

      if (collection.slug === 'users') {
        const collectionConfig: CollectionConfig = {
          ...collection,
          access: {
            read: (args) => {
              if (args.id === args.req.user.id) {
                return true
              }

              return args.req.user.role === UserRole.Owner
            },
            create: createUserRoleAccessHandler(UserRole.Owner),
            update: createUserRoleAccessHandler(UserRole.Owner),
            delete: createUserRoleAccessHandler(UserRole.Owner),
          }
        }

        return collectionConfig
      }

      if (collection.slug === 'events') {
        const collectionConfig: CollectionConfig = {
          ...collection,
          access: {
            read: createPermissionAccessHandler('isReadEvents'),
            create: createPermissionAccessHandler('isCreateEvents'),
            update: createPermissionAccessHandler('isCreateEvents'),
            delete: createPermissionAccessHandler('isDeleteEvents'),
          }
        }

        return collectionConfig
      }

      if (collection.slug === 'pages') {
        const collectionConfig: CollectionConfig = {
          ...collection,
          access: {
            read: createPermissionAccessHandler('isReadPages'),
            create: createPermissionAccessHandler('isCreatePages'),
            update: createPermissionAccessHandler('isCreatePages'),
            delete: createPermissionAccessHandler('isDeletePages'),
          }
        }

        return collectionConfig
      }

      return collection
    })
  }

  return config
}

export default accessControl
