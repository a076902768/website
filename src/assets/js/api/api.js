import axios from 'axios';

// 加入loading的動畫
axios.interceptors.request.use((request) => {
  window.$nuxt.$emit('loading', request.headers.Loading);
  return request;
}, (error) => Promise.reject(error));

axios.interceptors.response.use((response) => {
  const res = response.data;
  if (res.code !== 200) {
    if (res.code === 411
        || res.code === 412
        || res.code === 413
        || res.code === 414
        || res.code === 415
        || res.code === 416
        || res.code === 417
        || res.code === 418
        || res.code === 419
        || res.code === 420
        || res.code === 421
    ) {
      window.$nuxt.$store.commit('user/CLEAR');
      if (window.$nuxt.$route.name !== 'login') {
        window.$nuxt.$router.push('/login');
      }
    }
  }

  window.$nuxt.$emit('loading', false);
  return response;
});


class Api {
  static SERVER = process.env.API_BASE;

  static TOKEN;

  static async callAxios(method, url, params, contentType, auth, isDownload) {
    const headers = {};
    let responseTypeText = 'json';

    headers['Content-Type'] = contentType || 'form-data';

    if (auth) {
      const { token } = window.$nuxt.$store.state.user;

      headers.Authorization = `Bearer ${token}`;
    }

    /**
     * 如果要下載檔案
     * 設定 'responseType' 為 'arraybuffer
     */
    if (isDownload) {
      responseTypeText = 'arraybuffer';
    }

    try {
      const { status, data } = await axios({
        headers,
        method,
        url: this.SERVER + url,
        data: params,
        responseType: responseTypeText,
      });
      return new Promise((resolve, reject) => {
        if (status === 200) {
          resolve(data);
        } else {
          reject(new Error(''));
          this.$message.error(data.message);
        }
      });
    } catch (error) {
      return error;
    }
  }
}

export default Api;
