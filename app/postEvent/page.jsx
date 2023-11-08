"use client";
import { useState } from "react";
import { ref, child, push, update } from "firebase/database";
import { db } from "@/utils/firebaseInit";

const PostEvent = () => {
  const [formData, setFormData] = useState({
    city: "",
    seasons: "",
    name: "",
    period: "",
    location: "",
    picture: "",
    feature: "",
    station: "",
    link: "",
    description: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const newKey = push(child(ref(db), "event")).key;
      await update(ref(db), {
        ["event/" + newKey]: {
          city: formData.city,
          seasons: formData.seasons,
          name: formData.name,
          period: formData.period,
          location: formData.location,
          picture: formData.picture,
          feature: formData.feature,
          station: formData.station,
          link: formData.link,
          description: formData.description,
        },
      });
    } catch (error) {
      console.error("Post new Event error:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="py-10 px-20 mt-20">
      <div>
        <p className="text-3xl font-bold mb-10 ">祭典情報新增</p>
        <p className="font-bold mb-5 text-xl">
          若你有最新的日本祭典情報，歡迎分享給我們!
        </p>
        <form
          onSubmit={handleFormSubmit}
          method="post"
          className="w-[250px] h-800 grid text-lg gap-4 sm:[500px] md:w-[700px] md:grid-cols-2 lg:w-[1000px] "
        >
          <label htmlFor="city" className="md:mb-4">
            舉辦城市:
            <select
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="city"
              name="city"
              onChange={handleInputChange}
            >
              <option>城市</option>
              <option>東京</option>
              <option>大阪</option>
              <option>北海道</option>
              <option>其他</option>
            </select>
          </label>
          <label htmlFor="seasons" className="md:mb-4">
            舉辦季節:
            <select
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="seasons"
              name="seasons"
              onChange={handleInputChange}
            >
              <option>請選擇</option>
              <option>春天</option>
              <option>夏天</option>
              <option>秋天</option>
              <option>冬天</option>
            </select>
          </label>
          <label htmlFor="name" className="md:mb-4">
            祭典名稱:
            <input
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="period" className="md:mb-4">
            舉辦月份:
            <input
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="period"
              name="period"
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="location" className="md:mb-4">
            舉辦地點:
            <input
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="location"
              name="location"
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="picture" className="md:mb-4">
            祭典照片:
            <input
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="picture"
              name="picture"
              onChange={handleInputChange}
            />
            <p className="text-sm text-gray-500 ">
              提供的照片需為提供者擁有權或網路上免費使用的照片。
              <br />
              若沒有照片可省略。
            </p>
          </label>
          <label htmlFor="feature" className="md:mb-4">
            祭典特色:
            <select
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="feature"
              name="feature"
              onChange={handleInputChange}
            >
              <option>請選擇</option>
              <option>賞花</option>
              <option>夜間賞花</option>
              <option>賞楓</option>
              <option>煙火大會</option>
              <option>神社祭典</option>
              <option>夏日祭典</option>
              <option>點燈活動</option>
              <option>聖誕活動</option>
              <option>其他</option>
            </select>
          </label>

          <label htmlFor="station" className="md:mb-4">
            交通:
            <input
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="station"
              name="station"
              onChange={handleInputChange}
            />
            <p className="text-sm text-gray-500 ">請提供鄰近的車站與路線名。</p>
          </label>
          <label htmlFor="link" className="md:mb-4">
            官方連結:
            <input
              className="bg-yellow-500 rounded-md text-white w-full h-8"
              type="text"
              id="link"
              name="link"
              onChange={handleInputChange}
            />
          </label>
          <div>
            <label htmlFor="description" className="md:mb-4">
              簡述:
              <textarea
                className="bg-yellow-500 rounded-md text-white w-full h-[80px] resize-none"
                type="text"
                id="description"
                name="description"
                onChange={handleInputChange}
              />
            </label>
          </div>
          <button
            className="mt-10 w-40 h-10 rounded-lg bg-yellow-500 text-white font-bold text-lg"
            type="submit"
          >
            確認送出
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostEvent;
