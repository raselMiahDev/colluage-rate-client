import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { users } from "../../../constants/data";
export const SearchResultController = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search") || "";
    const [filteredResults, setFilterResults] = useState(users);
    useEffect(() => {
        const results = users.filter(
            (user) =>
                user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.company.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilterResults(results);
    }, [searchQuery]);
    return {
        searchQuery, filteredResults
    }
}