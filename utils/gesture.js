var Gesture = {
    swipeUp(){
        console.log('>>swipeUp>>')
        swipe(device.width/2 + random(-10,10), device.height/2 + random(80,90),
        device.width/2 + random(-10,10), device.height/2 - random(70,80),
        20)
    },
    changdouSwipe(x,y){
        console.log('>>changdouSwipe>>')
        console.log(x);
        console.log(y);
        gesture(200,[x,y],[x,y-200],[x,y-250])
    },
    langSwipeUp(){
        console.log('>>langSwipeUp>>')
        swipe(device.width/2 + random(-10,10), device.height - random(300,400),
        device.width/2 + random(-10,10), random(400,500),
        700)
    },
    click(obj){
        var b = obj.bounds();
        click(b.centerX(),b.centerY())
    },
    dragUp(distance){
        let x = device.width/2 + random(-10,10);
        let y = device.height - random(200,210);
        swipe(x,y,x,y-distance,700);
    }
}

module.exports = Gesture;