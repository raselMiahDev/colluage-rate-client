import React from "react";
import Profile from "./components/profile";
import ReviewsAndRatings from "./components/review-ratings";
import AllReviews from "./components/all-reviews";
import PageWrapper from "../../components/layout/page-wrapper";
import ContainerSectionWrapper from "../../components/layout/container-section-wrapper.comp";
import SocialMedia from "../../components/common/social-media";
import HelmetCon from "../../components/common/helmet-con";
// import SocialLink from "./components/social-link";

const SingleProfilePage: React.FC = () => {
  return (
    <PageWrapper>
      <HelmetCon title="Profile" />
      <div className="bg-slate-100">
        <ContainerSectionWrapper>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Profile />
              <div className="md:flex py-12 px-10 md:px-0 space-x-6 items-end">
                <span className="font-bold">Visit Socials: </span>
                <SocialMedia />
              </div>
              <AllReviews />
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
