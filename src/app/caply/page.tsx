import fs from "node:fs";
import path from "node:path";

import Markdown from "@/components/markdown";

export default function Caply() {
  const home = fs.readFileSync(
    path.join(process.cwd(), "src/markdown/caply/temporary-home.md"),
    "utf-8",
  );
  return (
    <div className="space-y-8">
      <Markdown text={home} />

      <div className="flex justify-center">
        <a
          className={`
            inline-flex items-center rounded-lg bg-black px-6 py-3 font-medium
            text-white transition-colors duration-200
            hover:bg-gray-800
            focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
            focus:outline-none
          `}
          href="https://github.com/zmlabs/caply/issues"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            className="mr-2 size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          Get Support
        </a>
      </div>
    </div>
  );
}
