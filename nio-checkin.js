const cookie = $persistentStore.read("nio_cookie");
if (!cookie) {
  $notification.post("蔚来签到失败", "", "未获取到 Cookie，请先打开蔚来 App 获取");
  $done();
}

const url = "https://app-api.nio.com/growth/signin";
const headers = {
  "Cookie": cookie,
  "Content-Type": "application/json",
  "User-Agent": "NIOApp/5.22.0 (iPhone; iOS 17.0; Scale/3.00)"
};

$httpClient.post({ url, headers }, function (err, res, data) {
  if (err) {
    $notification.post("蔚来签到失败", "", err);
  } else {
    try {
      const result = JSON.parse(data);
      if (result.success) {
        $notification.post("蔚来签到成功 ✅", "", `积分：+${result.data.rewardPoints || 0}`);
      } else {
        $notification.post("蔚来签到失败 ❌", "", result.message || "未知错误");
      }
    } catch (e) {
      $notification.post("签到响应解析失败", "", data);
    }
  }
  $done();
});
