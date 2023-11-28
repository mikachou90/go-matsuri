import React from "react";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <div className="mt-20 w-full flex flex-col items-center">
        <div className="w-[50%]  flex flex-col items-center py-10">
          <form action="" className="flex flex-col items-center my-5">
            <h1 className="text-2xl text-font mt-5">Login</h1>
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

            <button className="mt-10 bg-yellow-500 w-[100px] h-[35px] text-lg text-white font-bold rounded-lg">
              送出
            </button>
          </form>
          <div className="mt-5 text-sm text-gray-500 font-bold flex w-[300px] justify-end sm:w-[350px]">
            <Link className="mx-2" href="/register">
              尚未註冊
            </Link>
            <Link className="mx-2" href="/">
              回首頁
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
