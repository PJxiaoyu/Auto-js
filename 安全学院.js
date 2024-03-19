/*** 
《安全学院》自动刷视频脚本 
by：PJ小宇 
***/ 
sleep(5000);
while(true){     
var progressRegex = /进度: ([0-9]|[0-9][0-9])\./; // 修改正则表达式，移除匹配末尾的`.`并保证只匹配0到99的数字
var progressText = null;

// 查找所有包含进度信息的元素
var progressElements = id("ProgressTv").find();

// 遍历每个元素，查找第一个符合条件的文本值
for (var i = 0; i < progressElements.length; i++) {
    var text = progressElements[i].text();
    var match = text.match(progressRegex);
    if (match) {
        var progress = parseInt(match[1]);
        if (progress < 100) {
            progressText = text;
            break; // 找到第一个符合条件的文本后停止循环
        }
    }
}

// 输出符合条件的第一个文本值
//console.log(progressText);
        

        if(progressText){ 
        var a = id("ProgressTv").textContains(progressText).findOne(5000).bounds();
            click(a.centerX(),a.centerY()); 
            console.log("找到一个未完成的视频，"+text); 
        }else{ 
            log("你貌似已完成所有课程！"); 
            break; 
        } 
    
    i=0 
    while(i<1){ 
        if(id("course_progress").textContains("100.00%").exists()){ 
            i = 2 
            toast("该课时已完成"); 
            sleep(2000) 
            toast("即将播放下一个"); 
            back(); 
            sleep(500) 
            back() 
            sleep(2000) 
        if(textContains("危险化学品企").exists()){ 
            var b = id("pxItemNameTv").textContains("危险化学品企业").findOne().bounds() 
            click(b.centerX(),b.centerY()); 
            toast("刷新进度"); 
            sleep(1500) 
            if(textContains("课程").exists()){ 
                var b = id("tab_title_tv").textContains("课程").findOne().bounds() 
                click(b.centerX(),b.centerY()); 
                sleep(3000); 
                !click("未完成") 
                toast("学习课程"); 
            }else{} 
        }else{ 
        toast("没有找到要学习的课程"); 
        } 
        }else{ 
        i=0 
        toast("继续播放该课程"); 
        sleep(15000); 
        } 
    } 
};
