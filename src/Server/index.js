/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-04-30 18:36:24
 * @LastEditTime: 2020-04-30 18:41:02
 * @LastEditors: zhangcunxia
 * @Description:网络Api
 */

const ENV = 1;
const ENVS = {1: 'dev', 2: 'dist'};
const BaseUrl = {dev: '', dist: ''};

function getBaseUrl() {
  return BaseUrl[ENVS[ENV]];
}

export function getUserInfo(params) {
  const url = getBaseUrl();
  return url;
}
