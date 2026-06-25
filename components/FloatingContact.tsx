import { site } from "@/lib/site";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={site.phoneHref}
        aria-label="Gọi hotline"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-brand text-white shadow-soft transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-brand/40" />
        <svg className="relative h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79a15.53 15.53 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
        </svg>
      </a>
    </div>
  );
}
