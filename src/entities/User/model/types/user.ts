import {UserRole} from "../const/const"
import {FeatureFlag} from "@/shared/types/featureFlag"

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?:FeatureFlag
}

export interface UserSchema {
  authData?: User;
  _mounted: boolean;
}
