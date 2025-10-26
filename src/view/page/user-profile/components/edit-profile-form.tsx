import { useAuthStore } from "../../../../store/user.store";
import { MyInputWithRHF } from "../../../components/common/my-input.comp";
import { UserProfileController } from "../user-profile.controller";

const EditProfileForm = () => {
  const user = useAuthStore()
  const { control, handleSubmit, isSubmitting } = UserProfileController();
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Edit Profile</h1>
      <p className="font-bold">Profile Info</p>

      <div className="space-y-3">
        <MyInputWithRHF
          name="email"
          label="Email"
          type="email"
          placeholder={user.user?.email || "Enter your email"}
          value={user.user?.email}
          control={control}
        />
        <MyInputWithRHF
          name="linkedin"
          label="Linkedin Id"
          type="text"
          placeholder=""
          control={control}
        />
        <MyInputWithRHF
          name="facebook"
          label="Facebook"
          type="text"
          placeholder=""
          control={control}
        />
        <h3 className="py-3 font-bold">Security</h3>
        <MyInputWithRHF
          name="currentPassword"
          label="Current Password"
          type="password"
          placeholder=""
          control={control}
        />

        <MyInputWithRHF
          name="newPassword"
          label="New Password"
          type="password"
          placeholder=""
          control={control}
        />
        <MyInputWithRHF
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder=""
          control={control}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          disabled={isSubmitting}
          type="submit"
          className="w-full p-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
        >
          {isSubmitting ? "Updating..." : "Update Info"}
        </button>
      </div>
    </div>
  );
};

export default EditProfileForm;
