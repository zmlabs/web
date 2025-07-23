import fs from "node:fs"
import path from "node:path"

import Markdown from "@/components/markdown"

export default function PrivacyPolicy() {
  const privacy = fs.readFileSync(
    path.join(process.cwd(), "src/markdown/caply/privacy.md"),
    "utf-8",
  )
  return <Markdown text={privacy} />
}
