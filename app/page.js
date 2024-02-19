import Card from "../components/card";

export default async function Home() {
  return (
    <div>
      <div>
        <div className="w-full  mt-10 hero-img ">
          <div className="px-4 w-full h-full bg-black/60 flex flex-col justify-center  ">
            <h1 className="font-bold text-white text-3xl text-left  md:text-5xl md:text-center">
              Make your journey even better!
            </h1>
            <br />
            <p className="font-bold text-white text-2xl text-left md:text-2xl md:text-center ">
              找尋在你旅遊期間舉辦的祭典，讓旅程更添增美好回憶!
            </p>
          </div>
        </div>
        <div className="w-full min-w-full flex flex-col items-center my-10 ">
          <p className="text-2xl font-bold my-6 md:text-2xl  md:my-3">
            近期祭典:
          </p>

          <div className="p-4 grid grid-rows-4 gap-4 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:gap-8 xl:grid-rows-1">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
