import React from "react";

const PostEvent = () => {
  return (
    <div className="py-10 px-20 mt-20">
      <div>
        <p className="text-3xl font-bold mb-10 ">祭典情報新增</p>
        <p className="font-bold mb-5 text-xl">
          若你有最新的日本祭典情報，歡迎分享給我們!
        </p>
        <form
          action=""
          method="post"
          className="w-[250px] h-800 grid text-lg gap-4 sm:[500px] md:w-[700px] md:grid-cols-2 lg:w-[1000px] "
        >
          <label for="city" className="md:mb-4">
            舉辦城市:
            <input
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="city"
              name="city"
            />
          </label>
          <label for="seasons" className="md:mb-4">
            舉辦季節:
            <input
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="seasons"
              name="seasons"
            />
          </label>
          <label for="name" className="md:mb-4">
            祭典名稱:
            <input
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="name"
              name="name"
            />
          </label>
          <label for="period" className="md:mb-4">
            舉辦月份:
            <input
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="period"
              name="period"
            />
          </label>
          <label for="location" className="md:mb-4">
            舉辦地點:
            <input
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="location"
              name="location"
            />
          </label>
          <label for="picture" className="md:mb-4">
            祭典照片:
            <input
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="picture"
              name="picture"
            />
            <p className="text-sm text-gray-500 ">
              提供的照片需為提供者擁有權或網路上免費使用的照片。
              <br />
              若沒有照片可省略。
            </p>
          </label>
          <label for="feature" className="md:mb-4">
            祭典特色:
            <input
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="feature"
              name="feature"
            />
            <p className="text-sm text-gray-500 ">
              例如:賞花、煙火大會、神社祭典等。
            </p>
          </label>
          <label for="station" className="md:mb-4">
            交通:
            <input
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="station"
              name="station"
            />
            <p className="text-sm text-gray-500 ">請提供鄰近的車站與路線名。</p>
          </label>
          <label for="link" className="md:mb-4">
            官方連結:
            <input
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="link"
              name="link"
            />
          </label>
          <label for="description" className="md:mb-4">
            簡述:
            <input
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="description"
              name="description"
            />
          </label>
        </form>
        <button
          className="mt-10 w-40 h-10 rounded-lg bg-yellow-500 text-white font-bold text-lg"
          type="submit"
        >
          確認送出
        </button>
      </div>
    </div>
  );
};

export default PostEvent;
