const certificates = [
  { label: "CE Certificates" },
  { label: "France A+" },
  { label: "ISO 14000" },
  { label: "ISO 9000" },
];

const companyStats = [
  { label: "Năm thành lập", value: "2003" },
  { label: "Diện tích sản xuất", value: "60.000 m²" },
  { label: "Dây chuyền sản xuất", value: "Chuỗi công nghiệp khép kín" },
  { label: "Sản lượng hằng năm", value: "300.000.000 sản phẩm" },
  { label: "Thị trường xuất khẩu", value: "Hơn 15 quốc gia" },
  { label: "Quy mô nhân sự", value: "Hơn 400 nhân viên" },
  { label: "Chứng nhận", value: "ISO 9001-14000 · CE · French A+" },
];

export default function Certifications() {
  return (
    <section id="chung-nhan" className="bg-white py-16 sm:py-20 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Uy tín toàn cầu</span>
          <h2 className="section-title mt-2">Chứng nhận quốc tế</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Sản phẩm đạt các tiêu chuẩn chất lượng và môi trường quốc tế.
          </p>
        </div>

        {/* Chứng chỉ */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {certificates.map((c) => (
            <figure
              key={c.label}
              className="overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <figcaption className="bg-brand px-3 py-2.5 text-center text-sm font-bold text-white">
                {c.label}
              </figcaption>
              <ImagePlaceholder ratio="aspect-[3/4]" label="Ảnh chứng nhận" />
            </figure>
          ))}
        </div>

        {/* Thông tin doanh nghiệp */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 to-brand-700 p-6 text-white shadow-soft sm:p-8 lg:p-10">
          <h3 className="font-display text-xl font-bold sm:text-2xl">
            Năng lực sản xuất AOFENG
          </h3>
          <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {companyStats.map((s) => (
              <div key={s.label} className="flex items-start gap-3 border-b border-white/10 pb-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <dt className="text-sm text-blue-100/70">{s.label}</dt>
                  <dd className="font-semibold text-white">{s.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Hình ảnh nhà máy */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <ImagePlaceholder
              key={i}
              ratio="aspect-[4/3]"
              label="Hình ảnh nhà máy / kho hàng"
              rounded
            />
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-400">
          * Khu vực hiển thị hình ảnh chứng nhận &amp; nhà máy — sẽ được cập nhật hình thật.
        </p>
      </div>
    </section>
  );
}

function ImagePlaceholder({
  ratio,
  label,
  rounded,
}: {
  ratio: string;
  label: string;
  rounded?: boolean;
}) {
  return (
    <div
      className={`relative ${ratio} w-full ${
        rounded ? "rounded-2xl ring-1 ring-slate-200 shadow-card" : ""
      } grid place-items-center bg-slate-50`}
    >
      <div className="absolute inset-3 rounded-xl border-2 border-dashed border-slate-200" />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center text-slate-300">
        <ImageIcon />
        <span className="text-xs font-medium text-slate-400">{label}</span>
      </div>
    </div>
  );
}

function ImageIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}
