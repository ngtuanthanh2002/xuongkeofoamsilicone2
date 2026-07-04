"use client";

import { useState } from "react";
import { packageOptions, site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export default function OrderForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pkg: packageOptions[0].value,
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; address?: string }>({});

  const validate = () => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "Vui lòng nhập họ tên";
    if (!/^0\d{8,10}$/.test(form.phone.replace(/\s/g, "")))
      next.phone = "Số điện thoại không hợp lệ";
    if (!form.address.trim()) next.address = "Vui lòng nhập địa chỉ nhận hàng";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setForm({ name: "", phone: "", address: "", pkg: packageOptions[0].value });
    } catch {
      setStatus("error");
    }
  };

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field as keyof typeof errors]) {
        setErrors((er) => ({ ...er, [field]: undefined }));
      }
    };

  return (
    <section id="dat-hang" className="bg-white py-16 sm:py-20 md:py-24">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl bg-slate-50 shadow-soft ring-1 ring-slate-100 lg:grid lg:grid-cols-2">
          {/* Left info */}
          <div className="bg-gradient-to-br from-brand-900 to-brand-700 p-8 text-white sm:p-10 lg:p-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Đặt hàng
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
              Để lại thông tin mua hàng
            </h2>
            <p className="mt-4 text-blue-100/85">
              1 chai AM2 chỉ từ <strong className="text-accent">85.000đ</strong> — Miễn phí
              vận chuyển toàn quốc.
            </p>

            <ul className="mt-8 space-y-5">
              <ContactRow icon={<PinIcon />} title="Địa chỉ" value={site.address} />
              <ContactRow
                icon={<PhoneIcon />}
                title="Hotline"
                value={site.phone}
                href={site.phoneHref}
              />
              <ContactRow
                icon={<MailIcon />}
                title="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />
            </ul>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              {["Hàng chính hãng", "Kiểm tra trước khi thanh toán", "Đổi trả 7 ngày"].map(
                (b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 font-medium"
                  >
                    <CheckMini /> {b}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right form */}
          <div className="p-8 sm:p-10 lg:p-12">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                  <BigCheck />
                </span>
                <h3 className="mt-4 font-display text-2xl font-extrabold text-brand-900">
                  Đặt hàng thành công!
                </h3>
                <p className="mt-2 max-w-sm text-slate-600">
                  Cảm ơn bạn. Nhân viên AOFENG sẽ gọi xác nhận đơn hàng trong thời gian
                  sớm nhất.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-outline mt-6"
                >
                  Đặt đơn khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <Field label="Họ và tên" error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Nhập họ tên"
                    className={inputCls(errors.name)}
                  />
                </Field>

                <Field label="Số điện thoại" error={errors.phone}>
                  <input
                    type="tel"
                    inputMode="numeric"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="0901 234 567"
                    className={inputCls(errors.phone)}
                  />
                </Field>

                <Field label="Địa chỉ nhận hàng" error={errors.address}>
                  <input
                    type="text"
                    value={form.address}
                    onChange={update("address")}
                    placeholder="Số nhà, phường, quận, tỉnh/thành"
                    className={inputCls(errors.address)}
                  />
                </Field>

                <Field label="Chọn gói sản phẩm">
                  <div className="relative">
                    <select
                      value={form.pkg}
                      onChange={update("pkg")}
                      className={`${inputCls()} cursor-pointer appearance-none pr-10`}
                    >
                      {packageOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                          {opt.hot ? "  🔥" : ""}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                      <ChevronDown />
                    </span>
                  </div>
                </Field>

                {status === "error" && (
                  <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                    Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline {site.phone}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full !py-4 text-base disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? "Đang gửi..." : "Gửi đơn đặt hàng"}
                </button>

                <p className="text-center text-xs text-slate-400">
                  Được kiểm tra hàng trước khi thanh toán
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function inputCls(error?: string) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:ring-2 ${
    error
      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
      : "border-slate-200 focus:border-brand focus:ring-brand-100"
  }`;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function ContactRow({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-accent">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-sm text-blue-100/80">{value}</p>
      </div>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="flex cursor-pointer items-center gap-4 transition-opacity hover:opacity-80">
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4">{content}</div>
      )}
    </li>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79a15.53 15.53 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
function CheckMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function BigCheck() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
