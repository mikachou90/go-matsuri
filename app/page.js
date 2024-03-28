import CurrentEvents from "../components/CurrentEvents";
import IntroCards from "../components/IntroCards";
import introText from "../app/introText";

export default function Home() {
  return (
    <>
      <div>
        <section className="w-full mt-10 hero-img ">
          <div className="px-4 w-full h-full bg-black/60 flex flex-col justify-center  ">
            <h1 className="font-bold text-white text-3xl text-left  md:text-5xl md:text-center">
              Make your journey even better!
            </h1>
            <br />
            <p className="font-bold text-white text-2xl text-left md:text-2xl md:text-center ">
              找尋在你旅遊期間舉辦的祭典，讓旅程更添增美好回憶!
            </p>
          </div>
        </section>
        <section className="border-2 border-green-800 flex flex-col items-center my-10 p-5">
          <div className="mb-5 ">
            <h1 className="text-2xl my-6 font-bold md:text-3xl md:my-3">
              搜尋、分享、儲存喜歡的祭典!
            </h1>
          </div>
          <div className="p-5 md:flex md:justify-center md:items-center">
            {introText.map((data) => {
              return (
                <IntroCards
                  key={data.id}
                  src={data.link}
                  intro={data.intro}
                  title={data.title}
                  pageLink={data.pageLink}
                />
              );
            })}
          </div>
        </section>
        <section className="border-2 border-red-500 flex flex-col items-center my-10 p-5 ">
          <h1 className="text-2xl font-bold my-6 md:text-3xl  md:my-3">
            當季祭典
          </h1>
          <CurrentEvents />
        </section>
      </div>
    </>
  );
}
