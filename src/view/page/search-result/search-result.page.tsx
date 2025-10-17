import HelmetCon from "../../components/common/helmet-con";
import ContainerSectionWrapper from "../../components/layout/container-section-wrapper.comp";
import PageWrapper from "../../components/layout/page-wrapper";
import EmployeeCard from "./components/employee-card";
import SearchBar from "./components/search-bar";
import { SearchResultController } from "./search-result.controller";

export default function SearchResultPage() {
  const { filteredResults } = SearchResultController();
  return (
    <PageWrapper>
      <HelmetCon title="Search Result" />
      <div className="bg-slate-100">
        <ContainerSectionWrapper className="px-10 md:px-0">
          <div className="grid md:grid-cols-12 gap-7">
            <div className="md:col-span-9">
              <SearchBar />
              <div className="space-y-4">
                {filteredResults.length > 0 ? (
                  filteredResults.map((employee, index) => (
                    <EmployeeCard key={index} {...employee} />
                  ))
                ) : (
                  <p>No result found</p>
                )}
              </div>
            </div>

            <div className="md:col-span-3 md:mt-32 border text-center p-4 rounded-lg h-44 bg-white">
              <h1 className="text-2xl font-bold pb-7">
                Don't see <br /> your Colleague?
              </h1>
              <button className="bg-blue-500 text-white w-full rounded-md py-2">
                Add Now
              </button>
            </div>
          </div>
        </ContainerSectionWrapper>
      </div>
    </PageWrapper>
  );
}
