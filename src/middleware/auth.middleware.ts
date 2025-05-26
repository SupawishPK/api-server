import { auth } from 'express-openid-connect';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  authRequired: true,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  routes: {
    callback: '/callback',
    login: '/login',
    logout: '/logout'
  },
  authorizationParams: {
    response_type: "id_token",
    response_mode: "form_post",
    scope: "openid profile email",
  }
};

export const authMiddleware = auth(config); 