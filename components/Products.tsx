import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/site";

export default function Products() {
  return (
    <section id="san-pham" className="bg-white py-16 sm:py-20 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Thông tin sản phẩm</span>
          <h2 className="section-title mt-2">Hai dòng keo cho mọi nhu cầu</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Chọn <strong className="text-brand">AL2</strong> cho dân dụng hàng ngày,
            hoặc <strong className="text-brand">AM2</strong> cho công trình &amp; kết dính tấm ốp.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {products.map((p) => {
            const isDark = p.id === "am2";
            return (
              <article
                key={p.id}
                className={`group relative flex flex-col overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-8 ${
                  isDark
                    ? "bg-gradient-to-br from-slate-900 to-brand-900 text-white ring-1 ring-white/10"
                    : "bg-gradient-to-br from-emerald-50 to-white text-slate-800 ring-1 ring-emerald-100"
                }`}
              >
                <span
                  className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                    isDark
                      ? "bg-accent text-brand-900"
                      : "bg-emerald-600 text-white"
                  }`}
                >
                  {p.badge}
                </span>

                <div className="mt-4 grid grid-cols-[120px_1fr] items-center gap-5 sm:grid-cols-[140px_1fr]">
                  <div className="relative h-44 w-full sm:h-52">
                    <Image
                      src={p.image}
                      alt={`${p.name} - ${p.tier}`}
                      fill
                      sizes="160px"
                      className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <h3
                      className={`font-display text-2xl font-extrabold sm:text-3xl ${
                        isDark ? "text-white" : "text-brand-900"
                      }`}
                    >
                      {p.name}
                    </h3>
                    <p
                      className={`mt-1 text-sm ${
                        isDark ? "text-blue-100/70" : "text-slate-500"
                      }`}
                    >
                      {p.tier}
                    </p>

                    <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                      <Stat dark={isDark} value={p.expansion} label="Độ nở" />
                      <Stat dark={isDark} value={p.density} label="Tỷ trọng" small />
                      <Stat dark={isDark} value={p.fireRating} label="Chống cháy" />
                    </div>
                  </div>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        isDark
                          ? "bg-white/10 text-blue-50"
                          : "bg-white text-emerald-700 ring-1 ring-emerald-200"
                      }`}
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <p
                  className={`mt-5 text-sm ${
                    isDark ? "text-blue-100/80" : "text-slate-600"
                  }`}
                >
                  <span className="font-semibold">Ứng dụng:</span> {p.mainUse}
                </p>

                <div className="mt-auto flex items-end justify-between pt-6">
                  <div>
                    <p
                      className={`text-xs uppercase tracking-wide ${
                        isDark ? "text-blue-100/60" : "text-slate-400"
                      }`}
                    >
                      Chỉ từ
                    </p>
                    <p
                      className={`font-display text-3xl font-extrabold ${
                        isDark ? "text-accent" : "text-emerald-600"
                      }`}
                    >
                      {p.price}
                    </p>
                  </div>
                  <Link
                    href="#dat-hang"
                    className={`btn !px-5 !py-2.5 ${
                      isDark
                        ? "bg-accent text-brand-900 hover:bg-accent-dark"
                        : "bg-emerald-600 text-white hover:bg-emerald-700"
                    } hover:-translate-y-0.5`}
                  >
                    Đặt {p.id.toUpperCase()}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  dark,
  small,
}: {
  value: string;
  label: string;
  dark: boolean;
  small?: boolean;
}) {
  return (
    <div
      className={`rounded-xl px-1 py-2 ${
        dark ? "bg-white/5" : "bg-white/70 ring-1 ring-emerald-100"
      }`}
    >
      <p
        className={`font-display font-extrabold leading-none ${
          small ? "text-sm sm:text-base" : "text-lg sm:text-xl"
        } ${dark ? "text-white" : "text-brand-900"}`}
      >
        {value}
      </p>
      <p className={`mt-1 text-[10px] ${dark ? "text-blue-100/60" : "text-slate-500"}`}>
        {label}
      </p>
    </div>
  );
}
