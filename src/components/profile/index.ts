import { Profile as ProfileBase } from './profile'
import { ProfileAction } from './profile-action'
import { ProfileContent } from './profile-content'
import { ProfileName } from './profile-name'
import { ProfileSubname } from './profile-subname'

export const Profile = Object.assign(ProfileBase, {
  Name: ProfileName,
  Subname: ProfileSubname,
  Action: ProfileAction,
  Content: ProfileContent,
})

export { ProfileName } from './profile-name'
export { ProfileSubname } from './profile-subname'
export { ProfileAction } from './profile-action'
export { ProfileContent } from './profile-content'
export type {
  ProfileProps,
  ProfileNameProps,
  ProfileSubnameProps,
  ProfileActionProps,
  ProfileContentProps,
} from './profile.types'
