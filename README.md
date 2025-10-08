# OIDC Demo

This is a demo application that demonstrates how to use `oidc-client-ts` to authenticate with an OIDC provider in a React single-page application.

## How to configure your OIDC Provider

1.  **Create a new OIDC client** in your provider's dashboard.
2.  **Set the client's redirect URI** to `http://localhost:5173/callback` for local development or your production URL + `/callback` for production.
3.  **Ensure the client is configured for the Authorization Code Flow with PKCE** and does not require a client secret.
4.  **Take note of the authority URL and the client ID**.
5.  **Update the `src/services/authService.js` file** with your authority and client ID:

```javascript
const userManager = new UserManager({
  authority: 'YOUR_AUTHORITY_URL',
  client_id: 'YOUR_CLIENT_ID',
  redirect_uri: window.location.origin + '/callback',
  post_logout_redirect_uri: window.location.origin,
  response_type: 'code',
  scope: 'openid profile email',
});
```

## Development

To run the application locally, run the following commands:

```bash
npm install
npm run dev
```

## Deployment

This application is configured to be deployed to GitHub Pages. The `.github/workflows/deploy.yml` workflow will automatically build and deploy the application to the `gh-pages` branch.