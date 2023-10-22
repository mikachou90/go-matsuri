import Image from "next/image";

const page = () => {
  return (
    <div className="mt-20 global-padding">
      <div>
        <div>
          <h1 className="text-3xl ">關於本站</h1>
          <div className="my-10 grid grid-cols-2 gap-5">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1652584373395-6fb5a7510ada?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={800}
                height={300}
                alt="about picture"
              />
            </div>
            <div className="flex items-center">
              <p className="text-xl">
                走訪過許多國家，深切體會一個祭典、一個活動都是可以接觸一個國家文化的方式，為了不浪費旅行的意義，就從參與祭典開始吧!
                <br />
                同時也歡迎提供更多日本在地祭典/活動的情報，讓台日交流能夠更加熱烈!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
