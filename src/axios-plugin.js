import axios from 'axios';
import Vue from 'vue';

function getRequestObj(url, method, data) {
  return {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    url,
    method,
    data,
  };
}

export async function sendFormData({
  url,
  method,
  data,
  setLoading = () => {},
}) {
  let response;
  let error;
  setLoading(true);

  try {
    const requestObj = getRequestObj(url, method, data);
    response = await axios.request(requestObj);
  } catch (err) {
    error = err;
  } finally {
    setLoading(false);
  }

  return { response, error };
}

/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable prefer-arrow-callback */

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {};

// eslint-disable-next-line no-underscore-dangle
const _axios = axios.create(config);

_axios.interceptors.request.use(
  (config) => config, // Do something before request is sent
  (error) => Promise.reject(error), // Do something with request error
);

// Add a response interceptor
_axios.interceptors.response.use(
  (response) => response, // Do something with response data
  (error) => Promise.reject(error), // Do something with response error
);

// eslint-disable-next-line no-shadow
// eslint-disable-next-line no-unused-vars
Plugin.install = (Vue, options) => {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
