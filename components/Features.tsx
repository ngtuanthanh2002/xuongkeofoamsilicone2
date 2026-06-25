import Image from "next/image";

type Banner = {
  src: string;
  alt: string;
  width: number;
  height: number;
  // Ảnh riêng cho mobile (tỉ lệ dọc) — nếu có sẽ hiển thị dưới breakpoint md
  mobileSrc?: string;
  mobileWidth?: number;
  mobileHeight?: number;
};

// Poster chính (dọc)
const poster: Banner = {
  src: "/images/banner/1.png",
  alt: "Keo bọt nở PU Foam AOFENG AM2 - chuyên dụng cho cửa và dán tấm ốp tường",
  width: 1024,
  height: 1536,
};

// Các banner đặc điểm — đã thiết kế sẵn, hiển thị trọn ảnh
const banners: Banner[] = [
  {
    src: "/images/banner/2.png",
    alt: "So sánh keo AM2 với sản phẩm thông thường - đặc điểm sản phẩm",
    width: 1774,
    height: 887,
    mobileSrc: "/images/banner/2(mobile).png",
    mobileWidth: 1024,
    mobileHeight: 1536,
  },
  {
    src: "/images/banner/3.png",
    alt: "Lỗ bọt đều, chống nước tốt, cách nhiệt hiệu quả",
    width: 1402,
    height: 1122,
  },
  {
    src: "/images/banner/4.png",
    alt: "Độ bám dính cao, đảm bảo cửa vững chắc",
    width: 1146,
    height: 1373,
  },
  {
    src: "/images/banner/5.png",
    alt: "Test độ cứng - bền vững chắc chắn, chịu lực tốt",
    width: 1254,
    height: 1254,
  },
];

const imgClass =
  "h-auto w-full rounded-2xl shadow-card ring-1 ring-slate-100 transition-transform duration-500 hover:-translate-y-1 hover:shadow-soft";

function BannerImage({ b, priority }: { b: Banner; priority?: boolean }) {
  if (b.mobileSrc) {
    return (
      <>
        <Image
          src={b.mobileSrc}
          alt={b.alt}
          width={b.mobileWidth ?? b.width}
          height={b.mobileHeight ?? b.height}
          sizes="100vw"
          priority={priority}
          className={`${imgClass} md:hidden`}
        />
        <Image
          src={b.src}
          alt={b.alt}
          width={b.width}
          height={b.height}
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority={priority}
          className={`${imgClass} hidden md:block`}
        />
      </>
    );
  }

  return (
    <Image
      src={b.src}
      alt={b.alt}
      width={b.width}
      height={b.height}
      sizes="(max-width: 768px) 100vw, 50vw"
      priority={priority}
      className={imgClass}
    />
  );
}

export default function Features() {
  return (
    <>
      {/* 1) Poster chính + Video thực tế */}
      <section id="video" className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container-page">
          {/* Poster 1.png */}
          <div className="mx-auto max-w-2xl">
            <BannerImage b={poster} priority />
          </div>

          {/* Video thực tế */}
          <div className="mx-auto mt-14 max-w-3xl text-center sm:mt-16">
            <span className="eyebrow">Trải nghiệm thực tế</span>
            <h2 className="section-title mt-2">Video thực tế</h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Xem hướng dẫn sử dụng và hiệu quả thi công keo bọt nở AOFENG.
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl bg-slate-900 p-2 shadow-soft ring-1 ring-slate-200 sm:p-3">
              <video
                controls
                playsInline
                preload="metadata"
                className="mx-auto max-h-[78vh] w-full max-w-full rounded-2xl bg-black object-contain"
              >
                <source src="/images/video/hdsd.mp4" type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ phát video.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Đặc điểm sản phẩm */}
      <section id="dac-diem" className="bg-slate-50 py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Đặc điểm nổi bật</span>
            <h2 className="section-title mt-2">Đặc điểm sản phẩm</h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Chọn đúng sản phẩm — an tâm chất lượng — bền vững theo thời gian.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl space-y-5 sm:space-y-6">
            {/* Banner so sánh (ngang lớn / dọc trên mobile) */}
            <BannerImage b={banners[0]} />

            {/* Cấu trúc bọt + bám dính */}
            <div className="grid items-start gap-5 sm:gap-6 md:grid-cols-2">
              <BannerImage b={banners[1]} />
              <BannerImage b={banners[2]} />
            </div>

            {/* Test độ cứng */}
            <div className="mx-auto max-w-3xl">
              <BannerImage b={banners[3]} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
