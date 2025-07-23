// functions/_middleware.js

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const supportedLanguages = ['en-US', 'ja-JP', 'zh-CN'];
  const pathSegments = url.pathname.split('/').filter(Boolean);

  if (pathSegments.length !== 0 && supportedLanguages.includes(pathSegments[0])) {
    return context.next();
  }

  const acceptLanguage = request.headers.get('accept-language') || '';
  let targetLang = 'en-US'; 

  if (acceptLanguage.toLowerCase().startsWith('ja')) {
    targetLang = 'ja-JP';
  } else if (acceptLanguage.toLowerCase().startsWith('zh')) {
    targetLang = 'zh-CN';
  }

  const newPath = `/${targetLang}${url.pathname}`;
  const redirectUrl = new URL(newPath, url).toString();

  return Response.redirect(redirectUrl, 302);
}