basic.forever(function () {
    if (true) {
        if (input.temperature() == 10) {
            basic.showNumber(input.temperature())
            basic.showString("Vamos a esquiar")
        }
        if (input.temperature() == 20) {
            basic.showNumber(input.temperature())
            basic.showString("Hagamos un picnic")
        }
        if (input.temperature() == 30) {
            basic.showNumber(input.temperature())
            basic.showString("Vamos a la playa ")
        }
        if (input.temperature() == 40) {
            basic.showNumber(input.temperature())
            basic.showString("Mejor no salgas ")
        }
        basic.showString("" + (input.temperature()))
    }
})
