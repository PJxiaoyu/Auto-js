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
var tg = className("android.widget.TextView").textContains("跳过").findOne(3000);
 if (tg) {
    // 点击该元素
    tg.click();
    // 可选：输出成功信息
    console.log("点击了'跳过广告'按钮");
} else {
    // 如果没有找到元素
    console.log("未找到广告");
}
sleep(5000);//跳过广告
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
textContains("立即签到").findOne().click();
sleep(10000);
if (!images.requestScreenCapture()) {
    log('请求截图失败');
    exit();
    }
    sleep(2000);
        // 获取描述为“开始签到”的组件
        auto();
        requestScreenCapture();
        var pictures2 = images.clip(captureScreen(),0,0,device.width,device.height);
        images.save(pictures2,"/sdcard/Pictures/pictures2.png","png",100);
        var img2 =images.read("/sdcard/Pictures/pictures2.png");
        var wx = images.read("/sdcard/Pictures/hk.png");
        //截图并找图
        var p = findImage(img2, wx, {
            //region: [0, 50],
            threshold: 0.8
        });
        if (p) {
            // 计算小图在大图中的中心坐标
            var centerX = p.x+ wx.width/2;
            var centerY = p.y + wx.height/2;
            var rX = p.x+ wx.width;
            // 显示找到的小图中心坐标
            log("找到滑块中心坐标：(" + centerX + ", " + centerY + ")");
        } else {
            // 如果没有找到小图
            log("没有找到滑块");
        }
var pictures = images.clip(captureScreen(),rX,device.height*11/30,device.width*4/6,p.y-device.height*11/30);
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
// 读取文本内容
var content = files.read(path);
// 分割文本为行
var lines = content.split('\n');
var previousMatches = null;

// 循环遍历每一行文本
for (var i = 0; i < lines.length - 1; i++) {
    var line = lines[i];

    // 寻找以10开头且以1结尾的字符串
    var matches = line.match(/10(0{30,})1/g);
    if (matches) {
        for (var j = 0; j < matches.length; j++) {
            var matchIndex = line.indexOf(matches[j]);
            var endIndex = matchIndex + matches[j].length;
            
            // 如果上一行也有匹配项且起始位置和结束位置相同
            if (previousMatches && previousMatches[0] === matchIndex && previousMatches[1] === endIndex) {
                //console.log("第 " + i + " 行，从第 " + (matchIndex + 1) + " 个字符开始，结束于第 " + endIndex + " 个字符");
                //console.log("第 " + (i + 1) + " 行，从第 " + (matchIndex + 1) + " 个字符开始，结束于第 " + endIndex + " 个字符");
                // 结束查找
                length = matches[j].length;
                i = lines.length;
                break;
            }
            previousMatches = [matchIndex, endIndex];
        }
    } else {
        previousMatches = null; // 如果这一行没有匹配项，则重置上一行的匹配项
    }
}

var arr = files.read(path).split("\n");
　　var len =-1;
　　for (let i=0; i< arr.length; i++){
　　var index = arr[i].indexOf(matches[j]);
　　if (index >-1){
　　len = rX+index*4+length*2;
//length*2为滑块中心，*4是前面以4为循环
   log("滑块中心:"+len);
　　break;
　　}
}
　　if (len > -1) {
    　　continuousSwipe(centerX, centerY, len, centerY, 1500);
        sleep(1500);
        if (p) {
            continuousSwipe(centerX, centerY, len, centerY, 1500);
            log("尝试第二次签到");
            sleep(1500);
            if (p) {
            continuousSwipe(centerX, centerY, len, centerY, 1500);
            log("尝试第二次签到");
            } else {
            log("签到完成");
            }
        } else {
            log("签到完成");
        }
    　　}else{
    　　log("签到失败");
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
        var moveX = x1 + dx * i + random(-1, 1); // 在x方向加入随机性
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
    let t = 300;
    if (spendTime >= t) {
        console.info("定时已结束");
        launchApp("AutoJs6");
        exit();
    }
};
