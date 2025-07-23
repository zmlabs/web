import fs from "node:fs"
import path from "node:path"

import Markdown from "@/components/markdown"

export default function Help() {
  const help = fs.readFileSync(
    path.join(process.cwd(), "src/markdown/caply/temporary-help.md"),
    "utf-8",
  )
  return <Markdown className="m-auto py-24" text={help} />
}
