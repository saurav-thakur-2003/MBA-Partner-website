const SAMPLE_CV_URL = "https://drive.google.com/drive/folders/18bj7C4I4Ro1DcOBfzF6xrEhNI7SmEZe2";
const COMPENDIUM_URL = "https://drive.google.com/drive/folders/1Ir9BWGjYgYsLJwneq9WoTI6dbDezXS_H";

export function FloatingResourceTabs() {
  return (
    <div className="fixed right-0 top-1/2 z-40 -translate-y-1/2">
      <div className="hidden md:flex flex-col items-end gap-3 pr-0">
        <a
          href={COMPENDIUM_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center rounded-l-[1.1rem] bg-[#161f63] px-3 py-4 text-sm font-semibold text-white shadow-[0_16px_32px_-16px_rgba(22,31,99,0.75)] transition-transform hover:translate-x-[-2px]"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Compendiums
        </a>
        <a
          href={SAMPLE_CV_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center rounded-l-[1.1rem] bg-[#b19a78] px-3 py-4 text-sm font-semibold text-white shadow-[0_16px_32px_-16px_rgba(177,154,120,0.75)] transition-transform hover:translate-x-[-2px]"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Sample CVs
        </a>
      </div>

      <div className="md:hidden fixed right-3 top-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-2">
          <a
            href={COMPENDIUM_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#161f63] px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_24px_-12px_rgba(22,31,99,0.75)]"
          >
            Compendiums
          </a>
          <a
            href={SAMPLE_CV_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#b19a78] px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_24px_-12px_rgba(177,154,120,0.75)]"
          >
            Sample CVs
          </a>
        </div>
      </div>
    </div>
  );
}
