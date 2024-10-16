# ใช้ Node.js เวอร์ชัน 16 เป็น base image
FROM node:16

# ตั้งค่า directory สำหรับโค้ด
WORKDIR /app

# คัดลอก package.json และไฟล์ dependencies อื่นๆ
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์โค้ดทั้งหมดไปยัง /app
COPY . .

# เปิดพอร์ต 3000 สำหรับแอปพลิเคชัน
EXPOSE 3000

# คำสั่งสำหรับรันแอปพลิเคชัน
CMD ["npm", "start"]
