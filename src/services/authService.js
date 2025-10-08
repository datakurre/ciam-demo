import { UserManager } from 'oidc-client-ts';

const userManager = new UserManager({
  authority: 'https://demo.duendesoftware.com',
  client_id: 'interactive.public',
  redirect_uri: window.location.origin + '/callback',
  post_logout_redirect_uri: window.location.origin,
  response_type: 'code',
  scope: 'openid profile email',
});

export const login = () => {
  return userManager.signinRedirect();
};

export const logout = () => {
  return userManager.signoutRedirect();
};

export const getUser = () => {
  return userManager.getUser();
};

export const signinCallback = () => {
  return userManager.signinCallback();
};

export default userManager;
