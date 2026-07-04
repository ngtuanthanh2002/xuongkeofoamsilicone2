import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/site";

export default function Products() {
  return (
    <section id="san-pham" className="bg-white py-16 sm:py-20 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Thông tin sản phẩm</span>
          <h2 className="section-title mt-2">Keo bọt nở AM2</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Chuyên dụng cho cửa, kết dính tấm ốp tường và lấp khe hở công trình.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          {products.map((p) => (
            <article
              key={p.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-brand-900 p-6 text-white ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-8"
            >
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-900">
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
                  <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-blue-100/70">{p.tier}</p>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <Stat value={p.expansion} label="Độ nở" />
                    <Stat value={p.density} label="Tỷ trọng" small />
                    <Stat value={p.fireRating} label="Chống cháy" />
                  </div>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-50"
                  >
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm text-blue-100/80">
                <span className="font-semibold">Ứng dụng:</span> {p.mainUse}
              </p>

              <div className="mt-auto flex items-end justify-between pt-6">
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-100/60">Chỉ từ</p>
                  <p className="font-display text-3xl font-extrabold text-accent">{p.price}</p>
                </div>
                <Link
                  href="#dat-hang"
                  className="btn !px-5 !py-2.5 bg-accent text-brand-900 hover:bg-accent-dark hover:-translate-y-0.5"
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

function Stat({
  value,
  label,
  small,
}: {
  value: string;
  label: string;
  small?: boolean;
}) {
  return (
    <div className="rounded-xl bg-white/5 px-1 py-2">
      <p
        className={`font-display font-extrabold leading-none text-white ${
          small ? "text-sm sm:text-base" : "text-lg sm:text-xl"
        }`}
      >
        {value}
      </p>
      <p className="mt-1 text-[10px] text-blue-100/60">{label}</p>
    </div>
  );
}
