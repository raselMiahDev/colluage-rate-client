import { useEffect, useMemo, useState } from "react";
import AllProfilePage from "./all-profile.page";
import { users } from "../../../constants/data";

export default function AllProfileController() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // initial loading
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(t);
  }, []);

  const filteredUsers = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return users;
    return users.filter((u) => {
      return (
        u.name.toLowerCase().includes(q) ||
        u.currentRole.toLowerCase().includes(q) ||
        u.company.toLowerCase().includes(q)
      );
    });
  }, [query]);

  // debounce to show loader briefly during searches
  useEffect(() => {
    if (query === "") return;
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(t);
  }, [query]);

  return (
    <AllProfilePage
      query={query}
      setQuery={setQuery}
      filteredUsers={filteredUsers}
      loading={loading}
    />
  );
}
