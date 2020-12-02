
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