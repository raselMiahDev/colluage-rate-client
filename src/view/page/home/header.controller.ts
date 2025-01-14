export function useHeaderController() {
    const searchColleague = (query: string) => {
      if (!query) {
        console.warn("Search query is empty");
        return;
      }
      // Simulate a search API call or business logic
      console.log(`Searching for colleague: ${query}`);
      // Example: Redirect or update state with search results
    };
  
    return { searchColleague };
  }
  