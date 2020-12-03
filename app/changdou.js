
let Gesture = require('../utils/gesture.js');
let Tool = require('../utils/tool.js')

function Changdou(){
    this.pageName = 'com.zf.shuashua'
}
Changdou.prototype.renwu = function(sum){
    console.log('>>Changdou.prototype.read')
    this.currentThread = threads.start(function(){
        ui.run(()=>{
            global.w.text.setText('进入长豆中:');
        })
        Tool.sleep(18);
        if(className('android.widget.Button').exists() && className('android.widget.Button').findOne().clickable() == true){
            Gesture.click(className('android.widget.Button').findOne());
            ui.run(()=>{
                global.w.text.setText('关闭邀请弹框:');
            })
            Tool.sleep(2);
        }
        Gesture.click(id('com.zf.shuashua:id/tab_make_money').findOne())
        ui.run(()=>{
            global.w.text.setText('进入任务页:');
        })
        Tool.sleep(5);
        if(textContains('小蜗送福利').exists()){
            back()
            ui.run(()=>{
                global.w.text.setText('退出小蜗:');
            })
            Tool.sleep(2);
        }
        if(textContains('今日剩余').exists() && textContains('抽奖机会').exists()){
            back()
            ui.run(()=>{
                global.w.text.setText('退出抽奖:');
            })
            Tool.sleep(2);
        }
        Gesture.dragUp(500)
        ui.run(()=>{
            global.w.text.setText('上滑500:');
        })
        Tool.sleep(2);
        if(text('领金豆').exists()){
            Gesture.click(text('领金豆').findOne())
            ui.run(()=>{
                global.w.text.setText('进入领金豆了么:');
            })
            Tool.sleep(2);
            if(!id('com.zf.shuashua:id/tab_make_money').exists()){
                ui.run(()=>{
                    global.w.text.setText('领金豆视频:');
                })
                Tool.sleep(38);
                closeAd()
            }
            
        }

    })
}
Changdou.prototype.read = function(sum,count){
    console.log('>>Changdou.prototype.read')
    this.currentThread = threads.start(function(){
        ui.run(()=>{
            global.w.text.setText('进入长豆中:');
        })
        Tool.sleep(18);
        if(className('android.widget.Button').exists() && className('android.widget.Button').findOne().clickable() == true){
            Gesture.click(className('android.widget.Button').findOne());
            ui.run(()=>{
                global.w.text.setText('关闭邀请弹框:');
            })
            Tool.sleep(2);
        }

        while(count >= 0){
            ui.run(()=>{
                global.w.text.setText('正在阅读中:');
            })
            Tool.sleep(random(2,17))

            if(textContains('+').find().size() >= 2){

                console.log('>>>>find container + >>')

                Gesture.click(textContains('+').find().get(1));
                ui.run(()=>{
                    global.w.text.setText('进入看广告了么:');
                })
                Tool.sleep(5)
                if(!id('com.zf.shuashua:id/layout_double').exists()){
                    Gesture.click(textContains('+').find().get(1));
                    ui.run(()=>{
                        global.w.text.setText('进入看广告了么:');
                    })
                    Tool.sleep(3)
                }
                if(id('com.zf.shuashua:id/layout_double').exists()){
                    Gesture.click(id('com.zf.shuashua:id/layout_double').findOne())
                    ui.run(()=>{
                        global.w.text.setText('正在看广告:');
                    })
                    Tool.sleep(38)
                    closeAd();

                }


            }
            console.log('>>>>> goto swipeUp')
            Gesture.langSwipeUp();
            ui.run(()=>{
                global.w.text.setText('翻页:');
            })
            Tool.sleep(2)
            if(!id('com.zf.shuashua:id/tab_make_money').exists()){
                back()
                ui.run(()=>{
                    global.w.text.setText('返回上一级:');
                })
                Tool.sleep(1)
                back()
                ui.run(()=>{
                    global.w.text.setText('返回上一级:');
                })
                Tool.sleep(1)
            }
            count--;
        }
        sum.emit('finish',1)

    });
}


