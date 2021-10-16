let score = 0
// 記分員 micro:bitB
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
/**
 * A GND <---------------> B  GND
 * 
 * A P0     <---------------> B  P1
 * 
 * A P2 ------------LED-----------A GND
 */
// 記分板micro:bitA
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        score += 1
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showNumber(score)
        basic.pause(1000)
        music.playTone(262, music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
