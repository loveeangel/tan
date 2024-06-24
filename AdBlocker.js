// AdBlocker.js

// 统一的广告屏蔽函数
function blockAds(responseBody) {
    let obj = JSON.parse(responseBody);
    
    // 针对不同APP的广告字段进行处理

    // 美团广告
    if (obj.ads) {
        obj.ads = [];
    }
    
    // 饿了么广告
    if (obj.advertisement) {
        obj.advertisement = [];
    }
    
    // 淘宝广告
    if (obj.advertisement) {
        obj.advertisement = [];
    }

    // 京东广告
    if (obj.ads) {
        obj.ads = [];
    }
    
    // 腾讯视频广告
    if (obj.adList) {
        obj.adList = [];
    }
    
    // 爱奇艺广告
    if (obj.ads) {
        obj.ads = [];
    }
    
    // 优酷广告
    if (obj.advertisement) {
        obj.advertisement = [];
    }
    
    // 抖音广告
    if (obj.aweme_list) {
        obj.aweme_list = obj.aweme_list.filter(item => !item.is_ads);
    }

    // 快手广告
    if (obj.ads) {
        obj.ads = [];
    }
    
    // QQ广告
    if (obj.adList) {
        obj.adList = [];
    }

    // 微信广告
    if (obj.advertisement_info) {
        obj.advertisement_info = [];
    }

    // 微博广告
    if (obj.statuses) {
        obj.statuses = obj.statuses.filter(item => !item.is_ad);
    }

    // 今日头条广告
    if (obj.data) {
        obj.data = obj.data.filter(item => !item.is_ad);
    }

    // 网易新闻广告
    if (obj.ads) {
        obj.ads = [];
    }

    // 小红书广告
    if (obj.data) {
        obj.data = obj.data.filter(item => !item.is_ads);
    }

    // B站广告
    if (obj.data) {
        obj.data = obj.data.filter(item => !item.ad_info);
    }

    // 拼多多广告
    if (obj.advertisement) {
        obj.advertisement = [];
    }

    // 百度地图广告
    if (obj.ad) {
        obj.ad = [];
    }

    // 滴滴广告
    if (obj.advertisement) {
        obj.advertisement = [];
    }

    return JSON.stringify(obj);
}

// 获取响应体并处理
let body = $response.body;
body = blockAds(body);
$done({body});
