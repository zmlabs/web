import fs from "node:fs"
import path from "node:path"

import Markdown from "@/components/markdown"

export default function TermsOfService() {
  const terms = fs.readFileSync(
    path.join(process.cwd(), "src/markdown/volume-hud/terms.md"),
    "utf-8",
  )
  return <Markdown className="m-auto py-24" text={terms} />
}
