import React from "react";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <div>
      <div className="mt-20 w-full flex flex-col items-center">
        <div className="w-[50%]  flex flex-col items-center py-10">
          <form
            action=""
            className="flex flex-col items-center my-5 p-5 w-[300px] sm:w-[500px] "
          >
            <h1 className="text-2xl text-font">Register</h1>
            <div className="mt-5 flex flex-col">
              <label htmlFor="userName" className="text-lg ">
                使用者名
              </label>
              <input
                className="authInput rounded-sm "
                name="userName"
                id="userName"
                type="text"
              />
            </div>
            <div className="mt-5 flex flex-col">
              <label htmlFor="userEmail" className="text-lg">
                電子信箱
              </label>
              <input
                className="authInput rounded-sm"
                name="userEmail"
                id="userEmail"
                type="text"
              />
            </div>
            <div className="mt-5 flex flex-col">
              <label htmlFor="userAccount" className="text-lg">
                帳號
              </label>
              <input
                className="authInput rounded-sm"
                name="userAccount"
                id="userAccount"
                type="text"
              />
            </div>
            <div className="mt-5 flex flex-col">
              <label htmlFor="userPassword" className="text-lg">
                密碼
              </label>
              <input
                className="authInput rounded-sm"
                name="userPassword"
                id="userPassword"
                type="text"
              />
            </div>
            <div className="mt-5 flex flex-col">
              <label htmlFor="confirmPassword" className="text-lg">
                再次輸入密碼
              </label>
              <input
                className="authInput rounded-sm"
                name="confirmPassword"
                id="confirmPassword"
                type="text"
              />
            </div>
            <button className="mt-10 bg-yellow-500 w-[100px] h-[35px] text-lg text-white font-bold rounded-lg">
              送出
            </button>
          </form>
          <div className="flex justify-end text-sm text-gray-500 font-bold sm:w-[350px]">
            <Link href="/">回首頁</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
