import { MessageCircle, Send } from "lucide-react";

const WHATSAPP_URL = "https://chat.whatsapp.com/EdyvGJbQoV9Jj6eC0slSx9?mode=hq2tcla";
const TELEGRAM_URL = "https://t.me/+IrnzgXdUKqsyOTZl";

export function FloatingCommunityIcons() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="hidden sm:flex items-center gap-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Join WhatsApp community"
          className="grid h-16 w-16 place-items-center rounded-full bg-[#efefef] shadow-[0_14px_32px_-14px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        >
          <MessageCircle className="h-7 w-7 text-[#25D366]" />
        </a>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Join Telegram community"
          className="grid h-16 w-16 place-items-center rounded-full bg-[#2b6cff] shadow-[0_14px_32px_-14px_rgba(43,108,255,0.55)] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2b6cff] focus:ring-offset-2"
        >
          <Send className="h-7 w-7 text-white" />
        </a>
      </div>

      <div className="sm:hidden">
        <div className="flex items-center gap-2 rounded-full bg-white px-2 py-2 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.35)]">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Join WhatsApp community"
            className="grid h-12 w-12 place-items-center rounded-full bg-[#efefef] transition-transform hover:scale-105"
          >
            <MessageCircle className="h-6 w-6 text-[#25D366]" />
          </a>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Join Telegram community"
            className="grid h-12 w-12 place-items-center rounded-full bg-[#2b6cff] transition-transform hover:scale-105"
          >
            <Send className="h-6 w-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
