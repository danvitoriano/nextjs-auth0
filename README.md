# Next.js and Auth0 Example

Você pode acessar esse projeto em [https://codesandbox.io/s/amazing-snowflake-qtcgh](https://codesandbox.io/s/amazing-snowflake-qtcgh). Faça login com sua conta Github e fork para o seu perfil.

[Live Demo](https://nextjs-auth0-seven.vercel.app/)

Você também pode clonar o projeto e rodar normalmente na sua máquina. Basta ter o Node.js instalado.

## Challenge Integrate with Auth0 Social Login

This example shows how you can use `@auth0/nextjs-auth` to easily add authentication support to your Next.js application. It tries to cover a few topics:

- Signing in
- Signing out
- Loading the user on the server side and adding it as part of SSR ([`pages/advanced/ssr-profile.js`](pages/advanced/ssr-profile.js))
- Loading the user on the client side and using fast/cached SSR pages ([`pages/index.js`](pages/index.js))
- API Routes which can load the current user ([`pages/api/me.js`](pages/api/me.js))
- Using hooks to make the user available throughout the application ([`lib/user.js`](lib/user.js))

Read more: [https://auth0.com/blog/ultimate-guide-nextjs-authentication-auth0/](https://auth0.com/blog/ultimate-guide-nextjs-authentication-auth0/)

## How to use

You can test your code in real time with CodeSandBox version [https://codesandbox.io/s/nextjs-auth0-r2z04] or fork this repository and clone it to your localhost:

```bash
npm i
# or
yarn
```

To run on http://localhost:3000:

```bash
npm run dev
# or
yarn dev
```

## Configuring Auth0

1. Go to the [Auth0 dashboard](https://manage.auth0.com/) and create a new application of type _Regular Web Applications_ and make sure to configure the following
2. Go to the settings page of the application
3. Configure the following settings:

- _Allowed Callback URLs_: Should be set to `http://localhost:3000/api/callback` when testing locally or typically to `https://myapp.com/api/callback` when deploying your application.
- _Allowed Logout URLs_: Should be set to `http://localhost:3000/` when testing locally or typically to `https://myapp.com/` when deploying your application.

4. Save the settings

### Set up environment variables

To connect the app with Auth0, you'll need to add the settings from your Auth0 application as **environment variables**.

**- Test on localhost:**

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then, open `.env.local` and add the missing environment variables:

- `NEXT_PUBLIC_AUTH0_DOMAIN` - Can be found in the Auth0 dashboard under `settings`.
- `NEXT_PUBLIC_AUTH0_CLIENT_ID` - Can be found in the Auth0 dashboard under `settings`.
- `AUTH0_CLIENT_SECRET` - Can be found in the Auth0 dashboard under `settings`.
- `NEXT_PUBLIC_REDIRECT_URI` - The url where Auth0 redirects back to, make sure a consistent url is used here.
- `NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI` - Where to redirect after logging out
- `SESSION_COOKIE_SECRET` - A unique secret used to encrypt the cookies, has to be at least 32 characters. You can use [this generator](https://generate-secret.now.sh/32) to generate a value.
- `SESSION_COOKIE_LIFETIME` - How long a session lasts in seconds. The default is 2 hours.

**- Test on Vercel:**

You must use the same environment variables as before, but you will have to input each one into Vercel Dashboard > Settings > Environment Variables.

Remember to add Vercel production URL addresses to Auth0's _Allowed Callback URLs_ and _Allowed Logout URLs_ fields. More details on **'Deploy on Vercel'** section.

## Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

You can also deploy on Vercel right from CodeSandBox project. You can register and continuos delivery/deploy on Vercel for **free**.

### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/import/git?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.
