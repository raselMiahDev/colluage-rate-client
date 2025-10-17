import { useState } from "react";
import ContainerSectionWrapper from "../../components/layout/container-section-wrapper.comp";
import PageWrapper from "../../components/layout/page-wrapper";
import ReviewsAndRatings from "../single-profile/components/review-ratings";
import MyProfile from "./components/my-profile";
import AllReviews from "../single-profile/components/all-reviews";
import EmployeeCard from "../search-result/components/employee-card";
import HelmetCon from "../../components/common/helmet-con";

export default function UserProfilePage() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabItem = [
    {
      id: "tab1",
      title: "My Profile",
    },
    {
      id: "tab2",
      title: "My Ratings",
    },
    {
      id: "tab3",
      title: "Saved",
    },
  ];
  return (
    <PageWrapper>
      <HelmetCon title="Profile" />
      <div className="bg-slate-50">
        <ContainerSectionWrapper>
          <div className="flex pb-6 space-x-5">
            {tabItem.map((item) => (
              <button
                key={item.id}
                className={`py-2 px-6 rounded ${
                  activeTab === item.id
                    ? "text-[#dbdbdb] bg-[#133955]"
                    : "text-gray-600 bg-slate-200"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>

          {activeTab === "tab1" && (
            <div className="grid md:grid-cols-3 gap-7">
              <div className="col-span-2">
                <MyProfile />
              </div>
              <div className="col-span-1">
                <ReviewsAndRatings />
              </div>
            </div>
          )}

          {activeTab === "tab2" && (
            <div className="max-w-5xl">
              <AllReviews />
            </div>
          )}
          {activeTab === "tab3" && (
            <div className="max-w-5xl">
              <EmployeeCard
              id={1}
                name="Rasel Kibria"
                currentRole="developer"
                company="Abc"
                previousRole="xzy"
                previousCompany="inter"
                rating={25}
                reviews={95}
                attributes={["dfhd", "jdkfkfh"]}
              />
            </div>
          )}
        </ContainerSectionWrapper>
      </div>
    </PageWrapper>
  );
}
