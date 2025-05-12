declare global {
  namespace NodeJS {
    interface ProcessEnv {
        API_KEY: string;
        API_SECRET: string;
        QB_CLIENT_ID: string;
        QB_CLIENT_SECRET: string;
        QB_ENVIRONMENT: string;
        QB_REDIRECT_URI: string;
        SESSION_SECRET: string;
        PORT: number;
        DATABASE_URL: string;
    }
  }
}

export {};
