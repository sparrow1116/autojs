let MyEvent = require('../utils/MyEvent.js')
let Gesture = require('../utils/gesture.js');
let Tool = require('../utils/tool.js');

function Shuabao(){
    this.pageName = 'com.jm.video'
}
Shuabao.prototype = new MyEvent();

Shuabao.prototype.sign = function(sum){
    let self= this;
    this.currentThread = threads.start(function(){
        ui.run(()=>{
            global.w.text.setText('进入刷宝:');
        })
        Tool.sleep(15);
        let list = id('com.jm.video:id/tv_tab_title').find();
        for(let i = 0; i<list.length; i++){
            if(list.get(i).text() && (list.get(i).text() == '任务' || list.get(i).text() == '福利')){
                Gesture.click(list.get(i));
                break;
            }
        }
        ui.run(()=>{
            global.w.text.setText('进入刷宝任务页:');
        })
        Tool.sleep(7);
        if(id('com.jm.video:id/imgClose').exists()){
            Gesture.click(id('com.jm.video:id/imgClose').findOne())
            ui.run(()=>{
                global.w.text.setText('关闭好友邀请:');
            })
            Tool.sleep(1);
        }
        Gesture.click(text('立即签到').findOne());
        Tool.sleep(3);
        if(text('看视频签到').exists()){
            Gesture.click(text('看视频签到').findOne())
            ui.run(()=>{
                global.w.text.setText('看签到视频中:');
            })
            Tool.sleep(30);
        }
        if(id('com.jm.video:id/tt_video_ad_close_layout').exists()){
            Gesture.click(id('com.jm.video:id/tt_video_ad_close_layout').findOne());
        }
        if(id('com.jm.video:id/iv_close').exists()){
            Gesture.click(id('com.jm.video:id/iv_close').findOne());
        }
        ui.run(()=>{
            global.w.text.setText('关闭广告:');
        })
        Tool.sleep(2);
        // sum.setAndNotify(1);
        sum.emit('finish',1)
    });
    
}

Shuabao.prototype.renwu = function(sum){
    console.log('>>>>>>Shuabao.prototype.renwu')
    let self= this;
    this.currentThread = threads.start(function(){
        ui.run(()=>{
            global.w.text.setText('进入刷宝:');
        })
        Tool.sleep(15);
        let list = id('com.jm.video:id/tv_tab_title').find();
        for(let i = 0; i<list.length; i++){
            if(list.get(i).text() && (list.get(i).text() == '任务' || list.get(i).text() == '福利')){
                Gesture.click(list.get(i));
                break;
            }
        }
        ui.run(()=>{
            global.w.text.setText('进入刷宝任务页:');
        })
        Tool.sleep(7);
        if(id('com.jm.video:id/imgClose').exists()){
            Gesture.click(id('com.jm.video:id/imgClose').findOne())
            ui.run(()=>{
                global.w.text.setText('关闭好友邀请:');
            })
            Tool.sleep(1);
        }
        while(hasRenwu()){
            readingRenwu();
        }
        console.log('>>>>>>>>shuabao renwu end')
        console.log(sum);
        sum.emit('finish',1)
        // sum.setAndNotify(1);
        console.log('>>>>>>>>>>>>shuabao renwu end emit over')
    })
    
}

Shuabao.prototype.read = function(sum,count){
    let self= this;
    this.currentThread = threads.start(function(){
        ui.run(()=>{
            global.w.text.setText('进入刷宝:');
        })
        Tool.sleep(15);
    
        while(count > 0){
            ui.run(()=>{
                global.w.text.setText('阅读视频:');
            })
            Tool.sleep(random(3,19))
            count--;
            Gesture.swipeUp();
        }
        console.log('>>>>go to end')
        // sum.setAndNotify(1);
        sum.emit('finish',1)
    })
    
}


function hasRenwu(){
    Gesture.dragUp(200);
    ui.run(()=>{
        global.w.text.setText('滑动页面:');
    })
    Tool.sleep(2)


    console.log('>>>>>>>>>>>>>>>>hasRenwu>>>>>>')
    var c = text('领取').find();
    console.log('>>>>>hasRenwu> size >>>>>>>>' + c.size())
    if(c.size() > 1){
        return true
    }else{
        return false
    }
}

function readingRenwu(){
    console.log('>>>>>>>>>>>>>>>>readingRenwu>>>>>>')
    if(text('领取').exists()){
        var c = text('领取').find();
        Gesture.click(c.get(0).parent());
    }
    if(text('领取').exists()){
        var c = text('领取').find();
        Gesture.click(c.get(0).parent());
    }
    
    ui.run(()=>{
        global.w.text.setText('进阅读任务了么:');
    })
    Tool.sleep(2);
    if(text('领取').exists()){
        return;
    }
    ui.run(()=>{
        global.w.text.setText('阅读任务:');
    })
    Tool.sleep(43);
    if(id('com.jm.video:id/tt_video_ad_close_layout').exists()){
        Gesture.click(id('com.jm.video:id/tt_video_ad_close_layout').findOne());
    }
    if(id('com.jm.video:id/iv_close').exists()){
        Gesture.click(id('com.jm.video:id/iv_close').findOne());
    }
    ui.run(()=>{
        global.w.text.setText('关闭广告');
    })
    Tool.sleep(2);
    closeDialog();
    ui.run(()=>{
        global.w.text.setText('关闭弹窗:');
    })
    Tool.sleep(2);
}

function closeDialog(){
    textContains('邀请好友最高可得').findOne().parent().children().forEach((child)=>{
        // console.log('>>>>>>>>>>>>>>>>>>>>')
        // console.log(child);
        // console.log(child.clickable)
        // console.log(!child.text())
        // console.log(child.text())
        if(child.clickable() == true && !child.text()){
            Gesture.click(child);
        }
    })

}

module.exports = Shuabao;