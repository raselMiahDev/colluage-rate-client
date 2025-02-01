import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { AboutYouWithSchema, IAboutYouWithSchema } from "../../../service/about-you/AboutYouSchema"

export const AboutYouController = () => {
    const { control, handleSubmit, formState: { isSubmitting } } = useForm<IAboutYouWithSchema>({
        resolver: zodResolver(AboutYouWithSchema),
    })

    const onSubmit = async (data: IAboutYouWithSchema) => {
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