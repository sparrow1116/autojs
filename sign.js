
var Douyin = require('./app/douyin.js')
let douyin = new Douyin()
var Kuaishou = require('./app/kuaishou.js')
let kuaishou = new Kuaishou();

var signTask = require('./task/signTask');

var currentIndex = 0;
var taskTimer;

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
    clearTimeout(taskTimer);
    back();
    sleep(500);
    back();
    sleep(500);
    back();
    sleep(500);
    back();
    sleep(500);
    currentIndex++;
    if(currentIndex >= taskArr.length){
        console.log('所有任务跑完')
        return;
    }
    doTask(signTask[currentIndex])
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

doTask(signTask[currentIndex]);