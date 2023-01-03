var now = new Date();
function createtime() {
  // 当前时间
  now.setTime(now.getTime() + 1000);
  var start = new Date("08/01/2022 00:00:00"); // 旅行者1号开始计算的时间
  var dis = Math.trunc(23400000000 + ((now - start) / 1000) * 17); // 距离=秒数*速度 记住转换毫秒
  var unit = (dis / 149600000).toFixed(6);  // 天文单位
  var grt = new Date("08/09/2022 00:00:00");	// 网站诞生时间
  var days = (now - grt) / 1e3 / 60 / 60 / 24,
    dnum = Math.floor(days),
    hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
    hnum = Math.floor(hours);
  1 == String(hnum).length && (hnum = "0" + hnum);
  var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
    mnum = Math.floor(minutes);
  1 == String(mnum).length && (mnum = "0" + mnum);
  var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
    snum = Math.round(seconds);
  1 == String(snum).length && (snum = "0" + snum);
  let currentTimeHtml = "";
  (currentTimeHtml =
    hnum < 18 && hnum >= 9
    ? `<img class='boardsign' src='https://img.shields.io/badge/GTC-%E6%91%B8%E9%B1%BC%E4%B8%AD-6adea8?style=social&logo=cakephp%27%20title=%27%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E8%83%BD%E5%A4%9F%E5%AE%9E%E7%8E%B0%E8%B4%A2%E5%AF%8C%E8%87%AA%E7%94%B1%E5%91%80' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`
    : `<img class='boardsign' src='https://img.shields.io/badge/GTC-GB%E4%BC%91%E6%81%AF%E5%95%A6-6adea8?style=social&logo=coffeescript%27%20title=%27%E8%BF%99%E4%B8%AA%E7%82%B9%E4%BA%86%E5%BA%94%E8%AF%A5%E5%8E%BB%E7%9D%A1%E8%A7%89%E5%95%A6%EF%BC%8C%E7%86%AC%E5%A4%9C%E5%AF%B9%E8%BA%AB%E4%BD%93%E4%B8%8D%E5%A5%BD%E5%93%A6' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`),
    document.getElementById("workboard") &&
    (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
// 设置重复执行函数，周期1000ms
setInterval(() => {
  createtime();
}, 1000);