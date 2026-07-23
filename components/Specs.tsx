import Image from "next/image";
import { products } from "@/lib/site";

export default function Specs() {
  return (
    <section id="thong-so" className="bg-white py-10 sm:py-14 md:py-16">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title !text-2xl sm:!text-3xl">Thông tin kỹ thuật</h2>
        </div>

        <div className="mx-auto mt-6 max-w-md">
          {products.map((p) => (
            <div
              key={p.id}
              className="overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-200"
            >
              <div className="relative bg-gradient-to-b from-slate-900 to-brand-900 px-4 pt-4 text-center">
                <span className="inline-flex rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  {p.badge}
                </span>
                <div className="relative mx-auto mt-2 h-36 w-24 sm:h-40 sm:w-28">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="112px"
                    className="object-contain drop-shadow-xl"
                  />
                </div>
                <h3 className="mt-1 font-display text-base font-extrabold text-white">
                  {p.name}
                </h3>
                <p className="pb-3 text-xs text-white/70">{p.tier}</p>
              </div>

              <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100 bg-slate-50">
                <KeyStat value={p.expansion} label="Độ nở" />
                <KeyStat value="20" label="kg/m³" />
                <KeyStat value={p.fireRating} label="Chống cháy" />
              </div>

              <dl className="divide-y divide-slate-100">
                {p.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between gap-3 px-4 py-2 text-xs sm:px-5 sm:text-sm"
                  >
                    <dt className="shrink-0 font-medium text-slate-500">{s.label}</dt>
                    <dd className="text-right font-semibold text-slate-800">{s.value}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-3 px-4 py-2 text-xs sm:px-5 sm:text-sm">
                  <dt className="shrink-0 font-medium text-slate-500">Ứng dụng chính</dt>
                  <dd className="text-right font-semibold text-brand">{p.mainUse}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KeyStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex h-14 flex-col items-center justify-center px-1">
      <p className="font-display text-lg font-extrabold leading-none text-brand-900">
        {value}
      </p>
      <p className="mt-1 text-[10px] leading-none text-slate-500">{label}</p>
    </div>
  );
}
