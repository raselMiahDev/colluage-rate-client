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
      <ContainerSectionWrapper>
        <SearchBar />
        <div className="space-y-4">
          {employees.map((employee, index) => (
            <EmployeeCard key={index} {...employee} />
          ))}
        </div>
      </ContainerSectionWrapper>
    </PageWrapper>
  );
}
