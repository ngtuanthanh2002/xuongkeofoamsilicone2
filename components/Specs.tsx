import Image from "next/image";
import { products } from "@/lib/site";

export default function Specs() {
  return (
    <section id="thong-so" className="bg-white py-10 sm:py-14 md:py-16">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title !text-2xl sm:!text-3xl">Thông tin kỹ thuật</h2>
        </div>

        <div className="mx-auto mt-6 max-w-md lg:mt-10 lg:max-w-4xl">
          {products.map((p) => {
            const rows = [
              ...p.specs,
              { label: "Ứng dụng chính", value: p.mainUse },
            ];

            return (
              <div
                key={p.id}
                className="overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-200 lg:grid lg:grid-cols-[240px_1fr]"
              >
                {/* Left: product */}
                <div className="flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-brand-900 px-4 pt-4 text-center lg:bg-gradient-to-br lg:px-5 lg:py-8">
                  <span className="inline-flex rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white lg:text-xs">
                    {p.badge}
                  </span>
                  <div className="relative mx-auto mt-2 h-36 w-24 sm:h-40 sm:w-28 lg:mt-6 lg:h-52 lg:w-36">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 1024px) 112px, 144px"
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                  <h3 className="mt-1 font-display text-base font-extrabold text-white lg:mt-4 lg:text-lg">
                    {p.name}
                  </h3>
                  <p className="pb-3 text-xs text-white/70 lg:pb-0 lg:pt-1">
                    {p.tier}
                  </p>
                </div>

                {/* Right: specs */}
                <div className="flex flex-col">
                  <div className="grid grid-cols-3 border-b border-slate-100 bg-slate-50">
                    <KeyStat value={p.expansion} label="Độ nở" />
                    <KeyStat value="20 kg/m³" label="Tỷ trọng" />
                    <KeyStat value={p.fireRating} label="Chống cháy" />
                  </div>

                  <dl className="flex-1 px-4 py-1 sm:px-6 sm:py-2">
                    {rows.map((s, i) => (
                      <div
                        key={s.label}
                        className={`grid grid-cols-[110px_1fr] items-start gap-3 py-2.5 text-xs sm:grid-cols-[140px_1fr] sm:text-sm ${
                          i < rows.length - 1 ? "border-b border-slate-100" : ""
                        }`}
                      >
                        <dt className="font-medium text-slate-500">{s.label}</dt>
                        <dd
                          className={`font-semibold leading-snug ${
                            s.label === "Ứng dụng chính"
                              ? "text-brand"
                              : "text-slate-800"
                          }`}
                        >
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function KeyStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex h-16 flex-col items-center justify-center border-r border-slate-100 px-2 last:border-r-0 lg:h-[72px]">
      <p className="whitespace-nowrap font-display text-base font-extrabold leading-none text-brand-900 sm:text-lg lg:text-xl">
        {value}
      </p>
      <p className="mt-1.5 text-[10px] leading-none text-slate-500 lg:text-xs">
        {label}
      </p>
    </div>
  );
}
