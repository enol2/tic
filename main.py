def on_forever():
    if True:
        basic.show_leds("""
            . . . . .
                        . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
        """)
    else:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
basic.forever(on_forever)

def on_forever2():
    if True:
        basic.show_leds("""
            . . . . .
                        . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
        """)
    else:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
basic.forever(on_forever2)
