declare module "bun" {
  interface Env {
    CLOUD_NAME: string;
    API_KEY: string;
    API_SECRET: string;
    DIRECTORY_NAME: string;
  }
}

export const envs: Bun.Env = {
  CLOUD_NAME: Bun.env.CLOUD_NAME,
  API_KEY: Bun.env.API_KEY,
  API_SECRET: Bun.env.API_SECRET,
  DIRECTORY_NAME: Bun.env.DIRECTORY_NAME,
};
