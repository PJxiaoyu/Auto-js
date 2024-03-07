/***
《安全学院》自动刷视频脚本
by：PJ小宇
***/

while(true){    
    while(true){
        if(textContains("进度：: 0%").exists()){
            var a = id("ProgressTv").textContains("进度：: 0%").findOne().bounds()
            click(a.centerX(),a.centerY());
            //点击按钮中心
            toast("找到一个0进度视频");
            break;
        }else{
            j=1
            while(j<100){
                if(textContains("进度：: "+j+".").exists()){
                    var a = id("ProgressTv").textContains("进度：: "+j+".").findOne().bounds()
                    click(a.centerX(),a.centerY());
                    toast("找到一个"+j+"%进度的视频");
                    sleep(500)
                    break;
                }else{
                sleep(20)
                j++
            // toast("寻找"+j+"进度视频");
                } 
            }
            swipe(600,1100,600,950,1000);
        }
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
}