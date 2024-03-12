import { Config, Plugin } from "payload/config";
import { CollectionConfig } from "payload/types";
import { createAccessPermissionHandler } from "../../utils/permissions";

const accessControl: Plugin = (incomingConfig) => {

  const config: Config = {
    ...incomingConfig,
    collections: incomingConfig.collections.map((collection) => {

      if (collection.slug === 'events') {
        const collectionConfig: CollectionConfig = {
          ...collection,
          access: {
            read: createAccessPermissionHandler('isReadEvents'),
            create: createAccessPermissionHandler('isCreateEvents'),
            update: createAccessPermissionHandler('isCreateEvents'),
            delete: createAccessPermissionHandler('isDeleteEvents'),
          }
        }

        return collectionConfig
      }

      if (collection.slug === 'pages') {
        const collectionConfig: CollectionConfig = {
          ...collection,
          access: {
            read: createAccessPermissionHandler('isReadPages'),
            create: createAccessPermissionHandler('isCreatePages'),
            update: createAccessPermissionHandler('isCreatePages'),
            delete: createAccessPermissionHandler('isDeletePages'),
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
