// DouyinAdBlocker.js
let body = $response.body;
let obj = JSON.parse(body);

// 移除广告
if (obj.aweme_list) {
    obj.aweme_list = obj.aweme_list.filter(item => !item.is_ads);
}

// 移除广告请求响应中的广告标记
if (obj.ad) {
    delete obj.ad;
}

body = JSON.stringify(obj);
$done({body});
