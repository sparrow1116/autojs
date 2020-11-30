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


function reading(){
    if(text('点击打开图集').find().size()>0){
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