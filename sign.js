
let App = require('./initApp')
let Tool = require('./utils/tool.js')
var taskArr = require('./task/signTask');

var currentIndex = 0;
var taskTimer;

global.w = floaty.window(
    <frame gravity='center' bg="#000000">
        <vertical paddig='18 8'>
            <text id='task' textColor='#ffffff'>当前任务</text>
            <text id='text'  textColor='#ffffff'>悬浮的窗口</text>
        </vertical>
    </frame>
)


function taskFinish(){
    // App[taskArr[currentIndex].file].currentThread
    
    console.log(">>>>>taskFinish>>>")
    // threads.shutDownAll();
    App[task.file].currentThread.exit();
    App[taskArr[currentIndex].file].removeEvent('finish')
    // clearTimeout(taskTimer);
    back();
    console.log('>>>>>>>>>>1')
    Tool.sleep(1);
    back();
    console.log('>>>>>>>>>>2')
    Tool.sleep(1);
    back();
    console.log('>>>>>>>>>>3')
    Tool.sleep(1);
    back();
    console.log('>>>>>>>>>>4')
    Tool.sleep(1);
    
    currentIndex++;
    if(currentIndex >= taskArr.length){
        console.log('所有任务跑完')
        return;
    }
    doTask(taskArr[currentIndex])
}

function doTask(task){
    let tt = task.time*60*1000;
    console.log(tt);

    startProtectThread(tt);
    // taskTimer = setTimeout(()=>{
    //     console.log('>>>> on timer out')
    //     taskFinish();
    // },tt);

    App[task.file].addEvent('finish',taskFinish);
    global.w.task.setText(task.file + '-' + task.value + '  index:' + currentIndex);
    launch('com.kuaishou.nebula');
    App[task.file][task.value]();
}

function startProtectThread(time){
    var thread = threads.start(function(){
        setTimeout(()=>{
            console.log('>>>> on timer out')
            taskFinish();
        },time)
    })
}



doTask(taskArr[currentIndex]);