import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/site";

export default function Products() {
  return (
    <section id="san-pham" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Thông tin sản phẩm</span>
          <h2 className="section-title mt-2">Keo bọt nở AM2</h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Chuyên dụng cho cửa, kết dính tấm ốp tường và lấp khe hở công trình.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          {products.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-brand-900 p-5 text-white ring-1 ring-white/10 sm:p-7"
            >
              <span className="inline-flex w-fit items-center rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-900">
                {p.badge}
              </span>

              <div className="mt-4 flex items-center gap-4">
                <div className="relative h-36 w-24 shrink-0 sm:h-40 sm:w-28">
                  <Image
                    src={p.image}
                    alt={`${p.name} - ${p.tier}`}
                    fill
                    sizes="112px"
                    className="object-contain drop-shadow-xl"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-extrabold leading-tight text-white sm:text-2xl">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-blue-100/70">{p.tier}</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <Stat value={p.expansion} label="Độ nở" />
                <Stat value="20" label="kg/m³" />
                <Stat value={p.fireRating} label="Chống cháy" />
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-50"
                  >
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm text-blue-100/80">
                <span className="font-semibold">Ứng dụng:</span> {p.mainUse}
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-display text-base font-semibold text-white sm:text-lg">
                  Giá là{" "}
                  <span className="text-xl font-extrabold text-accent sm:text-2xl">
                    {p.price}
                  </span>{" "}
                  <span className="text-sm font-medium text-blue-100/80">/ chai</span>
                </p>
                <Link
                  href="#dat-hang"
                  className="btn !px-5 !py-2.5 bg-accent text-brand-900 hover:bg-accent-dark"
                >
                  Đặt AM2
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex h-14 flex-col items-center justify-center rounded-xl bg-white/5 px-1">
      <p className="font-display text-lg font-extrabold leading-none text-white">
        {value}
      </p>
      <p className="mt-1.5 text-[10px] leading-none text-blue-100/60">{label}</p>
    </div>
  );
}
