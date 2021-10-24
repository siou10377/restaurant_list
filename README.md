# 餐廳清單 

提供使用者建立屬於自己的餐廳清單，將自己喜歡的餐廳資訊輸入，有需要的時候依分類查詢

## 專案功能

1.使用者可以新增一家餐廳
2.使用者可以瀏覽一家餐廳的詳細資訊
3.使用者可以瀏覽全部所有餐廳
4.使用者可以修改一家餐廳的資訊
5.使用者可以刪除一家餐廳
6.使用者可以註冊帳號
7.使用者也可以透過 Facebook Login 直接登入
8.使用者必須登入才能使用餐廳清單
9.使用者登出、註冊失敗、或登入失敗時，使用者都會在畫面上看到正確而清楚的系統訊息

## 建置環境

* node.js: ^10.15.0
* express: ^4.17.1
* express-handlebars: ^5.3.2
* mongoose: ^5.13.5
* mongoDB: ^4.2.14

## 安裝流程

1.藉由 git clone 將專案下載至本地
git clone https://github.com/siou10377/restaurant_list.git
2.進入專案資料夾
cd restaurant_list
3.安裝套件
npm install
4.加入種子資料
npm run seed
5.啟動網頁伺服器
npm run dev
6.出現下列訊息，表示啟動成功，可點選連結開啟網頁
The server is running on http://localhost:3000
