// 检查无障碍服务是否已启用
if (!auto.service) {
    app.startActivity({
        action: "android.settings.ACCESSIBILITY_SETTINGS"
    });
    toast("请打开无障碍服务");
    waitForService();
}

function waitForService() {
    // 等待无障碍服务启动
    while (!auto.service) {
        sleep(1000);
    }
    toast("无障碍服务已启用");
}
//launchApp("浙里办");
// 寻找包含"开始答题"四个字的元素
var d;
var i2;
var pj = false;
function wang(){
var startButton = textContains("开始答题").findOne(60000);
// 如果找到了"开始答题"按钮
if (startButton) {
  // 上滑屏幕5次
  for (var i = 0; i < 5; i++) {
    swipe(device.width / 2, device.height * 0.8, device.width / 2, device.height * 0.2, 500);
    sleep(500); // 可选，可以添加一个延迟等待屏幕滑动完成   
  }
  toast("by：PJ小宇,QQ:898811295");
  // 获取className("android.view.View").depth("8")的所有文本值
  findElementsWithBrackets();
  var views = className("android.view.View").depth(d).indexInParent(i2).find();
  var daan = [];
  for (var i = 0; i < views.length; i++) {
    var text = views[i].text();
    var matches = text.match(/【([^【】]+)】/g); // 使用正则表达式提取所有【】中的字符
    if (matches) {
      for (var j = 0; j < matches.length; j++) {
        var characters = matches[j].replace(/【|】/g, ""); // 去除【】字符
        daan.push(characters);
      }
    }
  }
  // 给daan数组后面增加7行内容为"PJ小宇"
  daan.push("PJ小宇", "PJ小宇", "PJ小宇", "PJ小宇", "PJ小宇", "PJ小宇", "PJ小宇");

  console.log(daan);
  startButton.click();

  function timu() {
    // 读取屏幕上的文本并取消特殊字符
    findElementsWithBrackets();
    var screenText = className("android.view.View").depth(d).indexInParent(i2).findOne().text();
    var pattern = /[`~!@#$^&*()=|';'“”\\\.<>\/?~！@#￥……&*（）________——|'；《》：'。，、？\s]/g;
    screenText3 = screenText.substring(0,5); // 提取前5个字符
    screenText = screenText.substring(5); // 舍弃前5个字符
    toast("题目：" + screenText);
    var screenText = screenText.match(/【([^【】]+)】/); // 使用正则表达式提取所有【】中的字符串（包括【】）
    console.log(screenText);
    var screenText2 = screenText[0].replace(/【|】/g, ""); // 去除【】字符
    console.log(screenText2);
    /*转换screenText为模糊匹配的正则表达式
    //var regex = new RegExp(".*" + screenText2 + ".*", "i");
    // 在每一行中查找模糊匹配的文本
    for (var i = 0; i < daan.length; i++) {
      var line = daan[i].trim();

      // 判断是否模糊匹配
      if (regex.test(line)) {
          */
     var exactMatch = screenText2.trim(); // 假设screenText2是一个字符串

// 在每一行中进行完全匹配的文本查找
for (var i = 0; i < daan.length; i++) {
    var line = daan[i].trim();

    // 判断是否完全匹配
    if (line === exactMatch) {
        // 输出匹配行内容
        var nextLine = daan[i + 1].trim();
        var nextLine2 = daan[i + 2].trim();
        var nextLine3 = daan[i + 3].trim();
        var nextLine4 = daan[i + 4].trim();
        var nextLine5 = daan[i + 5].trim();
        var nextLine6 = daan[i + 6].trim();
        var nextLine7 = daan[i + 7].trim();
        sleep(100);
        var screenText5 = screenText3.includes("判断题");
        var screenText3 = screenText3.includes("单选题");
        if (screenText3||screenText5){
       // toast("该题为判断题或单选题")
        !click(nextLine);  
        break;  
        }else{   
         !click(nextLine);
        sleep(100);
        !click(nextLine2);
        sleep(100);
        swipe(device.width / 2, device.height * 0.8, device.width / 2, device.height * 0.2, 200); // 上滑屏幕
        sleep(100);
        !click(nextLine3);
        sleep(100);
        swipe(device.width / 2, device.height * 0.8, device.width / 2, device.height * 0.2, 200); // 上滑屏幕
        !click(nextLine4);
        sleep(100);
        swipe(device.width / 2, device.height * 0.8, device.width / 2, device.height * 0.2, 200); // 上滑屏幕
        !click(nextLine5);      
         sleep(100);
        swipe(device.width / 2, device.height * 0.8, device.width / 2, device.height * 0.2, 200); // 上滑屏幕
        !click(nextLine6);
        sleep(100);
        swipe(device.width / 2, device.height * 0.8, device.width / 2, device.height * 0.2, 200); // 上滑屏幕
        !click(nextLine7);
        //toast("答案：" + nextLine + nextLine2 + nextLine3 + nextLine4 + nextLine5);
        sleep(100);
        //toast("已找到答案");
        }
        break;
      }
    }
  }

  sleep(800);
  timu();
  sleep(1000);
  var daanButton = textContains("提交答案").findOne();
  daanButton.click();
  sleep(500);
  timu();
  sleep(1000);
  //!click("提交答案")
  daanButton.click();
  sleep(2000);
} else {
  console.log("未找到开始答题按钮");
}
}
for (var i = 0; i < 5; i++) {
    wang();
  }
// 寻找包含【】字符的UI元素并输出其深度和在父元素中的索引
function findElementsWithBrackets() {
    var rootNode = className("android.view.View").findOne();
    if (rootNode) {
        findElements(rootNode);
    } else {
        log("未找到根节点");
    }
}
function findElements(node) {
    if (!pj && node) {
        if (node.text().indexOf("【") !== -1) {
            d = depth(node);
            i2 = indexInParent(node);
          //  pj = true;
           //log("包含【】字符的元素深度: " + depth(node) + ", 父元素索引: " + indexInParent(node));
        }
        var children = node.children();
        for (var i = 0; i < children.length; i++) {
            findElements(children[i]);
        }
    }
}

// 计算元素的深度
function depth(node) {
    var depth = 0;
    var parent = node.parent();
    while (parent) {
        depth++;
        parent = parent.parent();
    }
    return depth;
}

// 获取元素在父元素中的索引
function indexInParent(node) {
    var index = 0;
    var parent = node.parent();
    if (parent) {
        var siblings = parent.children();
        for (var i = 0; i < siblings.length; i++) {
            if (siblings[i].equals(node)) {
                index = i;
                break;
            }
        }
    }
    return index;
}

