# ใช้ Node.js เป็น Base Image
FROM node:18-alpine AS build

# ตั้งค่าโฟลเดอร์ทำงาน
WORKDIR /app

# คัดลอกไฟล์ package.json และติดตั้ง dependencies
COPY package.json ./
RUN npm install

# คัดลอกโค้ดแอปพลิเคชันและสร้าง
COPY . .
RUN npm run build

# ใช้ NGINX เป็น Base Image สำหรับให้บริการไฟล์
FROM nginx:1-alpine-slim

# คัดลอกไฟล์ที่สร้างจากขั้นตอนก่อนหน้าไปที่ NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# ตั้งค่า NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf

# เปิดพอร์ตที่ NGINX ใช้งาน
EXPOSE 80

# รัน NGINX
CMD ["nginx", "-g", "daemon off;"]
