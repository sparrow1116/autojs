
toast("hello auto")
var Douyin = require('./app/douyin.js')
let douyin = new Douyin()
var Kuaishou = require('./app/kuaishou.js')
let kuaishou = new Kuaishou();
var Shuabao = require('./app/shuabao.js')
let shuabao = new Shuabao();


let taskArr = require('./task/getTask.js');


let storage = storages.create('auto_task');

let hour = new Date().getHours();
let currentIndex;
if(hour<8){
    currentIndex = 0;
}else{
    let i = storage.get('index');
    if(i){
        currentIndex = i
    }else{
        currentIndex = 0;
    }
}
//TODO 这个是测试用
currentIndex = 0;
let taskTimer;

global.w = floaty.window(
    <frame gravity='center' bg="#000000">
        <text id='text' textColor='#ffffff'>悬浮的窗口</text>
    </frame>
)
kuaishou.addEvent('finish',(d)=>{
    taskFinish();
})
douyin.addEvent('finish',(d)=>{
    taskFinish();
})

function taskFinish(){
    back();
    sleep(500);
    back();
    sleep(500);
    back();
    sleep(500);
    back();
    sleep(500);
    back();
    sleep(500);
    console.log("finished>>>>>>")
    clearTimeout(taskTimer);
    currentIndex++;
    storage.put('index',currentIndex + '');
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
        case 'shuabao':
            shuabao[task.value]();
            break;
        default:
            break;
    }
}
console.log('>>>goto first task');
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
