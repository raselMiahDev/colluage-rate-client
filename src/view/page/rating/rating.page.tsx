import React from "react";

import PageWrapper from "../../components/layout/page-wrapper";
import ContainerSectionWrapper from "../../components/layout/container-section-wrapper.comp";
import RatingForm from "./components/rating-form";
import HelmetCon from "../../components/common/helmet-con";

const RatingPage: React.FC = () => {
  return (
    <PageWrapper>
      <HelmetCon title="Rating" />
      <div className="bg-slate-50">
        <ContainerSectionWrapper>
          <RatingForm />
        </ContainerSectionWrapper>
      </div>
    </PageWrapper>
  );
};

export default RatingPage;
