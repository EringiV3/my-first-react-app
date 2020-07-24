export const ENV: 'production' | 'test' | 'development' = process.env.NODE_ENV;
export const CMS_BASE_URI: string =
  process.env.REACT_APP_MICRO_CMS_BASE_URI || '';
export const ARTICLES_PATH: string = `${CMS_BASE_URI}/articles`;
export const API_KEY: string = process.env.REACT_APP_MICRO_CMS_API_KEY || '';
