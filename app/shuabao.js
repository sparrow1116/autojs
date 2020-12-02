let MyEvent = require('../utils/MyEvent.js')
let Gesture = require('../utils/gesture.js');
let Tool = require('../utils/tool.js');

function Shuabao(){
    this.pageName = 'com.jm.video'
}
Shuabao.prototype = new MyEvent();

Shuabao.prototype.sign = function(){
    launch(this.pageName);
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
    if(text('邀请好友可立即提现').exists() && id('com.jm.video:id/imgClose').exists()){
        Gesture.click(id('com.jm.video:id/imgClose').findOne())
        ui.run(()=>{
            global.w.text.setText('关闭好友邀请:');
        })
        Tool.sleep(1);
    }
    Gesture.click(text('立即签到').findOne());
    Tool.sleep(1);
    this.trigger('finish');
}

Shuabao.prototype.renwu = function(){
    launch(this.pageName);
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
    if(text('邀请好友可立即提现').exists() && id('com.jm.video:id/imgClose').exists()){
        Gesture.click(id('com.jm.video:id/imgClose').findOne())
        ui.run(()=>{
            global.w.text.setText('关闭好友邀请:');
        })
        Tool.sleep(1);
    }
    while(hasRenwu()){
        readingRenwu();
    }
    this.trigger('finish');
}

Shuabao.prototype.read = function(){
    launch(this.pageName);
    ui.run(()=>{
        global.w.text.setText('进入刷宝:');
    })
    Tool.sleep(15);

    let time = 110;
    while(time > 0){
        ui.run(()=>{
            global.w.text.setText('阅读视频:');
        })
        Tool.sleep(random(3,19))
        time--;
        Gesture.swipeUp();
    }

    this.trigger('finish');
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
    var c = text('领取').find();
    Gesture.click(c.get(0).parent());
    ui.run(()=>{
        global.w.text.setText('阅读任务视频:');
    })
    Tool.sleep(45);
    Gesture.click(id('com.jm.video:id/tt_video_ad_close_layout').findOne());
    closeDialog();
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