import { useState } from "react";
import TermsAndConditions from "./terms&conditions";
import { MyInputWithRHF } from "../../../components/common/my-input.comp";
import { AboutYouController } from "../about-you.controller";
import PrivacyAlert from "../../../components/common/privacy-alert";

const AboutYouForm = () => {
  const [showTerms, setShowTerms] = useState(false);
  const { control, handleSubmit, isSubmitting } = AboutYouController();
  return (
    <div className="flex flex-col space-y-2">
      <MyInputWithRHF
        name="firstName"
        label="First Name"
        type="text"
        placeholder="Jhon"
        control={control}
      />
      <PrivacyAlert />
      <MyInputWithRHF
        name="lastName"
        label="Last Name"
        type="text"
        placeholder="Doh"
        control={control}
      />
      <PrivacyAlert />
      <MyInputWithRHF
        name="currentCompany"
        label="Current Company Name"
        type="text"
        placeholder="XYZ Private Ltd."
        control={control}
      />
      <PrivacyAlert />
      <MyInputWithRHF
        name="currentDesignation"
        label="Current Designation"
        type="text"
        placeholder="Web Developer"
        control={control}
      />
      <PrivacyAlert />
      <MyInputWithRHF
        name="pastCompany"
        label="Past Company Name"
        type="text"
        placeholder="XYZ Private Ltd."
        control={control}
      />
      <PrivacyAlert />
      <MyInputWithRHF
        name="pastDesignation"
        label="Past Designation"
        type="text"
        placeholder="Web Developer"
        control={control}
      />
      <PrivacyAlert />
      <div className="flex items-center gap-2">
        <MyInputWithRHF
          name="agree"
          label=""
          hideLabel={true}
          type="checkbox"
          placeholder=""
          control={control}
        />
        <span>
          I Agree With{" "}
          <button className="text-blue-500" onClick={() => setShowTerms(true)}>
            Terms And conditions
          </button>
        </span>
      </div>
      <button
        onClick={() => {
          handleSubmit();
        }}
        disabled={isSubmitting}
        type="submit"
        className="w-full p-3 rounded-lg bg-black hover:bg-slate-800 text-white font-semibold"
      >
        {isSubmitting ? "Updating..." : "All Done"}
      </button>

      {showTerms && <TermsAndConditions onClose={() => setShowTerms(false)} />}
    </div>
  );
};

export default AboutYouForm;
