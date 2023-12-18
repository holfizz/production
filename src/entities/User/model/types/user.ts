import {UserRole} from "../const/const"
import {FeatureFlag} from "@/shared/types/featureFlag"
import {JsonSettings} from './jsonSettings'

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?:FeatureFlag
  jsonSettings?:JsonSettings
}

export interface UserSchema {
  authData?: User;
  _mounted: boolean;
}

