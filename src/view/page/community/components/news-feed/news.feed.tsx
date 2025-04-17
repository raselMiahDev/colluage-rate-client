import NewsFeedCard from "./news-feed-card";
import Story from "./story";

const NewsFeed = () => {
  return (
    <div className="space-y-4 px-5 md:px-0">
      {/* Search bar  */}
      <div>
        <input
          type="text"
          placeholder="Quick search for anything"
          className="w-full border p-4 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/*Story- News feed section */}
      <div>
        <Story />
      </div>
      {/*Create- News feed section */}
      <div>
        <input
          type="text"
          placeholder="Start Writing your story..."
          className="w-full border p-6 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* News feed card section */}
      <NewsFeedCard />
      <NewsFeedCard />
      <NewsFeedCard />
      <NewsFeedCard />
    </div>
  );
};

export default NewsFeed;
