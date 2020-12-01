let Gesture = require('../utils/gesture.js');
let MyEvent = require('../utils/MyEvent.js')

let TAG = 'Kuaishou'
function Kuaishou(){
    this.pageName = 'com.kuaishou.nebula'
}

Kuaishou.prototype = new MyEvent()

Kuaishou.prototype.read = function(){
    console.log(TAG,'read');
    launch(this.pageName);
    sleep(7000);
    reading();
}

Kuaishou.prototype.sign = function(){
    launch(this.pageName);
    ui.run(()=>{
        global.w.text.setText('进入快手：');
    })
    sleep(7000);
    if(id('com.kuaishou.nebula:id/positive').find().size()>0){
        id('com.kuaishou.nebula:id/positive').findOne().click();
    }
    sleep(1000);
    Gesture.swipeUp();
    ui.run(()=>{
        global.w.text.setText('阅读第二段视频');
    })
    sleep(10000);
    Gesture.swipeUp();
    ui.run(()=>{
        global.w.text.setText('阅读第三段视频');
    })
    sleep(10000);
    Gesture.swipeUp();
    ui.run(()=>{
        global.w.text.setText('阅读第四段视频');
    })
    sleep(10000);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>gogogogogo>>>>>>>')
    console.log(id('com.kuaishou.nebula:id/redFloat').findOne())
    let b = id('com.kuaishou.nebula:id/redFloat').findOne().bounds();
    click(b.centerX(),b.centerY());
    ui.run(()=>{
        global.w.text.setText('进入任务页面');
    })
    sleep(7000)
    text('立即签到').findOne().click();
    sleep(1000)
    this.trigger('finish');
}


function reading(){
    if(text('点击打开图集').find().size()>0){
        Gesture.swipeUp();
        sleep(1000);
        return reading();
    }
    if(text('点击进入直播间').find().size()>0){
        Gesture.swipeUp();
        sleep(1000);
        return reading();
    }
    if(text('点击打开长图').find().size()>0){
        Gesture.swipeUp();
        sleep(1000);
        return reading();
    }
    Gesture.swipeUp();
    var second = random(3,19);
    while(second > 0){
        sleep(1000);
        second--;
        ui.run(()=>{
            global.w.text.setText('正在阅读中：' + second);
        })
        
    }
    reading();
}


module.exports = Kuaishou;