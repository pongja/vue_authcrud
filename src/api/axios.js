import axios from 'axios';

function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL }, options));
  return instance;
}

export const posts = create(`${import.meta.env.VUE_APP_API_BASE_URL}posts`);
