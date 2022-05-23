input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        # # . # #
        # # . # #
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # . # #
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # # . # #
        # # # # #
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # # . # #
        # # . # #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # # . # #
        # # . # #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # # . # #
        # # . # #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # . # #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # . # #
        # # # # #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # . # #
        # # . # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # # . # #
        # # . # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # . # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # . # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # # . # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.EigthNote)
        basic.clearScreen()
        basic.showIcon(IconNames.QuarterNote)
    }
})
basic.showString("Hello!")
basic.showIcon(IconNames.Heart)
