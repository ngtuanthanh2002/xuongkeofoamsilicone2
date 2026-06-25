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
  { value: "al2-1", label: "AL2 — 1 chai · 79.000đ" },
  { value: "al2-2", label: "AL2 — Combo 2 chai · 158.000đ + Loncool" },
  { value: "al2-3", label: "AL2 — Combo 3 chai · 213.300đ (-10%)" },
  { value: "al2-6", label: "AL2 — Combo 6 chai · 426.600đ + Silicone" },
  { value: "al2-12", label: "AL2 — Combo 12 chai · 853.200đ + 4 Silicone", hot: true },
  { value: "am2-1", label: "AM2 — 1 chai · 85.000đ" },
  { value: "am2-2", label: "AM2 — Combo 2 chai · 170.000đ + Loncool" },
  { value: "am2-3", label: "AM2 — Combo 3 chai · 229.500đ (-10%)" },
  { value: "am2-6", label: "AM2 — Combo 6 chai · 459.000đ + Silicone" },
  { value: "am2-12", label: "AM2 — Combo 12 chai · 918.000đ + 4 Silicone" },
];

export type Product = {
  id: "al2" | "am2";
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
    id: "al2",
    name: "Keo Bọt Nở AL2",
    badge: "Dòng Xanh · AL2",
    tier: "Hạng dân dụng · 750ml",
    image: "/images/Keo_Alone.png",
    price: "79.000đ",
    expansion: "35×",
    density: "27 kg/m³",
    fireRating: "B2",
    accentClass: "green",
    highlight: "Lắp khe, lỗ hổng — đa năng hàng ngày",
    features: ["Cách âm", "Cách nhiệt", "Chống thấm"],
    specs: [
      { label: "Dung tích", value: "750ml — 900g" },
      { label: "Cách dùng", value: "Vòi hoặc súng xịt" },
      { label: "Khô bề mặt", value: "10–15 phút" },
      { label: "Cắt phần thừa", value: "30–40 phút" },
      { label: "Tính năng", value: "Cách âm · Cách nhiệt · Chống thấm" },
      { label: "Cấu trúc bọt", value: "Ô nhỏ dày, chống thấm tốt" },
    ],
    mainUse: "Lắp khe, lỗ hổng — đa năng hàng ngày",
  },
  {
    id: "am2",
    name: "Keo Bọt Nở AM2",
    badge: "Dòng Đen · AM2",
    tier: "Hạng công trình · 750ml",
    image: "/images/Keo_Alone2.png",
    price: "85.000đ",
    expansion: "45×",
    density: "20 kg/m³",
    fireRating: "B2",
    accentClass: "dark",
    highlight: "Lắp khe + kết dính tấm ốp, decor",
    features: ["Không co", "Không chảy dầu", "Bám cực mạnh"],
    specs: [
      { label: "Dung tích", value: "750ml — 900g" },
      { label: "Cách dùng", value: "Vòi hoặc súng xịt" },
      { label: "Khô bề mặt", value: "10–15 phút" },
      { label: "Cắt phần thừa", value: "30–50 phút" },
      { label: "Tính năng", value: "Cách âm · Cách nhiệt · Chống thấm" },
      { label: "Đặc biệt", value: "Không co · Không chảy dầu · Bám cực mạnh" },
    ],
    mainUse: "Lắp khe + kết dính tấm ốp, decor",
  },
];
