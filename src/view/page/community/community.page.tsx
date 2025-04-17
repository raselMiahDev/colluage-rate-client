import HelmetCon from "../../components/common/helmet-con";
import ContainerSectionWrapper from "../../components/layout/container-section-wrapper.comp";
import PageWrapper from "../../components/layout/page-wrapper";
import NewsFeed from "./components/news-feed/news.feed";
import SidebarMenu from "./components/sidebar.menu";
import Tranding from "./components/tending/tending";

const CommunityPage = () => {
  return (
    <PageWrapper>
      <HelmetCon title="Community" />
      <div className="bg-gray-100">
        <ContainerSectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 md:py-7">
            <div className="hidden md:block col-span-2">
              <SidebarMenu />
            </div>
            <div className="col-span-7">
              <NewsFeed />
            </div>
            <div className="hidden md:block col-span-3">
              <Tranding />
            </div>
          </div>
        </ContainerSectionWrapper>
      </div>
    </PageWrapper>
  );
};

export default CommunityPage;
