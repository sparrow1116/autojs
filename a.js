
toast("hello auto")

let App = require('./initApp.js')
let Tool = require('./utils/tool.js')
let taskArr = require('./task/getTask.js');

global.storage = storages.create('auto_task');

let hour = new Date().getHours();
let currentIndex;
if(hour<8){
    currentIndex = 0;
}else{
    let i = global.storage.get('index');
    if(i){
        currentIndex = i
    }else{
        currentIndex = 0;
    }
}
//TODO 这个是测试用
currentIndex = 0;
var ProtectThread;
var isFinish = false;
let forceOver = false;

global.w = floaty.window(
    <frame gravity='center' bg="#000000">
        <vertical paddig='18 8'>
            <text id='task' textColor='#ffffff'>当前任务</text>
            <text id='text' textColor='#ffffff'>悬浮的窗口</text>
        </vertical>
        
    </frame>
)
global.w.setPosition(device.width/2 -200, -80);

ui.run(()=>{         
    global.w.task.setText(taskArr[currentIndex].file + '-' + taskArr[currentIndex].value + '  index:' + currentIndex);
   
})

function taskFinish(){
    if(isFinish){
        return;
    }
    isFinish = true;
    // if(forceOver){
    //     Tool.closeApp(taskArr[currentIndex].name)
    //     threads.shutDownAll();
    //     Tool.sleep(7);
    // }else{
        
        Tool.closeApp(taskArr[currentIndex].name)
    
        Tool.sleep(7);
        // App[taskArr[currentIndex].file].removeEvent('finish')
    // }
    currentIndex++;
    global.storage.put('index',currentIndex + '');
    if(currentIndex >= taskArr.length){
        console.log('所有任务跑完')
        return;
    }else{
        ui.run(()=>{
            
            global.w.task.setText(taskArr[currentIndex].file + '-' + taskArr[currentIndex].value + '  index:' + currentIndex);
            global.w.text.setText('下一个应用:');
        })
        doTask(taskArr[currentIndex])
    }
    
}

// let a = {
//     sum0:null,
//     sum1:null,
//     sum2:null
// }

var sum = events.emitter(threads.currentThread())
sum.on('finish',function(s){
    console.log('>>>> come in slef finish>>')
    taskFinish();
    forceOver = false;
})

function doTask(task){
    
    console.log('>>>task.name>>>>' + task.name)
    console.log(task)
    console.log('>>>>doTask>>>>>>')
    let tt = task.time*60*1000;
    startProtectThread(tt);


    try{
        console.log('>>>>>>>>>>fuck>>>>>>>>>')
        if(currentIndex >= 1){
            App[taskArr[currentIndex - 1].file].currentThread.interrupt();
        }
       
        console.log('>>>>>>>>>>0')
        // sleep(300); 
        launch(task.name);
        isFinish = false;
        console.log('>>>>>>>>>>1')
        // sleep(300); 
        
        console.log('>>>>>>>>>>2')
        // sleep(300); 
        
        // sleep(300);
        console.log('>>>>>>>>>>3')
        console.log(task.file)
        console.log(task.value)
        // console.log(task.file)
        App[task.file][task.value](sum,task.count);
        console.log('>>>>>>>>>>4')
        
        // sum.blockedGet()
        // taskFinish();
        // sleep(300);
        
    }catch(e){
        console.log('>>>>>>>>>>>>>>>>>>>>>>>e')
        console.log(e)
    }

   
}
function startProtectThread(time){
    try{
        console.log('startProtectThread time::' + time)
    
        let tempTherad = threads.start(function(){
            setTimeout(()=>{
                forceOver = true;
                console.log('>>>> on timer out')
                taskFinish();
            },time)
        })
        if(ProtectThread){
            ProtectThread.interrupt();
        }
        ProtectThread = tempTherad;
    }catch(e){
        console.log('error>>>>>>>>>>>>>>>>>')
        console.log(e)
    }
    
}



doTask(taskArr[currentIndex]);
