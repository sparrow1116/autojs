let Gesture = require('../utils/gesture.js');
let MyEvent = require('../utils/MyEvent.js');
let Tool = require('../utils/tool.js')

let TAG = 'Kuaishou'
function Kuaishou(){
    this.pageName = 'com.kuaishou.nebula'
}

Kuaishou.prototype = new MyEvent()

Kuaishou.prototype.read = function(sum,count){
    let self= this;
    console.log('>>>>>Kuaishou.prototype.read')
    this.currentThread = threads.start(function(){
        ui.run(()=>{
            global.w.text.setText('进入快手:');
        })
        Tool.sleep(7);
        console.log('>>>>>>>>>>>>shit>>>>>')
        count = count+30;
        while(count >= 0){
            console.log('>>>>>>>>>>>>>>1>>>>>>>')
            reading();
            console.log('>>>>>>>>>>>>>2>>>>>>>>')
            console.log(count)
            count--;
        }
        sum.emit('finish',1)
        console.log('>>>>go to end')
        // sum.setAndNotify(1);
    });
    
}

Kuaishou.prototype.sign = function(sum){
    let self= this;
    this.currentThread = threads.start(function(){
        console.log('>>>>>sign threads.start>>>>>>')
        // launch(this.pageName);
        ui.run(()=>{
            global.w.text.setText('进入快手:');
        })
        Tool.sleep(10);
        if(id('com.kuaishou.nebula:id/positive').find().size()>0){
            id('com.kuaishou.nebula:id/positive').findOne().click();
            ui.run(()=>{
                global.w.text.setText('关闭儿童保护:');
            })
            Tool.sleep(1);
        }
       
        Gesture.swipeUp();
        ui.run(()=>{
            global.w.text.setText('阅读第二段视频:');
        })
        Tool.sleep(10);
        if(id('com.kuaishou.nebula:id/positive').find().size()>0){
            id('com.kuaishou.nebula:id/positive').findOne().click();
            ui.run(()=>{
                global.w.text.setText('关闭儿童保护:');
            })
            Tool.sleep(1);
        }
        Gesture.swipeUp();
        ui.run(()=>{
            global.w.text.setText('阅读第三段视频:');
        })
        Tool.sleep(10);
        Gesture.swipeUp();
        ui.run(()=>{
            global.w.text.setText('阅读第四段视频:');
        })
        Tool.sleep(10);
        // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>gogogogogo>>>>>>>')
        // console.log(id('com.kuaishou.nebula:id/redFloat').findOne())
        // let b = id('com.kuaishou.nebula:id/redFloat').findOne().bounds();
        // click(b.centerX(),b.centerY());
        Gesture.click(id('com.kuaishou.nebula:id/redFloat').findOne())
        ui.run(()=>{
            global.w.text.setText('进入任务页面:');
        })
        Tool.sleep(10)
        if(text('立即签到').find().size() > 0){
            Gesture.click(text('立即签到').findOne());
            ui.run(()=>{
                global.w.text.setText('点击签到:');
            })
            Tool.sleep(1)
        }
        if(text('立即签到').find().size() > 0){
            Gesture.click(text('立即签到').findOne());
            ui.run(()=>{
                global.w.text.setText('点击签到:');
            })
            Tool.sleep(3)
        }
        back();
        ui.run(()=>{
            global.w.text.setText('返回:');
        })
        Tool.sleep(1)
        console.log('trgger finish>>>>>>')
        sum.emit('finish',1)
        // sum.setAndNotify(1);
    })
    
}


function reading(){
    if(text('点击打开图集').find().size()>0){
        ui.run(()=>{
            global.w.text.setText('点击打开图集:');
        })
        Tool.sleep(1);
        Gesture.swipeUp();
        Tool.sleep(1);
        // reading();
    }else if(text('点击进入直播间').find().size()>0){
        ui.run(()=>{
            global.w.text.setText('点击进入直播间:');
        })
        Tool.sleep(1);
        Gesture.swipeUp();
        Tool.sleep(1);
        // reading();
    }else if(text('点击打开长图').find().size()>0){
        ui.run(()=>{
            global.w.text.setText('点击打开长图:');
        })
        Tool.sleep(1);
        Gesture.swipeUp();
        Tool.sleep(1);
        // reading();
    }else{
        ui.run(()=>{
            global.w.text.setText('正在阅读中:');
        })
        Tool.sleep(random(2,18))
        Gesture.swipeUp();
        Tool.sleep(1);
        // reading();
    }
    
}


module.exports = Kuaishou;