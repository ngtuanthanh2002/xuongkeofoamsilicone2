import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-blue-100">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="inline-flex rounded-lg bg-white px-3 py-2">
            <Image
              src="/images/Logo.png"
              alt="AOFENG logo"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-blue-200/80">
            Keo bọt nở PU Foam AOFENG — giải pháp lắp khe, kết dính, cách âm
            cách nhiệt chống thấm cho mọi công trình.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Liên kết
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="cursor-pointer text-blue-200/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Sản phẩm
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-blue-200/80">
            <li>Keo bọt nở AL2 — Dòng Xanh</li>
            <li>Keo bọt nở AM2 — Dòng Đen</li>
            <li>Súng xịt &amp; phụ kiện</li>
            <li>Silicone &amp; Loncool</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Liên hệ
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-blue-200/80">
            <li className="flex gap-2">
              <span className="mt-0.5 text-accent">●</span>
              {site.address}
            </li>
            <li>
              <a href={site.phoneHref} className="cursor-pointer transition-colors hover:text-accent">
                Hotline: {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="cursor-pointer transition-colors hover:text-accent"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-blue-200/70 sm:flex-row">
          <p>© {new Date().getFullYear()} AOFENG. Bảo lưu mọi quyền.</p>
          <p>Keo Bọt Nở PU Foam · AL2 &amp; AM2 chính hãng</p>
        </div>
      </div>
    </footer>
  );
}
