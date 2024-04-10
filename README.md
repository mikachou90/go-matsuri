## Go Matsuri 日本祭典網站

### Live Demo https://go-matsuri-demo.vercel.app/

![image](/app/assets/RWD_mockup.png)

Last updated: 04/10/2024
近期更新: 04/10/2024

## Introduction 介紹

This is my first side project which is created with React, Next.js, Tailwind css and firebase.

【Project Concept】  
Due to my past experiences in travel services and self-guided trips, I hope to share the festivals I have encountered during my journeys with people who love traveling on this website. By doing so, I aim to provide insights into local cultural experiences for travelers in Japan or people who are planning to travel to Japan. Additionally, I encourage any users to share their own festival experiences or gathered information, thereby fostering a community where we collectively contribute to information sharing.

--

這是我第一個 side project，使用到 React、Next.js、Tailwind css 和 firebase。

【專案構想】  
由於過往在旅遊服務以及自助旅行方面的經驗，希望能透過此網站與喜歡旅行的人分享我在旅途中體驗到的各種祭典，讓大家在日本旅行時能感受當地文化風情，同時其他使用者也可以分享自己體驗到或收集到的祭典情報，如此我們可以一起建立一個情報共享的社群。

## Features 專案

On home page, it will dynamically recommends the first four festivals of the season closest to the users' visiting date.  
首頁會以使用者進入網站的日期來推薦當季前四個祭典。
![image](/app/assets/homePage.png)

--

Users can overview all events in '/events' page. By clicking the filter buttons, the events can be filtered by season and city.
Also, users can like any events by clicking heart icon on the event card and it will show in '/myFavList' page.  
在「祭典一覽」頁面可以瀏覽全部祭典，點選上方篩選按紐可以依照季節和城市來篩選祭典。此外，點擊祭典卡片的愛心 icon 可以將祭典加入「我的祭典」頁面。
![image](/app/assets/eventPage.png)

--

In '/myFavList' page, users can find the events they like. By clicking the filled heart icon, the event will be removed from this page.  
使用者可以在「我的祭典」頁面瀏覽喜愛的祭典。點選實心愛心可以將祭典從頁面移除。
![image](/app/assets/myFavListPage.png)

--

Users can read event detail by clicking event cards.  
點選祭典卡片可以瀏覽祭典詳細資訊。
![image](/app/assets/eventDetailPage.png)

--

Also, users can update events as they want by fill this form. After submitting, the new events will show in the '/events' page.  
在此頁面,使用者可以填寫此表格以新增祭典。新增完後可以在「祭典一覽」看到新增的祭典。
![image](/app/assets/postEventPage.png)

## Getting Started

1.Please ensure that Node.js (18.17.1) and npm are well installed in your local environment.

2.Clone this project.

3.Install

```javascript
npm install
```

4.Run the project

```javascript
npm run dev
```
