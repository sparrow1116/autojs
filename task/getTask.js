let cycleTask = require('./cycleTask')
let timeTask = require('./timeTask');


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

let taskArr = []
for(let i = 0; i<newCycleTask.length; i++){
    taskArr = taskArr.concat(timeTask);
    taskArr.push(newCycleTask[i]);
}
// console.log(timeTask)
// console.log(taskArr);
module.exports = taskArr;