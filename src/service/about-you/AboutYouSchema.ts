import { ZodNameString, ZodBoolean } from "../../utils/zod.util"
import { z } from "zod"
export const AboutYouWithSchema = z.object({
    firstName: ZodNameString,
    lastName: ZodNameString,
    currentCompany: ZodNameString,
    currentDesignation: ZodNameString,
    pastCompany: ZodNameString,
    pastDesignation: ZodNameString,
    agree: ZodBoolean
})
export type IAboutYouWithSchema = z.infer<typeof AboutYouWithSchema>