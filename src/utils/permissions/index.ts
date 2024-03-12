import { Access } from "payload/config"

const getPermission = (user: {
  permissions?: {
    [key: string]: boolean | undefined
  }
} | undefined, name: string) => {
  const isFlag = user?.permissions?.[name]
  return typeof isFlag === 'boolean' ? isFlag : false
}

export const createAccessPermissionHandler = (name: string) => {
  const handler: Access = ({ req: { user } }) => getPermission(user, name)
  return handler
}