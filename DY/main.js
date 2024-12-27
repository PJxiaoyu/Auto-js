// 等待 "搜索" 文本框加载
let searchBox = text("搜索").findOne(5000); // 等待 5 秒
if (searchBox) {
    // 将 "PJxiaoyu" 粘贴到搜索框中
    searchBox.setText("PJxiaoyu");
    sleep(1000); // 确保操作完成

    // 查找 "xiaoyu文剧场"
    let result = text("xiaoyu文剧场").findOne(3000); // 等待 3 秒
    if (result) {
        // 找到 "xiaoyu文剧场"，清空搜索框内容
        searchBox.setText("");
        i = 0;
        h = 130;
        progressText = "分享";

        while (i < h) {
        see();
        }
    } else {
        // 未找到，弹出提示
        searchBox.setText("请关注一下PJxiaoyu再使用,谢谢！");
        toast("请关注一下PJxiaoyu再使用,谢谢！");
    }
} else {
    toast("请打开转发界面！");
}

function see() {
    // 查找包含分享文字的控件
    let shareButton = text(progressText).findOne(1500);

    if (shareButton) {
        shareButton.click(); // 点击分享按钮
        sleep(200);
        i = 0; // 重置计数器
    } else {
        log("该下划了");
        continuousSwipe(device.width * 4 / 5, device.height * 28 / 30, device.width * 4 / 6, device.height * 12 / 30, 1000);

        // 再次查找分享按钮
        shareButton = textContains(progressText).findOne(1500);

        if (shareButton) {
            shareButton.click();
            sleep(200);
            i = 0; // 重置计数器
        } else {
            log("未找到分享，停止滑动");
            i = h + 1; // 跳出循环
        }
    }
}

function continuousSwipe(x1, y1, x2, y2, duration) {
    var steps = 100; // 滑动步数
    var dx = (x2 - x1) / steps;
    var dy = (y2 - y1) / steps;
    var stepDuration = duration / steps; // 每步持续时间

    // 定义手势路径
    var path = [];
    for (var i = 0; i <= steps; i++) {
        var moveX = x1 + dx * i + random(-1, 1); // 在 x 方向加入随机性
        var moveY = y1 + dy * i + random(-6, 6); // 在 y 方向加入随机性
        path.push([moveX, moveY, stepDuration]);
    }

    // 模拟手势操作
    gesture.apply(null, [duration].concat(path));
}
