/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_AUTH_DOMAIN: string;
      REACT_APP_CLIENT_ID: string;
    }
  }
}

export {};
