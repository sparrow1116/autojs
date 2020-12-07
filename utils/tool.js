const Gesture = require("./gesture");

var Tool = {
    sleep(time){
        while(time >0){
            ui.run(()=>{
                let tt = global.w.text.text();
                
                global.w.text.setText(tt.split(':')[0] + ':' + time)
                
            })
            sleep(1000)
            time--;
        }
    },
    threeTimeClick(targetObj,judgeObj,oneTimeSecond){
        let targetKey = targetObj.key?targetObj.key : 'text';
        let judgeKey = judgeObj.key?judgeObj.key:'text';
        let has = judgeObj.has === undefined? false: judgeObj.has;
        switch(targetKey){
            case 'textContains':
                if(judgeKey == 'id'){
                    if(has){

                    }else{
                        if(!id(judgeObj.value).exists()){
                            Gesture.click(textContains(targetObj.value).find().get(targetObj.index));
                            ui.run(()=>{
                                global.w.subtext.setText('第一次再次点击:');
                            })
                            this.sleep(oneTimeSecond);
                        }
                        if(!id(judgeObj.value).exists()){
                            Gesture.click(textContains(targetObj.value).find().get(targetObj.index));
                            ui.run(()=>{
                                global.w.subtext.setText('第二次再次点击:');
                            })
                            this.sleep(oneTimeSecond);
                        }
                        if(!id(judgeObj.value).exists()){
                            Gesture.click(textContains(targetObj.value).find().get(targetObj.index));
                            ui.run(()=>{
                                global.w.subtext.setText('第三次再次点击:');
                            })
                            this.sleep(oneTimeSecond);
                        }
                    }
                    
                }
                break;
            case 'id':
                if(judgeKey == 'id'){
                    if(has){
                        if(id(judgeObj.value).exists()){
                            Gesture.click(id(targetObj.value).findOne())
                            ui.run(()=>{
                                global.w.subtext.setText('第一次再次点击:');
                            })
                            this.sleep(oneTimeSecond);
                        }
                        if(id(judgeObj.value).exists()){
                            Gesture.click(id(targetObj.value).findOne())
                            ui.run(()=>{
                                global.w.subtext.setText('第二次再次点击:');
                            })
                            this.sleep(oneTimeSecond);
                        }
                        if(id(judgeObj.value).exists()){
                            Gesture.click(id(targetObj.value).findOne())
                            ui.run(()=>{
                                global.w.subtext.setText('第三次再次点击:');
                            })
                            this.sleep(oneTimeSecond);
                        }
                    }else{
                        if(!id(judgeObj.value).exists()){
                            Gesture.click(id(targetObj.value).findOne())
                            ui.run(()=>{
                                global.w.subtext.setText('第一次再次点击:');
                            })
                            this.sleep(oneTimeSecond);
                        }
                        if(!id(judgeObj.value).exists()){
                            Gesture.click(id(targetObj.value).findOne())
                            ui.run(()=>{
                                global.w.subtext.setText('第二次再次点击:');
                            })
                            this.sleep(oneTimeSecond);
                        }
                        if(!id(judgeObj.value).exists()){
                            Gesture.click(id(targetObj.value).findOne())
                            ui.run(()=>{
                                global.w.subtext.setText('第三次再次点击:');
                            })
                            this.sleep(oneTimeSecond);
                        }
                    }
                }
                break;
        }
        global.w.subtext.setText('');
    },
    threeTimeWait(obj,oneTimeSecond){
        let key = obj.key?obj.key : 'text'
        let has = obj.has === undefined? false: obj.has;
        switch(key){
            case 'text':
                if(has){
                    if(!text(obj.value).exists()){
                        ui.run(()=>{
                            global.w.subtext.setText('第一次等待:');
                        })
                        this.sleep(oneTimeSecond);
                    }
                    if(!text(obj.value).exists()){
                        ui.run(()=>{
                            global.w.subtext.setText('第二次等待:');
                        })
                        this.sleep(oneTimeSecond);
                    }
                    if(!text(obj.value).exists()){
                        ui.run(()=>{
                            global.w.subtext.setText('第三次等待:');
                        })
                        this.sleep(oneTimeSecond);
                    }
                }
                break;
            case 'id':
                if(has){
                    if(!id(obj.value).exists()){
                        ui.run(()=>{
                            global.w.subtext.setText('第一次等待:');
                        })
                        this.sleep(oneTimeSecond);
                    }
                    if(!id(obj.value).exists()){
                        ui.run(()=>{
                            global.w.subtext.setText('第二次等待:');
                        })
                        this.sleep(oneTimeSecond);
                    }
                    if(!id(obj.value).exists()){
                        ui.run(()=>{
                            global.w.subtext.setText('第三次等待:');
                        })
                        this.sleep(oneTimeSecond);
                    }
                }else{
                    if(id(obj.value).exists()){
                        ui.run(()=>{
                            global.w.subtext.setText('第一次等待:');
                        })
                        this.sleep(oneTimeSecond);
                    }
                    if(id(obj.value).exists()){
                        ui.run(()=>{
                            global.w.subtext.setText('第二次等待:');
                        })
                        this.sleep(oneTimeSecond);
                    }
                    if(id(obj.value).exists()){
                        ui.run(()=>{
                            global.w.subtext.setText('第三次等待:');
                        })
                        this.sleep(oneTimeSecond);
                    }
                }
                break;
        }
        global.w.subtext.setText('');
    },
    closeApp(packageName) {
        // let packageName = currentPackage();
        app.openAppSetting(packageName);
        text(app.getAppName(packageName)).waitFor();  
        let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
        if (is_sure.enabled()) {
            textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
            textMatches(/(.*确.*|.*定.*)/).findOne().click();
            log(app.getAppName(packageName) + "应用已被关闭");
            sleep(1000);
            back();
        } else {
            log(app.getAppName(packageName) + "应用不能被正常关闭或不在后台运行");
            back();
        }
    },
    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

module.exports = Tool;