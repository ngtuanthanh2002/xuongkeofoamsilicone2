import Image from "next/image";
import { products } from "@/lib/site";

export default function Specs() {
  return (
    <section id="thong-so" className="bg-white py-16 sm:py-20 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Thông số chi tiết</span>
          <h2 className="section-title mt-2">Thông tin kỹ thuật</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Mỗi dòng một bảng riêng — đọc rõ, so sánh dễ.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {products.map((p) => {
            const isDark = p.id === "am2";
            return (
              <div
                key={p.id}
                className={`overflow-hidden rounded-3xl ring-1 ${
                  isDark
                    ? "ring-slate-200"
                    : "ring-emerald-200"
                } shadow-card`}
              >
                <div
                  className={`relative px-6 pt-6 text-center ${
                    isDark
                      ? "bg-gradient-to-b from-slate-900 to-brand-900"
                      : "bg-gradient-to-b from-emerald-600 to-emerald-700"
                  }`}
                >
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {p.badge}
                  </span>
                  <div className="relative mx-auto mt-3 h-32 w-24">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="96px"
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                  <h3 className="mt-2 font-display text-xl font-extrabold text-white">
                    {p.name}
                  </h3>
                  <p className="pb-5 text-sm text-white/70">{p.tier}</p>
                </div>

                <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100 bg-slate-50 text-center">
                  <KeyStat value={p.expansion} label="Độ nở" />
                  <KeyStat value={p.density.replace(" kg/m³", "")} label="kg/m³" />
                  <KeyStat value={p.fireRating} label="Chống cháy" />
                </div>

                <dl className="divide-y divide-slate-100">
                  {p.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-start justify-between gap-4 px-5 py-3.5 text-sm sm:px-6"
                    >
                      <dt className="shrink-0 font-medium text-slate-500">{s.label}</dt>
                      <dd className="text-right font-semibold text-slate-800">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                  <div className="flex items-start justify-between gap-4 px-5 py-3.5 text-sm sm:px-6">
                    <dt className="shrink-0 font-medium text-slate-500">Ứng dụng chính</dt>
                    <dd
                      className={`text-right font-semibold ${
                        isDark ? "text-brand" : "text-emerald-700"
                      }`}
                    >
                      {p.mainUse}
                    </dd>
                  </div>
                </dl>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-400">
          * Thông số mang tính tham khảo, có thể thay đổi tùy điều kiện thi công và nhiệt độ môi trường.
        </p>
      </div>
    </section>
  );
}

function KeyStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-2 py-4">
      <p className="font-display text-2xl font-extrabold text-brand-900">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}
