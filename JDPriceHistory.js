// JDPriceHistory.js

// 模拟第三方API的价格历史数据（假设这些API存在并返回相应的数据）
function fetchHistoricalPrices(productId) {
    // 模拟API调用，返回假数据
    return [
        { date: '2023-01-01', price: 299.99 },
        { date: '2023-02-01', price: 279.99 },
        { date: '2023-03-01', price: 269.99 },
        { date: '2023-04-01', price: 259.99 },
        { date: '2023-05-01', price: 249.99 }
    ];
}

// 生成历史价格表格HTML
function generatePriceTable(prices) {
    let table = '<div id="price-history" style="border: 1px solid #ccc; padding: 10px; margin-top: 10px;">';
    table += '<h3>历史价格</h3><table><tr><th>日期</th><th>价格</th></tr>';
    for (let price of prices) {
        table += `<tr><td>${price.date}</td><td>￥${price.price}</td></tr>`;
    }
    table += '</table></div>';
    return table;
}

// 提取商品ID并获取历史价格
function addPriceHistory(responseBody) {
    let productIdMatch = responseBody.match(/\/(\d+)\.html/);
    if (!productIdMatch) return responseBody;

    let productId = productIdMatch[1];
    let prices = fetchHistoricalPrices(productId);
    let priceTable = generatePriceTable(prices);

    responseBody = responseBody.replace(/(<div class="summary-price">)/, `$1${priceTable}`);
    return responseBody;
}

let body = $response.body;
body = addPriceHistory(body);
$done({body});
