# 使用 Node.js 的官方 LTS 版本作為基底映像
FROM node:18-alpine
# 安裝編譯所需的工具
RUN apk add --no-cache make gcc g++ python3
# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json 安裝依賴
COPY package*.json ./

# 安裝所有依賴
RUN npm install --legacy-peer-deps

# 複製所有原始碼到容器
COPY . .

# 建置應用程式
RUN npm run build

# 設定環境變數
ENV NODE_ENV=production
ENV PORT=3000

# # 執行 Sequelize Migrate 和 Seed
# RUN npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all

# 對外暴露服務埠
EXPOSE 3000

# 啟動應用程式
# CMD ["node", "dist/main"]
