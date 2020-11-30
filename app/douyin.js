
let MyEvent = require('../utils/MyEvent.js')

function Douyin(){
    this.pageName = 'com.ss.android.ugc.aweme.lite'
}

Douyin.prototype = new MyEvent();

Douyin.prototype.renwu = function(){
    launch(this.pageName);
    ui.run(()=>{
        global.w.text.setText('进入抖音中');
    })
    sleep(7000);
    id('com.ss.android.ugc.aweme.lite:id/b88').findOne().click();
    ui.run(()=>{
        global.w.text.setText('进入抖音任务页面');
    })
    sleep(7000);
    text('开宝箱得金币').findOne().parent().click();
    ui.run(()=>{
        global.w.text.setText('进入抖音开宝箱');
    })
    sleep(2000);
    text('看广告视频再赚').findOne().parent().click();
    ui.run(()=>{
        global.w.text.setText('看广告中');
    })
    sleep(31 * 1000);
    back();
    ui.run(()=>{
        global.w.text.setText('回到任务页');
    })
    sleep(1000);
    text('限时任务赚金币').findOne().parent().parent().parent().click();
    ui.run(()=>{
        global.w.text.setText('看限时任务');
    })
    sleep(31 * 1000);
    this.trigger('finish');
}

module.exports = Douyin;