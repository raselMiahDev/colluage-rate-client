import { EmployeeCardProps } from "./profile.type";
export type AllProfilePageProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  filteredUsers: EmployeeCardProps[];
  loading: boolean;
};