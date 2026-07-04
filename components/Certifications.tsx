import Image from "next/image";

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

        <div className="mx-auto mt-10 max-w-3xl md:max-w-lg lg:max-w-xl">
          <Image
            src="/images/banner/6.jpg"
            alt="Chứng nhận quốc tế và năng lực sản xuất AOFENG"
            width={1020}
            height={1157}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full rounded-2xl shadow-card ring-1 ring-slate-100"
          />
        </div>
      </div>
    </section>
  );
}
