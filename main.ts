let Hand = 0
input.onGesture(Gesture.Shake, function () {
    Hand = randint(0, 3)
    if (Hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (Hand == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (Hand == 3) {
        basic.showLeds(`
            . . . . .
            . # # . .
            # # # # .
            # # # # .
            . # # . .
            `)
    }
})
basic.forever(function () {
	
})
