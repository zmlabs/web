import { usePathname } from "next/navigation"

export function useCurrentProject() {
  const pathname = usePathname()
  const segments = pathname.split("/")
  const projectId = segments[2]
  return projectId
}
