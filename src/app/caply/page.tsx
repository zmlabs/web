import fs from "node:fs";
import path from "node:path";

import Markdown from "@/components/markdown";

export default function Caply() {
  const home = fs.readFileSync(
    path.join(process.cwd(), "src/markdown/caply/temporary-home.md"),
    "utf-8",
  );
  return <Markdown text={home} />;
}