Changdou.prototype.sign = function(sum){
    console.log('>>Changdou.prototype.sign')
    this.currentThread = threads.start(function(){
        ui.run(()=>{
            global.w.text.setText('进入长豆中:');
        })
        Tool.sleep(18);
        if(className('android.widget.Button').exists() && className('android.widget.Button').findOne().clickable() == true){
            Gesture.click(className('android.widget.Button').findOne());
            ui.run(()=>{
                global.w.text.setText('关闭邀请弹框:');
            })
            Tool.sleep(2);
        }

        Gesture.click(id('com.zf.shuashua:id/tab_make_money').findOne())
        ui.run(()=>{
            global.w.text.setText('进入任务页面:');
        })
        Tool.sleep(2);
        if(text('立即签到得金豆').exists()){
            Gesture.click(text('立即签到得金豆').findOne())
            ui.run(()=>{
                global.w.text.setText('签到:');
            })
            Tool.sleep(2);
        }

        if(id('com.zf.shuashua:id/img_close').exists()){
            Gesture.click(id('com.zf.shuashua:id/img_close').findOne())
            ui.run(()=>{
                global.w.text.setText('关闭弹框:');
            })
            Tool.sleep(2);
        }

        if(text('翻倍奖励').exists()){
            Gesture.click(text('翻倍奖励').findOne())
            ui.run(()=>{
                global.w.text.setText('看签到广告:');
            })
            Tool.sleep(45);
        }
        if(id('com.zf.shuashua:id/mimo_reward_close_img').exists()){
            Gesture.click(id('com.zf.shuashua:id/mimo_reward_close_img').findOne())
            ui.run(()=>{
                global.w.text.setText('关闭广告:');
            })
            Tool.sleep(2);
        }
        back()
        ui.run(()=>{
            global.w.text.setText('返回:');
        })
        Tool.sleep(2);
        back()
        ui.run(()=>{
            global.w.text.setText('返回:');
        })
        Tool.sleep(2);
        back()
        ui.run(()=>{
            global.w.text.setText('返回:');
        })
        Tool.sleep(2);
        if(id('com.zf.shuashua:id/img_close').exists()){
            Gesture.click(id('com.zf.shuashua:id/img_close').findOne())
            ui.run(()=>{
                global.w.text.setText('关闭弹框:');
            })
            Tool.sleep(2);
        }
        sum.emit('finish',1)
    })


}

function closeAd(){
    if(id('com.zf.shuashua:id/tt_video_ad_close_layout').exists() || id('com.zf.shuashua:id/mimo_reward_close_img').exists()){
        if(id('com.zf.shuashua:id/tt_video_ad_close_layout').exists()){
            Gesture.click(id('com.zf.shuashua:id/tt_video_ad_close_layout').findOne());
        }else{
            Gesture.click(id('com.zf.shuashua:id/mimo_reward_close_img').findOne());
        }

        ui.run(()=>{
            global.w.text.setText('关闭广告中:');
        })
        Tool.sleep(5)
        if(id('com.zf.shuashua:id/btTitle').exists()){
            Gesture.click(id('com.zf.shuashua:id/btTitle').findOne());
            ui.run(()=>{
                global.w.text.setText('关闭二层广告中:');
            })
            Tool.sleep(3)

            if(!id('com.zf.shuashua:id/tab_make_money').exists()){
                back()
                ui.run(()=>{
                    global.w.text.setText('返回上一级:');
                })
                Tool.sleep(1)
                back();
                ui.run(()=>{
                    global.w.text.setText('返回上一级:');
                })
                Tool.sleep(1)
                Gesture.click(id('com.zf.shuashua:id/btTitle').findOne());
                ui.run(()=>{
                    global.w.text.setText('再次关闭二层广告中:');
                })
                Tool.sleep(3)
            }
        }
    }
}


module.exports = Changdou;

