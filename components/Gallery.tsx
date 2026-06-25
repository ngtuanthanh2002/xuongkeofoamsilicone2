import Image from "next/image";

const gallery = [
  { src: "/images/C1.jpg", alt: "Keo bọt nở AL2 trưng bày tại kho", span: "lg:col-span-2 lg:row-span-2" },
  { src: "/images/B1.jpg", alt: "Bộ ba keo bọt nở AM2 kèm vòi xịt" },
  { src: "/images/A1.jpg", alt: "Chai keo bọt nở AL2 và vòi xịt" },
  { src: "/images/C2.jpg", alt: "Dãy keo bọt nở AM2 dòng đen" },
  { src: "/images/B2.jpg", alt: "Bộ ba keo bọt nở AL2 dòng xanh" },
  { src: "/images/A2.jpg", alt: "Chai keo bọt nở AM2 cận cảnh" },
];

export default function Gallery() {
  return (
    <section id="hinh-anh" className="bg-slate-50 py-16 sm:py-20 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Hình ảnh thực tế</span>
          <h2 className="section-title mt-2">Sản phẩm chính hãng</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Hình ảnh thật 100% — đóng gói chắc chắn, kèm vòi xịt đầy đủ.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {gallery.map((g) => (
            <div
              key={g.src}
              className={`group relative aspect-square overflow-hidden rounded-2xl bg-slate-200 shadow-card ${
                g.span ?? ""
              }`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
