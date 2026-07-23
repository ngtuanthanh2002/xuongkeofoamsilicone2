import Image from "next/image";

const trustPoints = [
  { value: "45×", label: "Độ nở tối đa" },
  { value: "B2", label: "Chống cháy" },
  { value: "15 năm", label: "Tuổi thọ" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-900 pt-16 md:pt-20">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700" />
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
      </div>

      <div className="container-page relative grid items-center gap-8 py-10 md:py-12 lg:grid-cols-2 lg:gap-10 lg:py-16">
        {/* Text */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm sm:text-xs">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Keo bọt nở PU Foam cao cấp
          </span>

          <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Keo Bọt Nở{" "}
            <span className="bg-gradient-to-r from-accent to-yellow-200 bg-clip-text text-transparent">
              AOFENG
            </span>
            <br className="hidden sm:block" /> Chuyên dụng cho cửa &amp; tấm ốp
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-blue-100/90 sm:text-base lg:mx-0">
            Độ nở cao, bám dính cực mạnh, cách âm – cách nhiệt – chống thấm.
            Dòng <strong className="text-white">AM2</strong> chuyên dụng cho cửa và dán tấm ốp tường.
          </p>

          <p className="mt-5 font-display text-2xl font-extrabold tracking-wide text-accent sm:text-3xl lg:text-4xl">
            KEO BỌT NỞ AM2
          </p>

          <dl className="mx-auto mt-7 grid max-w-md grid-cols-3 gap-3 lg:mx-0">
            {trustPoints.map((p) => (
              <div
                key={p.label}
                className="rounded-xl border border-white/10 bg-white/5 px-2 py-3 text-center backdrop-blur-sm"
              >
                <dt className="font-display text-xl font-extrabold text-accent sm:text-2xl">
                  {p.value}
                </dt>
                <dd className="mt-0.5 text-[11px] text-blue-100/80 sm:text-xs">
                  {p.label}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 flex items-center justify-center gap-2 text-xs text-blue-100/80 sm:text-sm lg:justify-start">
            <CheckIcon /> Miễn phí vận chuyển toàn quốc · Kiểm tra hàng trước khi thanh toán
          </p>
        </div>

        {/* Product showcase */}
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <div className="relative aspect-square w-full">
            <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-accent/30 to-blue-300/20 blur-2xl" />

            <div className="absolute left-[4%] top-[14%] z-10 w-[44%] animate-float drop-shadow-2xl [animation-delay:-2s]">
              <Image
                src="/images/Keo_Alone2.png"
                alt="Keo bọt nở PU Foam AOFENG AM2"
                width={420}
                height={1000}
                className="h-auto w-full"
                priority
              />
            </div>

            <div className="absolute right-[4%] top-[2%] z-20 w-[48%] animate-float drop-shadow-2xl">
              <Image
                src="/images/Keo_Alone2.png"
                alt="Keo bọt nở PU Foam AOFENG AM2"
                width={420}
                height={1000}
                className="h-auto w-full"
                priority
              />
            </div>

            {/* floating price badge */}
            <div className="absolute bottom-1 left-0 z-30 rounded-xl bg-white p-3 shadow-2xl ring-1 ring-black/5">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Giá khuyến mãi
              </p>
              <p className="font-display text-xl font-extrabold text-brand-900 sm:text-2xl">
                85.000<span className="text-sm text-slate-400">đ</span>
              </p>
              <p className="text-[10px] text-slate-500">AM2 · 750ml</p>
            </div>

            <div className="absolute right-0 top-1/2 z-30 flex items-center gap-2 rounded-xl bg-accent px-3 py-2 shadow-2xl">
              <StarIcon />
              <div>
                <p className="font-display text-base font-extrabold leading-none text-brand-900">
                  4.9/5
                </p>
                <p className="text-[10px] font-medium text-brand-900/70">1.280+ đánh giá</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* wave divider */}
      <div className="relative">
        <svg
          className="block h-[32px] w-full sm:h-[48px]"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,32 C360,72 1080,-8 1440,32 L1440,60 L0,60 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#012c5e">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  );
}
