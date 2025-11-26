import fs from "node:fs"
import path from "node:path"

import Markdown from "@/components/markdown"

export default function PrivacyPolicy() {
  const privacy = fs.readFileSync(
    path.join(process.cwd(), "src/markdown/metri/privacy.md"),
    "utf-8",
  )
  return <Markdown className="m-auto py-24" text={privacy} />
}
