import {FeatureFlag} from "@/shared/types/featureFlag"

let featureFlags:FeatureFlag;
export function setFeaturesFlag(newFeaturesFlags?:FeatureFlag){
    if(newFeaturesFlags){
        featureFlags = newFeaturesFlags
    }
}
export function getFeatureFlag(flag:keyof FeatureFlag){
    return featureFlags[flag]
}
