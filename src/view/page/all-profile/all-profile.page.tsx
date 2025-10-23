import ContainerSectionWrapper from "../../components/layout/container-section-wrapper.comp";
import PageWrapper from "../../components/layout/page-wrapper";
import Card from "./components/card";
import LoadingSpinner from "../../components/common/loading-spinner";
import { EmployeeCardProps } from "../../../@types/profile.type";

type AllProfilePageProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  filteredUsers: EmployeeCardProps[];
  loading: boolean;
};

export default function AllProfilePage({
  query,
  setQuery,
  filteredUsers,
  loading,
}: AllProfilePageProps) {
  return (
    <PageWrapper>
      <div className="bg-slate-100 px-5 md:px-0 xl:px-0">
        <ContainerSectionWrapper>
          <div>
            <div className="flex mb-4">
              <label htmlFor="search" className="sr-only">
                Search profiles
              </label>
              <input
                type="text"
                id="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Search by name, role, company..."
                aria-label="Search profiles by name, role or company"
              />
              <button
                onClick={() => setQuery("")}
                className="bg-gray-200 text-gray-700 px-3 py-2 border-l border-gray-300 hover:bg-gray-300"
                aria-label="Clear search"
                title="Clear"
              >
                Clear
              </button>
            </div>
          </div>
          <div className="relative">
            {loading && <LoadingSpinner />}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
              {filteredUsers.map((user) => (
                <Card {...user} key={user.id} />
              ))}
            </div>
          </div>
        </ContainerSectionWrapper>
      </div>
    </PageWrapper>
  );
}
