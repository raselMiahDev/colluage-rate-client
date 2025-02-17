import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { ReportWithSchema, IReportWithSchema } from "../../../service/report/ReportSchema"

export const ReportController = () => {
    const { control, handleSubmit, formState: { isSubmitting } } = useForm<IReportWithSchema>({
        resolver: zodResolver(ReportWithSchema),
    })

    const onSubmit = async (data: IReportWithSchema) => {
        try {
            console.log("Signup successful:", data) // Display success message
            // const response = await axios.post("/api/payment/signup", data);
            toast.success("Signup successful!")
        } catch (error) {
            console.error("Signup Error:", error) // Log error
        }
    }

    return {
        control,
        handleSubmit: handleSubmit(onSubmit),
        isSubmitting,
    }
}