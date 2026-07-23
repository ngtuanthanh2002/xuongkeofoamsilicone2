export const site = {
  name: "AOFENG",
  brandFull: "AOFENG PU Foam",
  phone: "0901 234 567",
  phoneHref: "tel:0901234567",
  email: "info@aofeng.vn",
  address: "123 Đường Công Nghiệp, KCN Tân Bình, TP. Hồ Chí Minh",
  zalo: "0901 234 567",
};

export const navLinks = [
  { label: "Sản phẩm", href: "#san-pham" },
  { label: "Video", href: "#video" },
  { label: "Đặc điểm", href: "#dac-diem" },
  { label: "Thông số", href: "#thong-so" },
  { label: "Hình ảnh", href: "#hinh-anh" },
  { label: "Chứng nhận", href: "#chung-nhan" },
  { label: "Đánh giá", href: "#danh-gia" },
  { label: "Đặt hàng", href: "#dat-hang" },
];

export type PackageOption = {
  value: string;
  label: string;
  hot?: boolean;
};

export const packageOptions: PackageOption[] = [
  { value: "am2-1", label: "AM2 — 1 chai · 85.000đ" },
  { value: "am2-2", label: "AM2 — Combo 2 chai · 170.000đ + Loncool" },
  { value: "am2-3", label: "AM2 — Combo 3 chai · 229.500đ (-10%)" },
  { value: "am2-6", label: "AM2 — Combo 6 chai · 459.000đ + Silicone" },
  { value: "am2-12", label: "AM2 — Combo 12 chai · 918.000đ + 4 Silicone", hot: true },
];

export type Product = {
  id: "am2";
  name: string;
  badge: string;
  tier: string;
  image: string;
  price: string;
  expansion: string;
  density: string;
  fireRating: string;
  accentClass: string;
  highlight: string;
  features: string[];
  specs: { label: string; value: string }[];
  mainUse: string;
};

export const products: Product[] = [
  {
    id: "am2",
    name: "KEO BỌT NỞ AM2",
    badge: "Dòng Đen · AM2",
    tier: "Hạng công trình · 750ml",
    image: "/images/Keo_Alone2.png",
    price: "85.000vnd",
    expansion: "45×",
    density: "20 kg/m³",
    fireRating: "B2",
    accentClass: "dark",
    highlight: "Lấp khe hở + dán dính tấm ốp tường",
    features: ["Không co", "Không chảy dầu", "Bám cực mạnh"],
    specs: [
      { label: "Dung tích", value: "750ml — 900g" },
      { label: "Cách dùng", value: "Vòi hoặc súng xịt" },
      { label: "Khô bề mặt", value: "10–15 phút" },
      { label: "Cắt phần thừa", value: "30–50 phút" },
      { label: "Tính năng", value: "Cách âm · Cách nhiệt · Chống thấm" },
      { label: "Đặc biệt", value: "Không co · Không chảy dầu · Bám cực mạnh" },
    ],
    mainUse: "Lấp khe hở + dán dính tấm ốp tường",
  },
];
