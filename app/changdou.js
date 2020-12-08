
let Gesture = require('../utils/gesture.js');
let Tool = require('../utils/tool.js');
const { guid } = require('../utils/tool.js');

function Changdou(){
    this.pageName = 'com.zf.shuashua'
}
Changdou.prototype.renwu = function(sum){
    console.log('>>Changdou.prototype.read')
    this.currentThread = threads.start(function(){
        ui.run(()=>{
            global.w.text.setText('进入长豆中:');
        })
        Tool.sleep(13);
        Tool.threeTimeWait({key:'text',value:'首页',has:true},3);
        comeInAppClosePopup();

        Gesture.click(id('com.zf.shuashua:id/tab_make_money').findOne())
        ui.run(()=>{
            global.w.text.setText('进入任务页:');
        })
        Tool.sleep(6);
        Tool.threeTimeWait({key:'text',value:'我的余额(元)',has:true},3);

        renwuPagePopup();

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
        Tool.sleep(13);
        Tool.threeTimeWait({key:'text',value:'首页',has:true},3);
        comeInAppClosePopup();

        while(count >= 0){
            ui.run(()=>{
                global.w.text.setText('正在阅读中:');
            })
            // Tool.sleep(2);
            Tool.sleep(random(1,13))
            let isFanbei = global.storage.get('changdou_fanbei');
            if(isFanbei){

            }else{
                if(textContains('+').find().size() >= 2){

                    console.log('>>>>find container + >>')
    
                    Gesture.click(textContains('+').find().get(1));
                    ui.run(()=>{
                        global.w.text.setText('进入看广告了么:');
                    })
                    Tool.sleep(4)
                    Tool.threeTimeClick({key:'textContains',value:'+',index:1},
                        {key:'id',value:'com.zf.shuashua:id/layout_double',has:false},3)
                    // if(!id('com.zf.shuashua:id/layout_double').exists()){
                    //     Gesture.click(textContains('+').find().get(1));
                    //     ui.run(()=>{
                    //         global.w.text.setText('进入看广告了么:');
                    //     })
                    //     Tool.sleep(3)
                    // }
                    if(id('com.zf.shuashua:id/layout_double').exists()){
                        Gesture.click(id('com.zf.shuashua:id/layout_double').findOne())
                        ui.run(()=>{
                            global.w.text.setText('检测是否进入广告:');
                        })
                        Tool.sleep(4)
                        Tool.threeTimeClick({key:'id',value:'com.zf.shuashua:id/layout_double'},
                            {key:'id',value:'com.zf.shuashua:id/layout_double',has:true},2)

                        if(textContains('您今日的翻倍奖励次数已达上限').exists()){
                            Gesture.click(id('com.zf.shuashua:id/img_close').findOne())
                            ui.run(()=>{
                                global.w.text.setText('关闭最高翻倍提示:');
                            })
                            global.storage.put("changdou_fanbei",true);
                            Tool.sleep(2)

                            Tool.threeTimeClick({key:'id',value:'com.zf.shuashua:id/img_close'},
                                {key:'id',value:'com.zf.shuashua:id/img_close',has:true},2)
                        }else{
                            ui.run(()=>{
                                global.w.text.setText('正在看广告:');
                            })
                            Tool.sleep(30);
                            closeAd();
                        }
                    }
                }
            }
            
            console.log('>>>>> goto swipeUp')
            Gesture.langSwipeUp();
            // Gesture.changdouSwipe(device.width/2,device.height/2)
            // id('com.zf.shuashua:id/container').findOne().scollUp();

            ui.run(()=>{
                global.w.text.setText('翻页检测:');
            })
            Tool.sleep(1)
            Tool.threeTimeWait({
                key:'id',
                value:'com.zf.shuashua:id/tab_make_money',
                has:true
            },2)

            if(!id('com.zf.shuashua:id/tab_make_money').exists()){
                back()
                ui.run(()=>{
                    global.w.text.setText('返回上一级:');
                })
                Tool.sleep(2)
            }
            if(!id('com.zf.shuashua:id/tab_make_money').exists()){
                back()
                ui.run(()=>{
                    global.w.text.setText('返回上一级:');
                })
                Tool.sleep(2)
            }
            if(!id('com.zf.shuashua:id/tab_make_money').exists()){
                back()
                ui.run(()=>{
                    global.w.text.setText('返回上一级:');
                })
                Tool.sleep(2)
            }
            count--;
        }
        sum.emit('finish',1)

    });
}

