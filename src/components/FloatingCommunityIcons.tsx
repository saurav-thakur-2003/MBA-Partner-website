import { MessageCircle, Send } from "lucide-react";

const WHATSAPP_URL = "https://chat.whatsapp.com/EdyvGJbQoV9Jj6eC0slSx9?mode=hq2tcla";
const TELEGRAM_URL = "https://t.me/+IrnzgXdUKqsyOTZl";

export function FloatingCommunityIcons() {
  return (
    <div className="fixed bottom-8 right-6 z-50 flex items-center gap-2">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="inline-grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white shadow-md hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-5 w-5" />
      </a>

      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Telegram"
        className="inline-grid h-10 w-10 place-items-center rounded-full bg-[#2AABEE] text-white shadow-md hover:scale-105 transition-transform"
      >
        <Send className="h-5 w-5" />
      </a>
    </div>
  );
}
