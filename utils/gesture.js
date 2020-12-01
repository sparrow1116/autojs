var Gesture = {
    swipeUp(){
        swipe(device.width/2 + random(-10,10), device.height/2 + random(80,90),
        device.width/2 + random(-10,10), device.height/2 - random(70,80),
        20)
    },
    click(obj){
        var b = obj.bounds();
        click(b.centerX(),b.centerY())
    }
}

module.exports = Gesture;