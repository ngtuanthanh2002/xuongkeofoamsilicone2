import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const siteUrl = "https://aofeng.vn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Keo Bọt Nở PU Foam AOFENG | AL2 & AM2 Chính Hãng",
    template: "%s | AOFENG PU Foam",
  },
  description:
    "Keo bọt nở PU Foam AOFENG AL2 & AM2 chính hãng – độ nở cao, bám dính cực mạnh, cách âm, cách nhiệt, chống thấm. Chuyên dụng cho cửa, tấm ốp tường. Giá chỉ từ 79.000đ, miễn phí vận chuyển toàn quốc.",
  keywords: [
    "keo bọt nở",
    "PU foam",
    "keo PU foam AOFENG",
    "keo AL2",
    "keo AM2",
    "keo dán cửa",
    "keo dán tấm ốp tường",
    "keo bọt nở chống cháy",
  ],
  authors: [{ name: "AOFENG" }],
  creator: "AOFENG",
  publisher: "AOFENG",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "AOFENG PU Foam",
    title: "Keo Bọt Nở PU Foam AOFENG | AL2 & AM2 Chính Hãng",
    description:
      "Keo bọt nở PU Foam AOFENG – độ nở cao, bám dính cực mạnh, cách âm cách nhiệt chống thấm. Chuyên dụng cho cửa & tấm ốp tường.",
    images: [
      {
        url: "/images/banner/1.png",
        width: 683,
        height: 1024,
        alt: "Keo bọt nở PU Foam AOFENG AM2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keo Bọt Nở PU Foam AOFENG | AL2 & AM2 Chính Hãng",
    description:
      "Keo bọt nở PU Foam AOFENG – độ nở cao, bám dính cực mạnh, cách âm cách nhiệt chống thấm.",
    images: ["/images/banner/1.png"],
  },
  icons: {
    icon: "/images/icona.png",
    shortcut: "/images/icona.png",
    apple: "/images/icona.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#003676",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Keo Bọt Nở PU Foam AOFENG (AL2 & AM2)",
  image: [`${siteUrl}/images/banner/1.png`],
  description:
    "Keo bọt nở PU Foam AOFENG AL2 & AM2 – độ nở cao, bám dính cực mạnh, cách âm, cách nhiệt, chống thấm, chống cháy B2.",
  brand: {
    "@type": "Brand",
    name: "AOFENG",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "VND",
    lowPrice: "79000",
    highPrice: "918000",
    offerCount: "10",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1280",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
