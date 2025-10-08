import { UserManager } from 'oidc-client-ts';
import { getFullUrl, BASE_PATH } from '../config';

const userManager = new UserManager({
  authority: 'https://pandala-prod.cidaas.eu',
  client_id: 'acf2c834-89a6-467e-9869-ae2308906466',
  redirect_uri: getFullUrl('#/callback'),
  post_logout_redirect_uri: window.location.origin + BASE_PATH,
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
