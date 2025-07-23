// functions/_middleware.js

export async function onRequest(context) {
  const { request } = context
  const url = new URL(request.url)
  const { pathname } = url

  // If the path is for a static asset, an API route, or a file, let it pass through.
  if (pathname.startsWith("/_next") || pathname.startsWith("/assets")) {
    return context.next()
  }

  const supportedLanguages = ["en-US", "ja-JP", "zh-CN"]
  const pathSegments = url.pathname.split("/").filter(Boolean)

  // If the path already has a language prefix, let it pass through.
  if (
    pathSegments.length !== 0 &&
    supportedLanguages.includes(pathSegments[0])
  ) {
    return context.next()
  }

  const acceptLanguage = request.headers.get("accept-language") || ""
  let targetLang = "en-US"

  if (acceptLanguage.toLowerCase().startsWith("ja")) {
    targetLang = "ja-JP"
  } else if (acceptLanguage.toLowerCase().startsWith("zh")) {
    targetLang = "zh-CN"
  }

  // Prepend the language and redirect.
  const newPath = `/${targetLang}${url.pathname}`
  const redirectUrl = new URL(newPath, url).toString()

  return Response.redirect(redirectUrl, 302)
}
