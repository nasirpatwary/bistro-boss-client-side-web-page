const movies = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
  },
  {
    title: "Watch everywhere",
    description:
      "Save your favorites easily and always have something to watch.",
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
  },
  {
    title: "Download your shows to watch offline",
    description:
      "Save your favorites easily and always have something to watch.",
  },
];
const Cart = () => {
  return (
    <>
      <div className="text-center my-10">
        <p className="text-[#e50914]">---Watched---</p>
        <h2 className=" text-gray-300">Tatest Movies Trending </h2>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 my-10 gap-4">
        {movies.map((movie, index) => (
          <div key={index}>
            <div className="card text-white bg-gradient-to-t from-[#1f1424] from-10% via-[#1b1b36] via-30% to-[#1b1b36] to-90% h-44 bg-base-100 card-md shadow-sm">
              <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <p>{movie.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
