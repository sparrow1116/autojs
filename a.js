
toast("hello auto")
var Douyin = require('./app/douyin.js')
let douyin = new Douyin()
var Kuaishou = require('./app/kuaishou.js')
let kuaishou = new Kuaishou();


let taskArr = require('./task/getTask.js');
let currentIndex = 0;
let taskTimer;

global.w = floaty.window(
    <frame gravity='center' bg="#000000">
        <text id='text'>悬浮的窗口</text>
    </frame>
)
kuaishou.addEvent('finish',(d)=>{
    taskFinish();
})
douyin.addEvent('finish',(d)=>{
    taskFinish();
})

function taskFinish(){
    console.log("finished>>>>>>")
    clearTimeout(taskTimer);
    currentIndex++;
    if(currentIndex >= taskArr.length){
        console.log('所有任务跑完')
        return;
    }
    doTask(taskArr[currentIndex]);
}

function doTask(task){
    taskTimer = setTimeout(()=>{
        taskFinish();
    },task.time * 60 * 1000);
    switch(task.file){
        case 'kuaishou':
            kuaishou[task.value]();
            break;
        case 'douyin':
            douyin[task.value]();
            break;
        default:
            break;
    }
}

doTask(taskArr[currentIndex]);




// for(let i = 0; i<taskArr.length; i++){
//     switch(taskArr[i].file){
//         case 'kuaishou':
//             kuaishou[taskArr[i].value]();
            
//             break;
//         case 'douyin':
//             break;
//         default:
//             break;
//     }
// }



// douyin.addEvent('hahh',()=>{
    
// })
// console.log('>>> finish>>>');

// var Gesture = require('./gesture.js')
// console.log("start")
// toast("hello auto")






// launch("com.ss.android.ugc.aweme.lite");

sleep(5000)

// while(true){
//     Gesture.swipeUp();
//     sleep(random(6,19) * 1000);
// }
