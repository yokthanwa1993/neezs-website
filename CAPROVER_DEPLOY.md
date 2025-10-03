# CapRover Deployment Guide

## การ Deploy โปรเจค Next.js นี้บน CapRover

### ไฟล์ที่จำเป็น
โปรเจคนี้มีไฟล์ที่จำเป็นสำหรับ CapRover แล้ว:
- ✅ `captain-definition` - ไฟล์กำหนดค่า CapRover
- ✅ `Dockerfile` - สำหรับ build Docker image
- ✅ `.dockerignore` - ระบุไฟล์ที่ไม่ต้อง copy เข้า Docker image
- ✅ `next.config.mjs` - เปิดใช้งาน standalone output

### วิธีการ Deploy

#### Option 1: Deploy ผ่าน Git (แนะนำ)

1. **เชื่อมต่อ GitHub กับ CapRover:**
   - เข้าสู่ CapRover Dashboard
   - ไปที่แอปของคุณ
   - เลือก "Deployment" tab
   - เลือก "Method 3: Deploy from Github/Bitbucket/Gitlab"
   - เชื่อมต่อ GitHub repository: `yokthanwa1993/neezs-website`
   - เลือก branch: `main`
   - กด "Save & Update"

2. **ตั้งค่า Auto Deploy (Optional):**
   - เปิดใช้งาน "Enable App Token"
   - Copy webhook URL
   - ไปที่ GitHub repository settings → Webhooks → Add webhook
   - วาง URL และเลือก "Just the push event"

#### Option 2: Deploy ผ่าน CLI

1. **ติดตั้ง CapRover CLI:**
   ```bash
   npm install -g caprover
   ```

2. **Login CapRover:**
   ```bash
   caprover login
   ```
   - ใส่ CapRover URL, Password, และชื่อ machine

3. **Deploy แอป:**
   ```bash
   caprover deploy
   ```
   - เลือกแอปที่ต้องการ deploy
   - รอจนกว่า build และ deploy เสร็จ

#### Option 3: Deploy ผ่าน Tarball

1. **สร้าง tarball:**
   ```bash
   tar -czf deploy.tar.gz --exclude='node_modules' --exclude='.git' .
   ```

2. **Upload ใน CapRover Dashboard:**
   - ไปที่ "Deployment" tab
   - เลือก "Method 2: Upload tarball"
   - Upload ไฟล์ `deploy.tar.gz`

### Environment Variables (ถ้าจำเป็น)

ถ้าโปรเจคของคุณใช้ environment variables:
1. ไปที่ CapRover Dashboard → App → "App Configs"
2. เพิ่ม Environment Variables:
   ```
   NODE_ENV=production
   NEXT_PUBLIC_API_URL=your_api_url
   # เพิ่ม variables อื่นๆ ตามต้องการ
   ```

### การตั้งค่าเพิ่มเติม

#### Port Configuration
- แอปจะ run บน port 3000 (ตั้งค่าไว้ใน Dockerfile แล้ว)
- CapRover จะ auto-map ไปที่ domain ของคุณ

#### SSL/HTTPS
- เปิดใช้งาน SSL/HTTPS ใน CapRover Dashboard → "HTTP Settings"
- CapRover จะติดตั้ง Let's Encrypt certificate อัตโนมัติ

#### Custom Domain
- ไปที่ "HTTP Settings"
- เพิ่ม custom domain
- ตั้งค่า DNS record ชี้ไปที่ CapRover server

### Troubleshooting

#### Build ล้มเหลว
1. ตรวจสอบ logs ใน CapRover Dashboard
2. ตรวจสอบว่า `pnpm-lock.yaml` มีอยู่ในโปรเจค
3. ตรวจสอบ memory ของ server (Next.js build ต้องการ memory พอสมควร)

#### แอปไม่ start
1. ตรวจสอบ logs ว่า build เสร็จสมบูรณ์
2. ตรวจสอบว่ามี `.next/standalone` directory ถูกสร้างขึ้น
3. ตรวจสอบ environment variables

### Performance Tips

1. **Memory Settings:**
   - แนะนำให้ตั้งค่า container memory อย่างน้อย 1GB
   - ไปที่ "App Configs" → "Container Memory" → ตั้งค่า 1024MB ขึ้นไป

2. **Restart on Fail:**
   - เปิดใช้งาน "Enable App Restart on Crash"

3. **Health Check:**
   - ตั้งค่า health check path เป็น `/` หรือ `/api/health` (ถ้ามี)

## เสร็จแล้ว! 🚀

หลังจาก deploy สำเร็จ คุณจะสามารถเข้าถึงเว็บไซต์ของคุณได้ที่:
```
https://your-app-name.your-caprover-domain.com
```
