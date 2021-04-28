import axios from 'axios';

class Api {
  // static SERVER = process.env.API_BASE;

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
        // url: this.SERVER + url,
        url: url,
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
