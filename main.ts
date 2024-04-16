basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        basic.showString(" Shimmy Shimmy Ya ")
    }
    led.setBrightness(430)
    basic.showIcon(IconNames.Diamond)
    basic.pause(1)
    led.setBrightness(655)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(200)
    basic.clearScreen()
    for (let index = 0; index < 2; index++) {
        basic.showNumber(input.temperature())
        basic.pause(200)
    }
})
