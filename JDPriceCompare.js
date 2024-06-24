// JDPriceCompare.js

// 模拟其他电商平台的价格API（假设这些API存在并返回相应的价格数据）
function fetchOtherPlatformPrices(productId) {
    return {
        "Taobao": 199.99,
        "Pinduoduo": 189.99,
        "Suning": 205.00
    };
}

// 提取商品价格并进行比价
function comparePrices(responseBody) {
    let jdPriceMatch = responseBody.match(/"p":"(\d+\.\d+)"/);
    if (!jdPriceMatch) return responseBody;

    let jdPrice = parseFloat(jdPriceMatch[1]);
    let productIdMatch = responseBody.match(/\/(\d+)\.html/);
    if (!productIdMatch) return responseBody;

    let productId = productIdMatch[1];
    let otherPrices = fetchOtherPlatformPrices(productId);

    let comparisonHtml = `
        <div id="price-comparison" style="border: 1px solid #ccc; padding: 10px; margin-top: 10px;">
            <h3>比价信息</h3>
            <p>京东价格：￥${jdPrice}</p>
            <p>淘宝价格：￥${otherPrices["Taobao"]}</p>
            <p>拼多多价格：￥${otherPrices["Pinduoduo"]}</p>
            <p>苏宁价格：￥${otherPrices["Suning"]}</p>
        </div>
    `;

    responseBody = responseBody.replace(/(<div class="summary-price">)/, `$1${comparisonHtml}`);
    return responseBody;
}

let body = $response.body;
body = comparePrices(body);
$done({body});
