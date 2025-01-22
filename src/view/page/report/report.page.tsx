import FullSectionWrapper from "../../components/layout/full-section-wrapper";
import PageWrapper from "../../components/layout/page-wrapper";
import ReportForm from "./components/report-form";

const ReportPage = () => {
  return (
    <PageWrapper>
      <div className="bg-slate-100">
        <FullSectionWrapper>
          <h1 className="text-xl md:text-3xl text-center py-8">
            Report a Rating For <span className="font-bold">Rakibul Hasan</span>
          </h1>

          <ReportForm />
        </FullSectionWrapper>
      </div>
    </PageWrapper>
  );
};

export default ReportPage;
