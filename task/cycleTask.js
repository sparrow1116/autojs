
var CycleTask = [
    {
        name:'com.zf.shuashua',
        value:'read',
        time:20,
        cycle:8,
        count:90,  
        file:'changdou'
    },
    {
        name:'com.jm.video',
        value:'read',
        time:20,
        cycle:8,
        count:110,  
        file:'shuabao'
    },
    {
        name:'com.kuaishou.nebula',//应用包名称
        value:'read',               //任务动作名称
        time:20,                    //单次运行时间
        cycle:8,                    //整体运行次数
        count:110,                  //单次动作重复次数
        file:'kuaishou'             //应用对应的文件
    },
    {
        name:'com.ss.android.ugc.aweme.lite',
        value:'read',
        time:2,
        cycle:2,
        count:9, 
        file:'douyin'
    }
]

module.exports = CycleTask;