// 蔚来 App 获取 Cookie
const key = "nio_cookie";
const value = $request.headers["Cookie"];
if (value) {
  $persistentStore.write(value, key);
  $notification.post("蔚来 Cookie 获取成功", "", "已写入本地存储");
}
$done({});
