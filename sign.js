
let App = require('./initApp')
let Tool = require('./utils/tool.js')
var taskArr = require('./task/signTask');

var currentIndex = 0;
var ProtectThread;
var isFinish = false;

global.w = floaty.window(
    <frame gravity='center' bg="#000000">
        <vertical paddig='18 8'>
            <text id='task' textColor='#ffffff'>当前任务</text>
            <text id='text'  textColor='#ffffff'>悬浮的窗口</text>
        </vertical>
    </frame>
)

function taskFinish(){
    if(isFinish){
        return;
    }
    isFinish = true;
    Tool.closeApp( taskArr[currentIndex].name)
    ui.run(()=>{
        global.w.text.setText('关闭应用中:');
    })
    Tool.sleep(7);
    // App[taskArr[currentIndex].file].removeEvent('finish')

    currentIndex++;
    if(currentIndex >= taskArr.length){
        console.log('所有任务跑完')
        exit(); 
        return;
    }else{
        ui.run(()=>{
            global.w.task.setText(taskArr[currentIndex].file + '-' + taskArr[currentIndex].value + '  index:' + currentIndex);
            global.w.text.setText('下一个应用:');
        })
        doTask(taskArr[currentIndex])
    }
    
}

var sum = events.emitter(threads.currentThread())
sum.on('finish',function(s){
    taskFinish();
})

function doTask(task){
    console.log('>>>>doTask>>>>>>')
    let tt = task.time*60*1000;
    startProtectThread(tt);
    if(currentIndex >= 1){
        App[taskArr[currentIndex - 1].file].currentThread.interrupt();
    }
    // App[task.file].addEvent('finish',taskFinish);
    // ui.run(()=>{
    //     global.w.task.setText(task.file + '-' + task.value + '  index:' + currentIndex);
    // })
    

    launch(task.name);
    
    App[task.file][task.value](sum);
    isFinish = false;
    
}

function startProtectThread(time){
    console.log('startProtectThread time::' + time)
    
    let tempTherad = threads.start(function(){
        setTimeout(()=>{
            console.log('>>>> on timer out')
            taskFinish();
        },time)
    })
    if(ProtectThread){
        ProtectThread.interrupt();
    }
    ProtectThread = tempTherad;
}



doTask(taskArr[currentIndex]);