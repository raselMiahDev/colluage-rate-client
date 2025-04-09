import { useNavigate } from "react-router-dom";
export function useHeaderController() {
  const navigate = useNavigate()

  const searchColleague = (query: string) => {
    const trimmedQuery = query.trim()
    if (trimmedQuery === "") {
      alert("Please enter a name to search")
      return
    }
    navigate(`/search-result?search=${encodeURIComponent(trimmedQuery)}`);
  }


  return { searchColleague };
}
