import { Profile } from "entity/Profile"
import { ValidateProfileErrors } from "../../types/editableProfileCardSchema"

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileErrors.NO_DATA]
    }
    const { first, lastname, age, country } = profile
    const errors: ValidateProfileErrors[] = []
    if (!first || !lastname) {
        errors.push(ValidateProfileErrors.INCORRECT_USER_DATA)
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE)
    }
    if (!country) {
        errors.push(ValidateProfileErrors.INCORRECT_COUNTY)
    }
    return errors
}
