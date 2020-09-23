import { initAuth0 } from '@auth0/nextjs-auth0'

export default initAuth0({
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || "HhfEf7Q3czt5zlEC2CSfl4E6sXj67Nhe",
  clientSecret: process.env.AUTH0_CLIENT_SECRET || "ktc968BdvlrYeqs_zlXdqbF5HtOd57KTHrmM7TIV83Dt1OEXtlCR68KKHmgEXQdU",
  scope: process.env.NEXT_PUBLIC_AUTH0_SCOPE || 'openid profile',
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN || "danvitoriano.auth0.com",
  redirectUri:
    process.env.NEXT_PUBLIC_REDIRECT_URI ||
    'https://nextjs-auth0-dg84iyfi6.vercel.app/api/callback',
  postLogoutRedirectUri:
    process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI ||
    'https://nextjs-auth0-dg84iyfi6.vercel.app/',
  session: {
    cookieSecret: process.env.SESSION_COOKIE_SECRET || "87d28a997298ed9ce8dcda59e59a29d6",
    cookieLifetime: Number(process.env.SESSION_COOKIE_LIFETIME) || 7200,
  },
})
