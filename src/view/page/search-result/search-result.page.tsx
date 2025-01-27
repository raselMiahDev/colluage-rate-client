import ContainerSectionWrapper from "../../components/layout/container-section-wrapper.comp";
import PageWrapper from "../../components/layout/page-wrapper";
import EmployeeCard from "./components/employee-card";
import SearchBar from "./components/search-bar";

export default function SearchResultPage() {
  const employees = [
    {
      name: "Rakibul Hasan",
      currentRole: "IT Manager",
      company: "Codex IT",
      previousRole: "Frontend Developer",
      previousCompany: "Mathosagar IT Solution",
      rating: 4.5,
      reviews: 10,
      attributes: ["98% Would work again", "Known for Leadership"],
    },
    {
      name: "Rakibul Hasan",
      currentRole: "IT Manager",
      company: "Codex IT",
      previousRole: "Frontend Developer",
      previousCompany: "Mathosagar IT Solution",
      rating: 1.5,
      reviews: 10,
      attributes: ["98% Would work again", "Known for Leadership"],
    },
    // Add more employee objects here...
  ];
  return (
    <PageWrapper>
      <div className="bg-slate-100">
        <ContainerSectionWrapper className="px-10 md:px-0">
          <div className="grid md:grid-cols-12 gap-7">
            <div className="md:col-span-9">
              <SearchBar />
              <div className="space-y-4">
                {employees.map((employee, index) => (
                  <EmployeeCard key={index} {...employee} />
                ))}
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
