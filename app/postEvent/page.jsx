"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ref, child, push, update } from "firebase/database";
import { getDb } from "../../utils/firebaseInit";

const PostEvent = () => {
  const [formData, setFormData] = useState({
    city: "",
    season: "",
    name: "",
    period: "",
    location: "",
    picture: "",
    feature: "",
    station: "",
    link: "",
    description: "",
    isMyFav: false,
  });

  const router = useRouter();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const db = getDb();
      const newKey = push(child(ref(db), "events")).key;
      await update(ref(db), {
        ["events/" + newKey]: {
          city: formData.city,
          season: formData.season,
          name: formData.name,
          period: formData.period,
          location: formData.location,
          picture: formData.picture,
          feature: formData.feature,
          station: formData.station,
          link: formData.link,
          description: formData.description,
          id: newKey,
          isMyFav: false,
        },
      });
      alert("祭典新增成功");
      router.push("/events");
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
    <div id="postEventPage">
      <section id="postPageBanner">
        <div className="w-[70%] h-[60%] bg-white/80 p-2  rounded-xl flex flex-col justify-center items-center relative">
          <p className="font-bold text-xs sm:text-lg xl:text-2xl">
            若你有最新的日本祭典情報，歡迎分享給我們
          </p>
          <h1 className="font-bold text-2xl py-1 sm:text-3xl sm:py-5 xl:text-5xl ">
            提供祭典
          </h1>
        </div>
      </section>
      <div id="layoutContainer">
        <h1 className="my-3 text-base md:text-lg lg:text-xl">提供情報</h1>
        <form
          onSubmit={handleFormSubmit}
          method="post"
          className="w-[250px] md:w-[700px] lg:w-[1000px] h-800 "
        >
          <div className=" grid text-lg gap-4  md:grid-cols-2  ">
            <label htmlFor="city" className="md:mb-4">
              請選擇舉辦城市:
              <select
                className="bg-yellow-500 rounded-md text-white w-full h-8"
                type="text"
                id="city"
                name="city"
                onChange={handleInputChange}
              >
                <option>Tokyo</option>
                <option>Osaka</option>
                <option>Kyoto</option>
                <option>Hokkaido</option>
                <option>Others</option>
              </select>
            </label>
            <label htmlFor="season" className="md:mb-4">
              請選擇舉辦季節:
              <select
                className="bg-yellow-500 rounded-md text-white w-full h-8"
                type="text"
                id="season"
                name="season"
                onChange={handleInputChange}
              >
                <option>spring</option>
                <option>summer</option>
                <option>autumn</option>
                <option>winter</option>
              </select>
            </label>
            <label htmlFor="name" className="md:mb-4">
              祭典名稱:
              <input
                className="bg-yellow-500 rounded-md text-white w-full h-8"
                type="text"
                id="name"
                name="name"
                minLength="2"
                maxLength="15"
                onChange={handleInputChange}
                required
              />
            </label>
            <label htmlFor="period" className="md:mb-4">
              請選擇舉辦月份:
              <select
                className="bg-yellow-500 rounded-md text-white w-full h-8"
                type="text"
                id="period"
                name="period"
                onChange={handleInputChange}
              >
                <option>1月</option>
                <option>2月</option>
                <option>3月</option>
                <option>4月</option>
                <option>5月</option>
                <option>6月</option>
                <option>7月</option>
                <option>8月</option>
                <option>9月</option>
                <option>10月</option>
                <option>11月</option>
                <option>12月</option>
              </select>
            </label>
            <label htmlFor="location" className="md:mb-4">
              舉辦地點:
              <input
                className="bg-yellow-500 rounded-md text-white w-full h-8"
                type="text"
                id="location"
                name="location"
                minLength="2"
                maxLength="15"
                onChange={handleInputChange}
                required
              />
            </label>

            <label htmlFor="feature" className="md:mb-4">
              請選擇祭典特色:
              <select
                className="bg-yellow-500 rounded-md text-white w-full h-8"
                type="text"
                id="feature"
                name="feature"
                onChange={handleInputChange}
              >
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
                minLength="2"
                maxLength="15"
                onChange={handleInputChange}
                required
              />
              <p className="text-sm text-gray-500 ">
                請提供鄰近的車站與路線名。
              </p>
            </label>
            <label htmlFor="link" className="md:mb-4">
              祭典相關連結:
              <input
                className="bg-yellow-500 rounded-md text-white w-full h-8"
                type="url"
                id="link"
                name="link"
                onChange={handleInputChange}
                required
              />
            </label>
          </div>

          <div>
            <label htmlFor="description" className="text-lg">
              簡述(10-500字):
              <textarea
                className="bg-yellow-500 rounded-md text-white w-full h-[80px] resize-none"
                type="text"
                id="description"
                name="description"
                minLength="10"
                maxLength="500"
                onChange={handleInputChange}
                required
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
