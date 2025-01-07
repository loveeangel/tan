// remove-douyin-ads.js
let body = $response.body;
if (body) {
    try {
        let obj = JSON.parse(body);

        // 针对接口内容，移除广告
        if (obj.data) {
            obj.data = obj.data.filter(item => !item.hasOwnProperty('ad_info') && !item.ad);
        }

        // 删除其他字段中的广告相关数据
        if (obj.aweme_list) {
            obj.aweme_list = obj.aweme_list.filter(item => !item.is_ads);
        }

        $done({ body: JSON.stringify(obj) });
    } catch (e) {
        console.log("去广告脚本解析失败: " + e);
        $done({});
    }
} else {
    $done({});
}
