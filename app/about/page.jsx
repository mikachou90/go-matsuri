import Image from "next/image";

const page = () => {
  return (
    <div className="mt-20 px-20 py-10">
      <div>
        <div className=" w-[260px] sm:w-[500px] md:w-[600px] lg:w-[900px]">
          <h1 className="text-3xl font-bold ">關於Go Matsuri</h1>
          <div className="mt-10 ">
            <Image
              src="/event-shot.jpg"
              height={40}
              width={250}
              alt="event image"
              className="sm:w-full sm:h-60 object-cover"
            />
            <div className="text-2xl font-bold my-10 text-zinc-600 ">
              <p className="leading-10 mb-5">Make your journey even better!</p>
              <p className="leading-10 ">
                一個祭典、一個活動都是可以接觸一個國家文化的方式
                <br />
                為更豐富旅行的意義，就從參與祭典開始吧!
              </p>
            </div>

            <p className="text-xl leading-10 ">
              「Matsuri」一詞為日文「祭典」之意，日本人相信神靈存在於萬物之中。為了感謝自然和神明、對生活感到喜悅並發展社區，而舉辦了各種祭典，這也是為什麼日本人非常喜歡祭典。
              <br />
              了解祭典即了解日本。透過參與祭典，你可以接觸平時難以見到的歷史，與在地人互動，發現新的一面。在祭典期間，人們變得非常熱情開放，你還有機會參與祭典時期才有的交流活動。若有機會，在你的旅行中試著參加各種祭典，感受日本的活力吧!
              <br />
              同時也歡迎提供更多日本在地祭典/活動的情報，讓台日交流能夠更加熱烈!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
