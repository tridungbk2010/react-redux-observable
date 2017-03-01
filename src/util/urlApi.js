/**
 * Created by chris on 2/17/17.
 */
export const getUrlApi = () => {
  const host = window.location.host;
  return (host.includes("beta") || host.includes("localhost")) ? {
      BASE_URL: process.env.API_URL_BETA,
      ACCOUNT: process.env.ACCOUNT_URL_BETA,
      HOME: process.env.HOME_URL_BETA
    } : {
      BASE_URL: process.env.API_URL,
      ACCOUNT: process.env.ACCOUNT_URL,
      HOME: process.env.HOME_URL
    };
};
