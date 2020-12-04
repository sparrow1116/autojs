
let MyEvent = require('../utils/MyEvent.js')
let Gesture = require('../utils/gesture.js');
let Tool = require('../utils/tool.js');

function Douyin(){
    this.pageName = 'com.ss.android.ugc.aweme.lite'
}

Douyin.prototype = new MyEvent();

Douyin.prototype.read = function(sum,count){
    let self= this;
    this.currentThread = threads.start(function(){
        ui.run(()=>{
            global.w.text.setText('进入抖音中:');
        })
        Tool.sleep(10);    
        while(count >= 0){
            ui.run(()=>{
                global.w.text.setText('正在阅读中:');
            })
            Tool.sleep(random(2,18))
            Gesture.swipeUp();
            count--;
        }
        sum.emit('finish',1)
    });
}

Douyin.prototype.sign = function(sum){
    let self= this;
    this.currentThread = threads.start(function(){
        ui.run(()=>{
            global.w.text.setText('进入抖音中:');
        })
        Tool.sleep(10);
        if(text('我知道了').find().size() > 0){
            Gesture.click(id('com.ss.android.ugc.aweme.lite:id/dcx').findOne());
        }
        Gesture.swipeUp();
        ui.run(()=>{
            global.w.text.setText('阅读第二段视频:');
        })
        Tool.sleep(10)
        if(text('我知道了').find().size() > 0){
            Gesture.click(id('com.ss.android.ugc.aweme.lite:id/dcx').findOne());
        }
        Gesture.swipeUp();
        ui.run(()=>{
            global.w.text.setText('阅读第三段视频:');
        })
        Tool.sleep(10)
        if(text('我知道了').find().size() > 0){
            Gesture.click(id('com.ss.android.ugc.aweme.lite:id/dcx').findOne());
        }
        // Gesture.swipeUp();
        // ui.run(()=>{
        //     global.w.text.setText('阅读第四段视频:');
        // })
        // Tool.sleep(10)

        gotoRenwuPage()
        
        
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
        Tool.sleep(3);
        if(text('金币每天凌晨左右自动兑换成现金').exists()){
            back();
            ui.run(()=>{
                global.w.text.setText('退出广告:');
            })
            Tool.sleep(3);
        }
        if(text('金币每天凌晨左右自动兑换成现金').exists()){
            back();
            ui.run(()=>{
                global.w.text.setText('退出广告:');
            })
            Tool.sleep(3);
        }
        if(text('金币每天凌晨左右自动兑换成现金').exists()){
            back();
            ui.run(()=>{
                global.w.text.setText('退出广告:');
            })
            Tool.sleep(3);
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
        gotoRenwuPage();
        // Gesture.click(id('com.ss.android.ugc.aweme.lite:id/b88').findOne());
        // ui.run(()=>{
        //     global.w.text.setText('进入抖音任务页面:');
        // })
        // Tool.sleep(7);
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


function closeHelp(){
    console.log('>>>closeHelp>>')
    let children = text('恭喜获得奖励').findOne().parent().children();
    let count = text('恭喜获得奖励').findOne().parent().childCount();
    for(let i = 0; i<count; i++){
        console.log('>>>>>>>')
        console.log(children.get(i))
        if(children.get(i).clickable() == true){
            console.log('find it')
            Gesture.click(children.get(i))
            break;
        }
    }
}

function gotoRenwuPage(){

    // Gesture.clickPosition();
    click(device.width/2,device.height - 50);
    ui.run(()=>{
        global.w.text.setText('进入任务页面:');
    })
    Tool.sleep(10);
    if(text('查看收益').exists()){
        closeHelp();
    }

    // if(text('开宝箱').exists()){
    //     console.log('>>>had 开宝箱')
    //     let children = text('开宝箱').findOne().parent().children();
    //     let count = parent.childCount()
    //     // console.log('>>>> child')
    //     for(let i = 0; i<count; i++){
    //         if(children.get(i).className == 'android.widget.RelativeLayout' &&
    //         children.get(i).clickable() == true){
    //             Gesture.click(children.get(i));
    //             ui.run(()=>{
    //                 global.w.text.setText('进入任务页面:');
    //             })
    //             Tool.sleep(10);
    //             break;
    //         }
    //     }
    // }
}

module.exports = Douyin;