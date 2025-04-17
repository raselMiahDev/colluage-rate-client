import Image from "../../../../../assets/avater.svg";
const Story = () => {
  const data = [
    {
      id: 1,
      image: Image,
      name: "Drama",
    },
    {
      id: 2,
      image: Image,
      name: "Concert",
    },
    {
      id: 3,
      image: Image,
      name: "Success story",
    },
    {
      id: 4,
      image: Image,
      name: "Mental health",
    },
    {
      id: 5,
      image: Image,
      name: "working out",
    },
    {
      id: 6,
      image: Image,
      name: "Adventure",
    },
    {
      id: 7,
      image: Image,
      name: "Nature",
    },
    {
      id: 8,
      image: Image,
      name: "challenge",
    },
    {
      id: 9,
      image: Image,
      name: "Travel",
    },
  ];
  return (
    <div className="flex item-center gap-3 overflow-hidden">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center gap-2 relative"
        >
          <div className="w-32 h-36 overflow-hidden border-2 border-white shadow-md ">
            <img
              src={item.image}
              alt="story"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg text-white font-semibold text-center absolute top-16 left-10">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Story;
