import {ZodEmailString,ZodSimpleString,ZodPasswordString} from "../../utils/zod.util"
import {z} from "zod"

export const EditProfileWithSchema= z.object({
    email:ZodEmailString,
    linkedin:ZodSimpleString,
    facebook:ZodSimpleString,
    currentPassword:ZodPasswordString,
    newPassword:ZodPasswordString,
    confirmPassword:ZodPasswordString
})
export type IEditProfileWithSchema = z.infer<typeof EditProfileWithSchema>