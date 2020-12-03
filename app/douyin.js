
let MyEvent = require('../utils/MyEvent.js')
let Gesture = require('../utils/gesture.js');
let Tool = require('../utils/tool.js')

function Douyin(){
    this.pageName = 'com.ss.android.ugc.aweme.lite'
}

Douyin.prototype = new MyEvent();


Douyin.prototype.sign = function(sum){
    let self= this;
    this.currentThread = threads.start(function(){
        ui.run(()=>{
            global.w.text.setText('进入抖音中:');
        })
        Tool.sleep(10);
        if(id('com.ss.android.ugc.aweme.lite:id/dcx').find().size() > 0){
            Gesture.click(id('com.ss.android.ugc.aweme.lite:id/dcx').findOne());
        }
        Gesture.swipeUp();
        ui.run(()=>{
            global.w.text.setText('阅读第二段视频:');
        })
        Tool.sleep(10)
        Gesture.swipeUp();
        ui.run(()=>{
            global.w.text.setText('阅读第三段视频:');
        })
        Tool.sleep(10)
        Gesture.swipeUp();
        ui.run(()=>{
            global.w.text.setText('阅读第四段视频:');
        })
        Tool.sleep(10)
        Gesture.click(id('com.ss.android.ugc.aweme.lite:id/b88').findOne());
        ui.run(()=>{
            global.w.text.setText('进入任务页面:');
        })
        Tool.sleep(10);
        Gesture.click(textContains('立即签到').findOne());
        ui.run(()=>{
            global.w.text.setText('进入签到页:');
        })
        Tool.sleep(2);
        Gesture.click(text('看广告视频再赚').findOne())
        ui.run(()=>{
            global.w.text.setText('阅读签到广告:');
        })
        Tool.sleep(35);
        back();
        ui.run(()=>{
            global.w.text.setText('退出广告:');
        })
        Tool.sleep(1);
        if(text('金币每天凌晨左右自动兑换成现金').exists()){
            back();
            ui.run(()=>{
                global.w.text.setText('退出广告:');
            })
            Tool.sleep(1);
        }
        if(text('金币每天凌晨左右自动兑换成现金').exists()){
            back();
            ui.run(()=>{
                global.w.text.setText('退出广告:');
            })
            Tool.sleep(1);
        }
        if(text('金币每天凌晨左右自动兑换成现金').exists()){
            back();
            ui.run(()=>{
                global.w.text.setText('退出广告:');
            })
            Tool.sleep(1);
        }
        sum.emit('finish',1)
    });
    
}

Douyin.prototype.renwu = function(sum){
    let self= this;
    this.currentThread = threads.start(function(){
        ui.run(()=>{
            global.w.text.setText('进入抖音中:');
        })
        Tool.sleep(7);
        Gesture.click(id('com.ss.android.ugc.aweme.lite:id/b88').findOne());
        ui.run(()=>{
            global.w.text.setText('进入抖音任务页面:');
        })
        Tool.sleep(7);
        Gesture.click(text('开宝箱得金币').findOne().parent());
        ui.run(()=>{
            global.w.text.setText('进入抖音开宝箱:');
        })
        Tool.sleep(5);
        Gesture.click(text('看广告视频再赚').findOne().parent());
        ui.run(()=>{
            global.w.text.setText('看广告中:');
        })
        Tool.sleep(35);
        back();
        ui.run(()=>{
            global.w.text.setText('回到任务页:');
        })
        Tool.sleep(2);
        Gesture.click(text('限时任务赚金币').findOne());
        ui.run(()=>{
            global.w.text.setText('看限时任务:');
        })
        Tool.sleep(35);
        sum.emit('finish',1)
        // self.trigger('finish');
    });
    
}

module.exports = Douyin;