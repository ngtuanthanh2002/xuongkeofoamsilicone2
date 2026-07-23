import Image from "next/image";

type Banner = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const poster: Banner = {
  src: "/images/banner/1.jpg",
  alt: "Keo bọt nở PU Foam AOFENG AM2 - chuyên dụng cho cửa và dán tấm ốp tường",
  width: 1020,
  height: 1361,
};

const banners: Banner[] = [
  {
    src: "/images/banner/2.jpg",
    alt: "So sánh keo AM2 với sản phẩm thông thường - đặc điểm sản phẩm",
    width: 1020,
    height: 858,
  },
  {
    src: "/images/LD1/3.png",
    alt: "Lỗ bọt đều, chống nước tốt, cách nhiệt hiệu quả",
    width: 1020,
    height: 912,
  },
  {
    src: "/images/banner/4.jpg",
    alt: "Độ bám dính cao, đảm bảo cửa vững chắc",
    width: 1020,
    height: 1024,
  },
];

const imgClass =
  "h-auto w-full rounded-2xl shadow-card ring-1 ring-slate-100 transition-transform duration-500 hover:-translate-y-1 hover:shadow-soft";

function BannerImage({ b, priority }: { b: Banner; priority?: boolean }) {
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
      <section id="video" className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl md:max-w-lg lg:max-w-xl">
            <BannerImage b={poster} priority />
          </div>

          <div className="mx-auto mt-14 max-w-3xl text-center sm:mt-16">
            <span className="eyebrow">Trải nghiệm thực tế</span>
            <h2 className="section-title mt-2">Video thực tế</h2>

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

      <section id="dac-diem" className="bg-slate-50 py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">Đặc điểm sản phẩm</h2>
          </div>

          <div className="mx-auto mt-10 w-full max-w-5xl space-y-5 sm:space-y-6 md:max-w-2xl lg:max-w-3xl">
            {banners.map((b) => (
              <BannerImage key={b.src} b={b} />
            ))}

            <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-card ring-1 ring-slate-100">
              <video
                controls
                playsInline
                preload="metadata"
                className="mx-auto h-auto w-full bg-black object-contain"
              >
                <source src="/images/video/8073813458426.mp4" type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ phát video.
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
