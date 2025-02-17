import { z } from "zod"
import { ZodSimpleString } from "../../utils/zod.util"

export const ReportWithSchema = z.object({
    comments: ZodSimpleString
})

export type IReportWithSchema = z.infer<typeof ReportWithSchema>