# TrashTalkGenerator 垃圾話產生器
根據選取職業，噴出相對應的垃圾話

# 功能
+ 可點選圖片或是radio方塊選取職業
+ Generate Trash Talk送出產生一句垃圾話

## 相關安裝
1. 開啟terminal(終端機)，作業目錄下執行：
   ```
   git clone https://github.com/jofu1123/TrashTalkGenerator.git
   ```
2. 移動至目錄trashtalk_generator
   ```
   cd trashtalk_generator
   ```
3. 使用npm安裝相關套件
   ```
   npm install
   ```
4. 輸入指令啟動本機伺服器
   ```
   nodemon app.js
   ```
   出現Express is listening on localhost:3000即成功，並移置 http://localhost:3000 顯示結果

# 預覽畫面
![index](https://github.com/jofu1123/TrashTalkGenerator/blob/master/photo/index.jpg)
# 使用工具
 + [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) -開發code環境
 + [Express](https://www.npmjs.com/package/express) -應用程式架構
 + [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) -使用模板引擎
 + [Body-Parser](https://www.npmjs.com/package/body-parser) -處理URLencoded格式的請求
