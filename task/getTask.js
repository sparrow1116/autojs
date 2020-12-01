let cycleTask = require('./cycleTask')
let timeTask = require('./timeTask');

let taskArr = []

// let hour = new Date().getHours();
// if(hour<8){
    let newCycleTask = [];
    function getCycleTask(taskList){
        let hadPush = false;
        let tempCycleTask = [];
        for(let i = 0; i<taskList.length; i++){
            if(taskList[i].cycle >= 1){
                taskList[i].cycle-- ;
                tempCycleTask.push(taskList[i]);
                newCycleTask.push(taskList[i]);
                hadPush = true;
            }
        }
        if(hadPush){
            getCycleTask(tempCycleTask);
        }
    }
    getCycleTask(cycleTask);
    
    
    for(let i = 0; i<newCycleTask.length; i++){
        
        taskArr.push(newCycleTask[i]);
        taskArr = taskArr.concat(timeTask);
    }
// }else{
//     let str = Storage.get('task');
//     taskArr = JSON.parse(str);
// }

// console.log(timeTask)
console.log(taskArr);
module.exports = taskArr;