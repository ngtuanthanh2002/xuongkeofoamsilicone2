# AOFENG PU Foam — Landing Page

Landing page chuyên nghiệp cho sản phẩm **Keo Bọt Nở PU Foam AOFENG** (AL2 & AM2),
xây dựng bằng **Next.js (App Router) + TypeScript + Tailwind CSS**. Tối ưu mobile-first,
chuẩn SEO, sẵn sàng deploy lên **Vercel**.

## Tính năng

- Hero section nổi bật với 2 dòng sản phẩm AL2 & AM2
- Section thông tin sản phẩm, đặc điểm nổi bật (dùng ảnh banner), thông số kỹ thuật
- Thư viện hình ảnh thực tế
- Section "Khách hàng nói gì về sản phẩm?"
- Form đặt hàng (gửi tới `/api/order`)
- Header + Footer đầy đủ, nút gọi nổi, hover/cursor pointer
- Màu chủ đạo `#003676` (xanh) + trắng
- SEO: metadata, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`, favicon

## Cài đặt & chạy

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build production

```bash
npm run build
npm run start
```

## Deploy lên Vercel

1. Push code lên GitHub.
2. Vào [vercel.com](https://vercel.com) → New Project → import repo.
3. Vercel tự nhận diện Next.js — bấm **Deploy**.

> Lưu ý: đổi `siteUrl` trong `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`
> sang domain thật trước khi deploy.

## Cấu trúc

```
app/            # App Router (layout, page, api/order, sitemap, robots)
components/     # Header, Hero, Products, Features, Specs, Gallery, Testimonials, OrderForm, Footer
lib/site.ts     # Dữ liệu sản phẩm, giá, thông tin liên hệ
public/images/  # Ảnh sản phẩm, banner, logo, favicon
```

## Kết nối form đặt hàng

Mặc định `app/api/order/route.ts` chỉ log đơn hàng ra console. Khi deploy thật,
hãy nối với Google Sheet / CRM / email/Telegram trong file này.