Changdou.prototype.sign = function(sum){
    console.log('>>Changdou.prototype.sign')
    global.storage.put('changdou_fanbei',false);
    this.currentThread = threads.start(function(){
        ui.run(()=>{
            global.w.text.setText('进入长豆中:');
        })
        Tool.sleep(20);
        // Tool.threeTimeWait({key:'text',value:'首页',has:true},3);
        comeInAppClosePopup();

        Gesture.click(id('com.zf.shuashua:id/tab_make_money').findOne())
        ui.run(()=>{
            global.w.text.setText('进入任务页面:');
        })
        Tool.sleep(14);
        renwuPagePopup();

        if(text('立即签到得金豆').exists()){
            Gesture.click(text('立即签到得金豆').findOne())
            ui.run(()=>{
                global.w.text.setText('签到:');
            })
            Tool.sleep(5);
        }

        if(id('com.zf.shuashua:id/img_close').exists()){
            Gesture.click(id('com.zf.shuashua:id/img_close').findOne())
            ui.run(()=>{
                global.w.text.setText('关闭弹框:');
            })
            Tool.sleep(3);
        }
        
        Tool.threeTimeWait({
            key:'text',
            value:'翻倍奖励',
            has:true
        })
        if(text('翻倍奖励').exists()){
            Gesture.click(text('翻倍奖励').findOne())
            ui.run(()=>{
                global.w.text.setText('进翻倍了么:');
            })
            Tool.sleep(2);
            Tool.threeTimeClick({
                key:'text',
                value:'翻倍奖励'
            },{
                key:'text',
                value:'翻倍奖励',
                has:true
            },2)
            if(!text('翻倍奖励').exists()){
                // Gesture.click(text('翻倍奖励').findOne())
                ui.run(()=>{
                    global.w.text.setText('翻倍广告:');
                })
                Tool.sleep(43);
            }
        }
        
        closeDoubleAd();
        sum.emit('finish',1)
    })


}


function comeInAppClosePopup(){
    if(id('com.zf.shuashua:id/img_close').exists()){
        Gesture.click(id('com.zf.shuashua:id/img_close').findOne())
        ui.run(()=>{
            global.w.text.setText('关闭邀请红包:');
        })
        Tool.sleep(2);
    }
    if(className('android.widget.Button').exists() && className('android.widget.Button').findOne().clickable() == true){
        Gesture.click(className('android.widget.Button').findOne());
        ui.run(()=>{
            global.w.text.setText('关闭邀请弹框:');
        })
        Tool.sleep(2);
    }
}

function renwuPagePopup(){
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
}


function closeDoubleAd(){
    if(id('com.zf.shuashua:id/mimo_reward_close_img').exists()){
        Gesture.click(id('com.zf.shuashua:id/mimo_reward_close_img').findOne())
        
    }
    if(id('com.zf.shuashua:id/tt_video_ad_close_layout').exists()){
        Gesture.click(id('com.zf.shuashua:id/tt_video_ad_close_layout').findOne())
    }
    ui.run(()=>{
        global.w.text.setText('关闭广告:');
    })
    Tool.sleep(5);
}


let newAdCount = 0;

function closeNewAd(){
    if(className('android.widget.ImageView').exists() && className('android.widget.ImageView').findOne().clickable() == true){
        Gesture.click(className('android.widget.ImageView').findOne())
        className('android.widget.ImageView').find().forEach(function(view){
            view.click()
        });
        ui.run(()=>{
            global.w.text.setText('返回上一页:');
        })
        Tool.sleep(3)
    }else{
        ui.run(()=>{
            global.w.text.setText('再等一下广告:');
        })
        Tool.sleep(3)
        if(newAdCount >= 5){
            return
        }
        newAdCount++
        closeNewAd()
    }
}


