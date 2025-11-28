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
          <div className="md:grid md:grid-cols-12 gap-6 mb-6">
            <div className="col-span-8">
              <Profile />
            </div>
            <div className="col-span-4">
               <ReviewsAndRatings />
            </div>
          </div>

          <div className="md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="space-y-6">
               
                <SocialMedia />
                <AllReviews />
              </div>
            </div>
          </div>

        </ContainerSectionWrapper>
      </div>
    </PageWrapper>
  );
};

export default SingleProfilePage;
