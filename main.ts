input.setAccelerometerRange(AcceleratorRange.EightG)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 0) {
        radio.sendString("")
    }
})
