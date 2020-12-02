var Gesture = {
    swipeUp(){
        swipe(device.width/2 + random(-10,10), device.height/2 + random(80,90),
        device.width/2 + random(-10,10), device.height/2 - random(70,80),
        20)
    },
    click(obj){
        var b = obj.bounds();
        click(b.centerX(),b.centerY())
    },
    dragUp(distance){
        let x = device.width/2 + random(-10,10);
        let y = device.height/2 + random(200,210);
        console.log(x);
        console.log(y)
        console.log(distance)
        swipe(x,y,x,y-distance,500);
    }
}

module.exports = Gesture;