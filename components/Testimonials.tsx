import Image from "next/image";

const testimonials = [
  {
    name: "Anh Tuấn",
    role: "Thợ thi công nội thất · TP.HCM",
    avatar: "/images/avatar/AVATAR1.png",
    rating: 5,
    text: "Dùng AM2 dán tấm ốp tường cực dính, bọt nở đều và không co. Khách hàng của tôi rất hài lòng, giờ chỉ xài keo AOFENG.",
  },
  {
    name: "Chị Hương",
    role: "Chủ nhà · Bình Dương",
    avatar: "/images/avatar/AVATAR2.png",
    rating: 5,
    text: "Mua combo AM2 lắp khe cửa sổ, chống ồn và chống thấm thấy rõ. Giao hàng nhanh, được kiểm tra hàng trước khi thanh toán.",
  },
  {
    name: "Anh Minh",
    role: "Nhà thầu xây dựng · Đồng Nai",
    avatar: "/images/avatar/AVATAR3.png",
    rating: 5,
    text: "Đặt 12 chai cho công trình, giá tốt lại tặng kèm silicone. Độ cứng và bám dính vượt mong đợi so với hàng tôi từng dùng.",
  },
  {
    name: "Chị Lan",
    role: "Cửa hàng vật liệu · Long An",
    avatar: "/images/avatar/AVATAR4.png",
    rating: 5,
    text: "Lấy sỉ về bán chạy lắm, khách quay lại mua nhiều. Chất lượng ổn định, bao bì chắc chắn, tư vấn nhiệt tình.",
  },
  {
    name: "Anh Khoa",
    role: "Thợ nhôm kính · Cần Thơ",
    avatar: "/images/avatar/AVATAR5.png",
    rating: 5,
    text: "Bọt mịn, khô nhanh đúng 10–15 phút, cắt phần thừa dễ. Làm cửa nhanh hơn hẳn, tiết kiệm thời gian thi công.",
  },
  {
    name: "Chị Phương",
    role: "Chủ nhà · Hà Nội",
    avatar: "/images/avatar/AVATAR6.png",
    rating: 5,
    text: "Lần đầu tự lắp khe hở quanh nhà, dùng vòi rất dễ. Kết quả sạch đẹp, không mùi khó chịu, an toàn cho gia đình.",
  },
];

export default function Testimonials() {
  return (
    <section id="danh-gia" className="relative overflow-hidden bg-brand-900 py-16 text-white sm:py-20 md:py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm">
            Cảm nhận khách hàng
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-[1.25] tracking-tight sm:text-4xl md:text-5xl">
            Khách hàng nói gì về sản phẩm?
          </h2>
          <p className="mt-4 text-base text-blue-100/80 sm:text-lg">
            Hơn <strong className="text-white">1.280+ đánh giá</strong> với điểm trung bình{" "}
            <strong className="text-accent">4.9/5</strong>.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="mt-4 grow text-sm leading-relaxed text-blue-50/90">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                <Image
                  src={t.avatar}
                  alt={`Ảnh đại diện ${t.name}`}
                  width={88}
                  height={88}
                  className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-accent/60"
                />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-blue-100/70">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  );
}
