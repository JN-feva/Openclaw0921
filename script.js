// 簡單互動 — 純 JavaScript，無框架
(function () {
  const btn = document.getElementById("btn");
  const output = document.getElementById("output");

  if (btn && output) {
    btn.addEventListener("click", function () {
      const now = new Date();
      output.textContent = "你已於 " + now.toLocaleTimeString("zh-HK") + " 按下按鈕！";
    });
  }
})();