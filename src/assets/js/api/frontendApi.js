import Api from './api';
// import qs from 'qs';

class FrontendApi extends Api {
  /**
   * 取得所有商品列表
   */
  static async getProductList({
    page, size, mournParkId, activtyType, category,
  }) {
    const res = await this.callAxios('GET', `/main/product-all?page=${page}&size=${size}&mournParkId=${mournParkId}&activtyType=${activtyType}&category=${category}`, null, undefined, false);
    return res;
  }

  /**
   * 取得單一商品
   */
  static async getProduct({ id, mournParkId }) {
    const res = await this.callAxios('GET', `/main/product?id=${id}&mournParkId=${mournParkId}`, null, undefined, false);
    return res;
  }

  /**
   * 隨機取得指定數量的其他商品
   */
  static async getProductMore({
    excludeId, productNumber, mournParkId, activtyType, category,
  }) {
    const res = await this.callAxios('GET', `/main/product-more?excludeId=${excludeId}&productNumber=${productNumber}&mournParkId=${mournParkId}&activtyType=${activtyType}&category=${category}`, null, undefined, false);
    return res;
  }

  /**
   * 查詢訂單
   */
  static async searchOrder(orderNumber, phoneNumber, verifyKey, verificationCode) {
    phoneNumber = encodeURIComponent(phoneNumber);
    const res = await this.callAxios('GET', `/main/search-order?orderNumber=${orderNumber}&phone=${phoneNumber}&verifyKey=${verifyKey}&verifyCode=${verificationCode}`, null, undefined, false);
    return res;
  }

  /**
   * 取得祭拜圖片
   */
  static async getMournFile({
    id, mournImgId,
  }) {
    let str = '';
    str += `?id=${id}`;
    str += `&mournImgId=${mournImgId}`;

    const res = await this.callAxios('GET', `/main/mourn-file${str}`, null, undefined, false, true);
    return res;
  }

  /**
   * 聯絡我們
   */
  static async contact({
    customerName, customerPhone, customerMail, context, verifyKey, verifyCode,
  }) {
    customerPhone = encodeURIComponent(customerPhone);
    const res = await this.callAxios('POST', `/main/contact?customerName=${customerName}&customerPhone=${customerPhone}&customerMail=${customerMail}&context=${context}&verifyKey=${verifyKey}&verifyCode=${verifyCode}`, null, undefined, false);
    return res;
  }

  /**
   * 祭拜位置-塔位下拉選單
   */
  static async getMournLocation() {
    const res = await this.callAxios('GET', '/main/mourn-location', null, undefined, false);
    return res;
  }

  /**
   * 祭拜位置-樓層下拉選單
   */
  static async getMournFloor({ mournParkId }) {
    const res = await this.callAxios('GET', `/main/mourn-floor?mournParkId=${mournParkId}`, null, undefined, false);
    return res;
  }

  /**
   * 祭拜位置-商品下拉選單
   */
  static async getMournProduct({ mournParkFloorId }) {
    const res = await this.callAxios('GET', `/main/mourn-product?mournParkFloorId=${mournParkFloorId}`, null, undefined, false);
    return res;
  }

  /**
   * 產生訂單
   */
  static async createOrder(orderDataList) {
    const formData = new FormData();

    formData.append('orderDataList', JSON.stringify(orderDataList));

    const res = await this.callAxios('POST',
      '/main/create-order',
      formData, undefined, false);
    return res;
  }

  /**
   * 首頁-取得陵園圖列表
   */
  static async getParkList() {
    const res = await this.callAxios('GET', '/main/mourn-park', null, undefined, false);
    return res;
  }

  /**
   * 取得未過期法會
   */
  static async mournSession({ mournParkId, dateGroupId }) {
    const res = await this.callAxios('GET', `/main/mourn-session?mournParkId=${mournParkId}&dateGroupId=${dateGroupId}`, null, undefined, false);
    return res;
  }

  /**
   * 取得年節思親-節日
   */
  static async festivalList({ dateGroupId }) {
    const res = await this.callAxios('GET', `/main/festival-list?dateGroupId=${dateGroupId}`, null, undefined, false);
    return res;
  }

  /**
   * 金流/前往付款
   */
  static async payment({ orderNumber }) {
    const res = await this.callAxios('GET', `/main/pos/payment?orderNumber=${orderNumber}`, null, undefined, false);
    return res;
  }

  /**
   * 金流/查看付款結果
   */
  static async paymentResult({ orderNumber }) {
    const res = await this.callAxios('GET', `/main/pos/result?orderNumber=${orderNumber}`, null, undefined, false);
    return res;
  }

  /**
   * 點擊統計
   */
  static async clickStatistics({ statisticsType, context }) {
    const res = await this.callAxios('POST', `/main/click-statistics?statisticsType=${statisticsType}&context=${context}`, null, undefined, false);
    return res;
  }
}

export default FrontendApi;
