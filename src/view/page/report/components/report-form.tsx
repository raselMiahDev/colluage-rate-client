import { MyInputWithRHF } from "../../../components/common/my-input.comp";
import { ReportController } from "../report.controller";

const ReportForm = () => {
  const { control, handleSubmit, isSubmitting } = ReportController();
  return (
    <div className="bg-white p-5 max-w-5xl mx-auto space-y-6 rounded-lg border">
      <div className="bg-slate-100 p-4 rounded-lg">
        <h1 className="text-lg font-semibold">You're reporting:</h1>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
      </div>
      <div className="bg-slate-100 p-4 rounded-lg">
        <h1 className="text-lg font-semibold">What's the problem?</h1>
        <p>
          If you think this comment is inconsistent with Meet My Colleague{" "}
          <a href="" className="underline">
            {" "}
            Site Guidelines,
          </a>{" "}
          report it and tell us why .
        </p>
      </div>
      <div className=" rounded-lg">
        <MyInputWithRHF
          name="comments"
          isTextArea={true}
          label=""
          placeholder="Tell us whats wrong this comments ..."
          control={control}
        />
        <span>0/350</span>
      </div>
      <div className="">
        <button
          onClick={() => {
            handleSubmit();
          }}
          disabled={isSubmitting}
          type="submit"
          className="w-full p-3 bg-[#006BFF] text-white rounded-lg hover:bg-blue-500"
        >
          {isSubmitting ? "Submiting..." : "Submit Report"}
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
