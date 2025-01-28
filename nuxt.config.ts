// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: true,
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/fonts", "@nuxt/icon", "nuxt-tiptap-editor", "nuxt-oidc-auth", '@nuxtjs/tailwindcss'],

  runtimeConfig: {
    oidc: {
      providers: {
        oidc: {
          redirectUri: "",
          userInfoUrl: "",
          openIdConfiguration: {}
        }
      },
      middleware: {

      },
      enabled: true,
      session: {}
    },
  },

  oidc: {
    defaultProvider: 'auth0',
    providers: {
      auth0: {
        pkce: true,
        responseType: 'code',
        responseMode: 'query',
        tokenRequestType: 'form-urlencoded',
        grantType: 'authorization_code',
        authenticationScheme: 'body',
        state: true,
        baseUrl: 'https://dev-l6ra6zkm8h3g32kv.eu.auth0.com/',
        authorizationUrl: 'https://dev-l6ra6zkm8h3g32kv.eu.auth0.com/authorize',
        tokenUrl: 'https://dev-l6ra6zkm8h3g32kv.eu.auth0.com/oauth/token',
        userInfoUrl: 'https://dev-l6ra6zkm8h3g32kv.eu.auth0.com/userinfo',
        redirectUri: 'http://localhost:3000/auth/auth0/callback',
        clientId: '9FRZ03c61GPIpQUcA0eSVzDiGlJ0al48', // Leave blank to use environment variable
        clientSecret: 'Earz-IAG4WJZiyxgwdtDa11_qMlUIT1JPrPXcmJmHH2c94AVGKuQg0yw1c5pBD5e', // Leave blank to use environment variable
        scope: ['openid', 'profile', 'email', 'offline_access'],
        userNameClaim: 'email',
        skipAccessTokenParsing: true,
        validateAccessToken: false,
        exposeAccessToken: true,
        exposeIdToken: true,
        callbackRedirectUrl: "/",
        audience: 'https://dev-l6ra6zkm8h3g32kv.eu.auth0.com/api/v2/',
        additionalAuthParameters: {
          audience: 'https://dev-l6ra6zkm8h3g32kv.eu.auth0.com/api/v2/'
        }
      },
    },
    session: {
      cookie: {
        sameSite: 'lax'
      },
      expirationCheck: false,
      automaticRefresh: true,
      expirationThreshold: 3600,
    },
    enabled: true,
    middleware: {
      globalMiddlewareEnabled: true,
      customLoginPage: false,
    }
  },

  nitro: {
    preset: 'node-server',
    storage: { // Local file system storage for demo purposes
      oidc: {
        driver: 'fs',
        base: 'playground/oidcstorage',
      },
    },
  },
});