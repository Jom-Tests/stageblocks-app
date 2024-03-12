import { Access } from "payload/config"
import { UserRole } from "../../collections/Users"


const getPermission = (user: {
  permissions?: {
    [key: string]: boolean | undefined
  }
} | undefined, name: string) => {
  const isFlag = user?.permissions?.[name]
  return typeof isFlag === 'boolean' ? isFlag : false
}

export const createPermissionAccessHandler = (name: string) => {
  const handler: Access = ({ req: { user } }) => getPermission(user, name)
  return handler
}

export function createUserRoleAccessHandler(role: UserRole) {
  const handler: Access = ({ req: { user } }) => user?.role === role

  return handler
}
