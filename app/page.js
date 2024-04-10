import Image from "next/image";
import CurrentEvents from "../components/CurrentEvents";
import IntroCards from "../components/IntroCards";
import introText from "../app/introText";

export default function Home() {
  return (
    <div id="mainPage">
      <section id="mainPageBanner">
        <div className="w-[70%] h-[60%] bg-white/80 p-2  rounded-xl flex flex-col justify-center items-center relative">
          <h1 className="font-bold text-2xl py-1 sm:text-3xl sm:py-5 xl:text-5xl xl:py-10">
            深度探索
          </h1>
          <p className="font-bold text-xs sm:text-lg xl:text-3xl">
            找尋與分享在旅途中的美好體驗!
          </p>
        </div>
      </section>
      <section id="greetSection" className="p-10 mt-10">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center  font-bold">
            <h1 id="titleStyle">About</h1>
            <p className="text-base text-center md:text-lg md:leading-8">
              一個祭典、一個活動都是可以接觸一個國家文化的方式
              <br />
              為更豐富旅行的意義，就從參與祭典開始吧!
            </p>
            <div className="my-5 w-[20vw] h-[5vh] flex justify-evenly items-center ">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>

          <div className="relative">
            <div className="p-10 bg-stone-100 shadow-md flex flex-col items-center  justify-center text-center leading-1 text-sm md:text-base md:leading-6 lg:leading-loose">
              「Matsuri」一詞為日文「祭典」之意
              <br />
              這是專為旅行愛好者打造的網站
              <br />
              提供搜尋和分享各種祭典資訊的平台
              <br />
              這個平台不僅是一個資訊庫，更是一個共享和交流的社區。
              <br />
              無論您是想獨自探索，還是與他人分享您的旅程
              <br />
              「Go Matsuri」都是您不容錯過的旅行好幫手。
              <br />
              快來加入我們，探索日本有趣的祭典世界！
            </div>
          </div>
        </div>
      </section>
      <section
        id="currentEventSection"
        className="flex flex-col items-center p-10 mt-10 bg-amber-100"
      >
        <h1
          id="titleStyle"
          className="mt-5 mb-10  text-2xl font-bold md:text-3xl "
        >
          What&rsquo;s now
        </h1>
        <CurrentEvents />
      </section>
      <section className="flex flex-col items-center p-10 mt-10">
        <h1
          id="titleStyle"
          className="mt-5 mb-10  text-2xl font-bold md:text-3xl "
        >
          How to start
        </h1>

        <div className="sm:flex sm:justify-center sm:items-center">
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
    </div>
  );
}
