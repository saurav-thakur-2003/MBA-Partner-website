import { MessageCircle, Send } from "lucide-react";

const WHATSAPP_URL = "https://chat.whatsapp.com/EdyvGJbQoV9Jj6eC0slSx9?mode=hq2tcla";
const TELEGRAM_URL = "https://t.me/+IrnzgXdUKqsyOTZl";

export function FloatingCommunityIcons() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="sm:hidden">
        <div className="rounded-[1.8rem] border border-white/20 bg-[linear-gradient(180deg,#102448_0%,#081325_100%)] p-2 shadow-[0_18px_50px_-18px_rgba(7,16,35,0.95)]">
          <div className="mb-2 flex items-center gap-2 px-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
            <span className="grid h-7 w-7 place-items-center rounded-xl bg-accent text-accent-foreground">
              <MessageCircle className="h-4 w-4" />
            </span>
            Community
          </div>
          <div className="flex gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Join WhatsApp community"
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-[0_12px_30px_-12px_rgba(37,211,102,0.95)]"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Join Telegram community"
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2b5fd9] text-white shadow-[0_12px_30px_-12px_rgba(43,95,217,0.95)]"
            >
              <Send className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex sm:flex-row sm:gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Join WhatsApp community"
          className="inline-flex items-center gap-3 rounded-[1.6rem] border border-white/20 bg-[linear-gradient(180deg,#16325f_0%,#0b1b34_100%)] px-4 py-3 text-white shadow-[0_18px_50px_-18px_rgba(7,16,35,0.95)] transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#6b7cff] focus:ring-offset-2"
        >
          <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground shadow-[0_10px_24px_-10px_rgba(248,246,131,0.9)]">
            <MessageCircle className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.95)]" />
          </span>
          <span className="flex flex-col pr-1 text-left">
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent/90">MBA Bot</span>
            <span className="text-sm font-semibold text-white">WhatsApp</span>
          </span>
        </a>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Join Telegram community"
          className="inline-flex items-center gap-3 rounded-[1.6rem] border border-white/20 bg-[linear-gradient(180deg,#2b5fd9_0%,#17306d_100%)] px-4 py-3 text-white shadow-[0_18px_50px_-18px_rgba(23,48,109,0.95)] transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#2b5fd9] focus:ring-offset-2"
        >
          <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-white text-[#2b5fd9] shadow-[0_10px_24px_-10px_rgba(255,255,255,0.55)]">
            <Send className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,0.95)]" />
          </span>
          <span className="flex flex-col pr-1 text-left">
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-sky-100/90">Community</span>
            <span className="text-sm font-semibold text-white">Telegram</span>
          </span>
        </a>
      </div>
    </div>
  );
}
