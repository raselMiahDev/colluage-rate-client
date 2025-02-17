import { useNavigate } from "react-router-dom";
export function useHeaderController() {
  const navigate = useNavigate()
  const searchColleague = (query: string) => {
    if (query.trim() !== " ") {
      navigate(`/search-result?search=${encodeURIComponent(query)}`);
    }
  };

  return { searchColleague };
}
