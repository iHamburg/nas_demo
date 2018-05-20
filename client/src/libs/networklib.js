/**
 * Created by zhangyiqing on 16/12/26.
 *
 *
 * 调用所有api
 */

var axios = require("axios");
// 生产
// const baseUrl = 'http://10.201.128.216:24080'

// 测试 SIT
// const baseUrl = 'http://10.201.128.127/api';

// 开发
const baseUrl = 'http://127.0.0.1:3000/api'

var networklib = {
  /**
   * 获取api - GET
   * @param url
   * @param params
   * @returns {Promise}
   */
  api_get: function(url, params) {
    return new Promise(function(resolve, reject) {
      //
      axios.get(baseUrl + url, { params }).then(obj => {
        var data = obj.data;

        if (data.resCode == "00100000") {
          resolve(data.obj);
        } else {
          var err = new Error(data.msg);
          err.code = data.resCode;
          reject(err);
        }
      }, err => reject);
    });
  },

  api_post: function(url, params) {
    return new Promise(function(resolve, reject) {
      axios.post(baseUrl + url, params).then(obj => {
        var data = obj.data;

        if (data.resCode == "00100000") {
          resolve(data.obj);
        } else {
          var err = new Error(data.msg);
          err.code = data.resCode;
          reject(err);
        }
      }, err => reject);
    });
  },

  api_put: function(url, params) {
    return new Promise(function(resolve, reject) {
      axios.post(url, params).then(obj => {
        var data = obj.data;

        if (data.resCode == "00100000") {
          resolve(data.obj);
        } else {
          var err = new Error(data.msg);
          err.code = data.resCode;
          reject(err);
        }
      }, err => reject);
    });
  },

  api_delete: function(url, params) {
    return new Promise(function(resolve, reject) {
      axios.post(url, params).then(obj => {
        var data = obj.data;

        if (data.resCode == "00100000") {
          resolve(data.obj);
        } else {
          var err = new Error(data.msg);
          err.code = data.resCode;
          reject(err);
        }
      }, err => reject);
    });
  }
};

module.exports = networklib;
