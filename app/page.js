import Image from "next/image";
import CurrentEvents from "../components/CurrentEvents";
import IntroCards from "../components/IntroCards";
import introText from "../app/introText";

export default function Home() {
  return (
    <div id="mainPage">
      <section id="bannerSection" className=""></section>
      <section id="greetSection" className="flex flex-col items-center p-10">
        <h1
          id="titleStyle"
          className="mt-5 mb-10 text-2xl font-bold md:text-3xl"
        >
          About
        </h1>
        <p className="px-10 text-lg leading-4  sm:text-xl md:px-20 ">
          「Go
          Matsuri」是一個專為旅行愛好者打造的網站，提供搜尋和分享各種祭典資訊的平台。
          <br />
          無論您是正在計劃前往日本旅行，或是對當地文化感興趣，透過「Go
          Matsuri」，您可以輕鬆搜索到各種祭典活動，從傳統的神社祭典到現代浪漫的燈飾活動，應有盡有。除了搜索功能外，我們還歡迎用戶分享自己的祭典體驗，讓更多人受益。這個平台不僅是一個資訊庫，更是一個共享和交流的社區。無論您是想獨自探索，還是與他人分享您的旅程，「Go
          Matsuri」都是您不容錯過的旅行好幫手。立即加入我們，探索日本有趣的祭典世界！
        </p>
      </section>
      <section
        id="currentEventSection"
        className="flex flex-col items-center p-10 bg-amber-100"
      >
        <h1
          id="titleStyle"
          className="mt-5 mb-10  text-2xl font-bold md:text-3xl "
        >
          當季祭典
        </h1>
        <CurrentEvents />
      </section>
      <section className="flex flex-col items-center p-10">
        <h1
          id="titleStyle"
          className="mt-5 mb-10  text-2xl font-bold md:text-3xl "
        >
          搜尋、分享、儲存喜歡的祭典!
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
