input.onButtonPressed(Button.A, function () {
    let numero = randint(0, 4) * 2 + 1
    basic.showNumber(numero)
})

input.onButtonPressed(Button.B, function () {
    let numero = randint(0, 4) * 2
    basic.showNumber(numero)
})

input.onButtonPressed(Button.AB, function () {
    let numero = randint(0, 9)
    basic.showNumber(numero)
})

input.onGesture(Gesture.Shake, function () {
    let numero = randint(1, 9) * 10
    basic.showNumber(numero)
})

