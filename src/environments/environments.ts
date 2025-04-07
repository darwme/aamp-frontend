import { User } from "../app/core/constants/user.enum";

export const environment = {
  production: false,
  application: {
    version: '1.0.0',
    environment: 'DEVELOPMENT',
    name: 'AAMP',
    USERDATA_KEY: 'authf649fc9a5f55',
    isMockEnabled: true,
    token: 'token',
  },
  apiUrl: '/api',
};