function closeAd(){
    if(!id('com.zf.shuashua:id/tt_video_ad_close_layout').exists() && !id('com.zf.shuashua:id/mimo_reward_close_img').exists()){
        ui.run(()=>{
            global.w.text.setText('关闭广告第一次:');
        })
        Tool.sleep(4)
    }
    if(!id('com.zf.shuashua:id/tt_video_ad_close_layout').exists() && !id('com.zf.shuashua:id/mimo_reward_close_img').exists()){
        ui.run(()=>{
            global.w.text.setText('关闭广告第二次:');
        })
        Tool.sleep(4)
    }
    if(!id('com.zf.shuashua:id/tt_video_ad_close_layout').exists() && !id('com.zf.shuashua:id/mimo_reward_close_img').exists()){
        ui.run(()=>{
            global.w.text.setText('关闭广告第三次:');
        })
        Tool.sleep(4)
    }
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
        
    }else{
        newAdCount = 0;
        closeNewAd(); 
    }

    Tool.threeTimeWait({key:'id',value:'com.zf.shuashua:id/btTitle',has:true},3)

    // if(!id('com.zf.shuashua:id/btTitle').exists()){
    //     back();
    //     ui.run(()=>{
    //         global.w.text.setText('返回上一层:');
    //     })
    //     Tool.sleep(2)
    // }

    if(id('com.zf.shuashua:id/btTitle').exists()){
        Gesture.click(id('com.zf.shuashua:id/btTitle').findOne());
        ui.run(()=>{
            global.w.text.setText('关闭二层广告中:');
        })
        Tool.sleep(2)
        Tool.threeTimeClick({
            key:'id',
            value:'com.zf.shuashua:id/btTitle'
        },{
            key:'id',
            value:'com.zf.shuashua:id/btTitle',
            has:true
        },2)

        // Tool.threeTimeWait({
        //     key:'id',
        //     value:'com.zf.shuashua:id/btTitle',
        //     has:true
        // },2)
        // if(id('com.zf.shuashua:id/btTitle').exists()){
        //     Gesture.click(id('com.zf.shuashua:id/btTitle').findOne());
        //     ui.run(()=>{
        //         global.w.text.setText('再次关闭二层广告中:');
        //     })
        //     Tool.sleep(2)
        //     Tool.threeTimeClick({
        //         key:'id',
        //         value:'com.zf.shuashua:id/btTitle'
        //     },{
        //         key:'id',
        //         value:'com.zf.shuashua:id/btTitle',
        //         has:true
        //     },2)
        // }

        // Tool.threeTimeWait({
        //     key:'id',
        //     value:'com.zf.shuashua:id/tab_make_money',
        //     has:false
        // },1)
        if(!id('com.zf.shuashua:id/tab_make_money').exists()){
            
            if(!id('com.zf.shuashua:id/tab_make_money').exists()){
                back()
                ui.run(()=>{
                    global.w.text.setText('返回上弹层:');
                })
                Tool.sleep(1)
            }
            if(!id('com.zf.shuashua:id/tab_make_money').exists()){
                back()
                ui.run(()=>{
                    global.w.text.setText('再次上一级:');
                })
                Tool.sleep(1)
            }
            if(!id('com.zf.shuashua:id/tab_make_money').exists()){
                back()
                ui.run(()=>{
                    global.w.text.setText('三次上一级:');
                })
                Tool.sleep(1)
            }

            if(id('com.zf.shuashua:id/btTitle').exists()){
                Gesture.click(id('com.zf.shuashua:id/btTitle').findOne());
                ui.run(()=>{
                    global.w.text.setText('再次关闭二层广告中:');
                })
                Tool.sleep(2)
                Tool.threeTimeClick({
                    key:'id',
                    value:'com.zf.shuashua:id/btTitle'
                },{
                    key:'id',
                    value:'com.zf.shuashua:id/btTitle',
                    has:true
                },2)
            }
            
            
            // Tool.threeTimeWait({
            //     key:'id',
            //     value:'com.zf.shuashua:id/btTitle',
            //     has:true
            // },2)
            // if(id('com.zf.shuashua:id/btTitle').exists()){
            //     Gesture.click(id('com.zf.shuashua:id/btTitle').findOne());
            //     ui.run(()=>{
            //         global.w.text.setText('再次关闭二层广告中:');
            //     })
            //     Tool.sleep(2)
            //     Tool.threeTimeClick({
            //         key:'id',
            //         value:'com.zf.shuashua:id/btTitle'
            //     },{
            //         key:'id',
            //         value:'com.zf.shuashua:id/btTitle',
            //         has:true
            //     })
            // }
        }
    }
}


module.exports = Changdou;
