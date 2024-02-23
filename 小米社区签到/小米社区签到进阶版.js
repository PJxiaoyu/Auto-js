/*
by：PJ小宇
QQ：898811295
*/
run();//计时
device.wakeUp();//亮屏
sleep(800);
curTime = new Date();
date = curTime.getFullYear() + "-" + 0 + (curTime.getMonth() + 1) + "-" + curTime.getDate();
//获取当前日期
sleep(500);
killAPP("小米社区")
sleep(800);
主程序1();

//关闭程序
function killAPP(name){
   var packageName=app.getPackageName(name)
app.openAppSetting(packageName)
sleep(1000)
while(true){
   if(text("结束运行").exists()){
        click("结束运行");
        sleep(1000);
        while(true){
             if(textContains("确定").exists()){
                 !click("确定");
                 sleep(500);
                 break;
             }
             break;
        }
        break;
     }
  }
 back();
}

//打开软件
function 主程序1(){
launchApp("小米社区");
className("android.widget.TextView").textContains("跳过").findOne(3000).click();
sleep(1000);//跳过广告
var regex = /(0[0-9]|1[0-9]|2[0-3])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])/; 
var textView = className("android.widget.TextView").depth("18").textMatches(regex).clickable(true).findOne(); 
if (textView) { textView.click(); 
    sleep(1000); 
}
//浏览帖子15秒
sleep(15000);
back();
sleep(5000);
className("android.widget.ImageView").desc("签到").findOne().click();
sleep(10000);
className("android.widget.TextView").textContains("立即签到").findOne().click();
sleep(10000);
if (!images.requestScreenCapture()) {
    log('请求截图失败');
    exit();
    }
    sleep(2000);
    var pictures = images.clip(captureScreen(),device.width*1/6,device.height*1/3,device.width*4/6,device.height*1/4);
//左上角x y 和宽高
images.save(pictures,"/sdcard/Pictures/pictures.png","png",100);
var img =images.read("/sdcard/Pictures/pictures.png");
var g = images.grayscale(img);
var result =images.threshold(g, 112, 155);
images.save(result,"/sdcard/Pictures/result.png", "png", 100);
   var image = images.read("/sdcard/Pictures/result.png");
　　var width = image.getWidth();
　　var height = image.getHeight();
　　var path ="/sdcard/Pictures/test.txt";
//检查文件是否存在
if (files.exists(path)) {
    // 使用空字符串覆盖文件内容
    files.write(path, "");
    //console.log("文件内容已清空");
} else {
    //console.log("文件不存在");
}
　　for (let i = 1; i<height; i+=4){
　　var s="";
　　for (let j = 1; j<width; j+=4){
　　var number = images.pixel(image, j, i);
　　var color = colors.toString(number);
   // log(color)
   
    var ss = color == "#9B9B9B"?1:0;
　　s+= ss;
    }
　　files.append(path, s +"\n");
   }
// 读取文本内容
var content = files.read(path);

// 按换行符分割成多行
var lines = content.split("\n");

// 遍历每一行
for (let i = 0; i < lines.length - 1; i++) {
    var line1 = lines[i];
    var line2 = lines[i + 1];
    
    // 检查是否连续两行以1开头和结尾，且中间至少有多个0
    if (line1.startsWith("1") && line1.endsWith("1") &&
        line2.startsWith("1") && line2.endsWith("1") &&
        line1.length === line2.length &&
        line1.slice(1, -1).split("0").length - 1 >= 30) {
        
        // 输出满足条件的两行
        //console.log("Line 1: " + line1);
        //console.log("Line 2: " + line2);
        // 定义要查找的字符串模式
        var regex = /1[0]{12,}1/g; // 匹配以1开头，至少有多个0，以1结尾的字符串
        var result = line1.match(regex);
        if (result) {
            var matchedString = result[0];
            var length = matchedString.length;
            log("匹配结果：" + matchedString); // 输出匹配到的字符串
            log("匹配字符串长度：" + length); // 输出匹配字符串的长度
        } else {
            toastLog("未找到匹配的字符串");
        }
        // 如果只需要找到第一组满足条件的行，则跳出循环
        break;
    }
}

var arr = files.read(path).split("\n");
　　var len =-1;
　　for (let i=0; i< arr.length; i++){
　　var index = arr[i].indexOf(matchedString);
　　if (index >-1){
　　len=device.width*1/6+index*4+length*2;
//length*2为滑块中心，*4是前面以4为循环
   log("滑块中心:"+位置len);
　　break;
　　}
}
// 获取描述为“开始签到”的组件
var imageView = className("android.widget.TextView").depth("16").indexInParent("1").findOne();

if (imageView != null) {
    // 获取组件的中心坐标
    var centerX = imageView.getCenterX();
    var centerY = imageView.getCenterY();
    
    // 输出中心坐标
    console.log("中心坐标: (" + centerX + ", " + centerY + ")");
} else {
    // 如果没有找到符合条件的组件
    console.log("未找到组件");
}
    　　if (len > -1) {
    　　continuousSwipe(centerX, centerY, len, centerY, 1500);
    　　}else{
    　　log("计算失败");
    　　};
//随机滑动
function continuousSwipe(x1, y1, x2, y2, duration) {
    var steps = 100; // 滑动步数
    var dx = (x2 - x1) / steps;
    var dy = (y2 - y1) / steps;
    var stepDuration = duration / steps; // 每步持续时间

    // 定义手势路径
    var path = [];
    for (var i = 0; i <= steps; i++) {
        var moveX = x1 + dx * i + random(0, 2); // 在x方向加入随机性
        var moveY = y1 + dy * i + random(-6, 6); // 在y方向加入随机性
        path.push([moveX, moveY, stepDuration]);
    }

    // 模拟手势操作
    gesture.apply(null, [duration].concat(path));
}
sleep(1000);

//killAPP("小米社区");
};

function run() { //声明运行函数
    threads.start(function() {
        startTime = new Date().getTime();
    
        while (true) {
            runTime();
            sleep(1000);
        }
    });
}

function runTime() {
    var endTime = new Date().getTime();
    var spendTime = Math.floor((endTime - startTime) / 1000);
    //log('已等待%m秒', spendTime);
    let t = 180;
    if (spendTime >= t) {
        console.info("定时已结束");
        launchApp("AutoJs6");
        exit();
    }
};
