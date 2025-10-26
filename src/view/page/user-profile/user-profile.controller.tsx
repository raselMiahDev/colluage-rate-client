import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { EditProfileWithSchema, IEditProfileWithSchema } from "../../../service/user-profile/ProfileSchema"

export const UserProfileController = ()=>{
    const {control,handleSubmit,formState:{isSubmitting}} = useForm <IEditProfileWithSchema>({
        resolver:zodResolver(EditProfileWithSchema),
        // defaultValues:(
        //         email:"",
        //         linkedin:"",
        //         facebook:"",
        //         currentPassword:"",
        //         newPassword:"",
        //         confirmPassword:"",
        // )
    })

    const onSubmit = async (data: IEditProfileWithSchema) => {
        try {
            console.log("Signup successful:", data) // Display success message
            // const response = await axios.post("/api/payment/signup", data);
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