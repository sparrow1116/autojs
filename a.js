
toast("hello auto")

let App = require('./initApp.js')

let taskArr = require('./task/getTask.js');


// Object.keys(App).forEach((key)=>{
//     App[key].addEvent('finish',(d)=>{
//         taskFinish();
//     })
// })


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
        <vertical paddig='18 8'>
            <text id='task' textColor='#ffffff'>当前任务</text>
            <text id='text' textColor='#ffffff'>悬浮的窗口</text>
        </vertical>
        
    </frame>
)

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
    App[taskArr[currentIndex].file].removeEvent('finish')
    currentIndex++;
    storage.put('index',currentIndex + '');
    if(currentIndex >= taskArr.length){
        console.log('所有任务跑完')
        return;
    }
    doTask(taskArr[currentIndex]);
}

function doTask(task){
    App[task.file].addEvent('finish',taskFinish);
    global.w.task.setText(task.file + '-' + task.value + '  index:' + currentIndex);

    taskTimer = setTimeout(()=>{
        taskFinish();
    },task.time * 60 * 1000);
    App[task.file][task.value]();
}
console.log('>>>goto first task');
doTask(taskArr[currentIndex]);
