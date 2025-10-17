import React from "react";
import Profile from "./components/profile";
import ReviewsAndRatings from "./components/review-ratings";
import AllReviews from "./components/all-reviews";
import PageWrapper from "../../components/layout/page-wrapper";
import ContainerSectionWrapper from "../../components/layout/container-section-wrapper.comp";
import SocialMedia from "../../components/common/social-media";
import HelmetCon from "../../components/common/helmet-con";
const SingleProfilePage: React.FC = () => {
  return (
    <PageWrapper>
      <HelmetCon title="Profile" />
      <div className="bg-slate-100">
        <ContainerSectionWrapper>
          <div className="md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="space-y-6">
                <Profile />
                <SocialMedia />
                <AllReviews />
              </div>
            </div>
            <div className="md:col-span-1">
              <ReviewsAndRatings />
            </div>
          </div>
        </ContainerSectionWrapper>
      </div>
    </PageWrapper>
  );
};

export default SingleProfilePage;
