
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
    }
}

module.exports = Tool;