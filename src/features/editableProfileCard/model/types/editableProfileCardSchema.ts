import { Profile } from "@/entities/Profile"
import { ValidateProfileErrors } from "../const/const"

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileErrors[];
}
