input.onButtonPressed(Button.A, function () {
    basic.showNumber(stappen)
})
input.onButtonPressed(Button.AB, function () {
    stappen = 0
    basic.showNumber(stappen)
})
input.onGesture(Gesture.ThreeG, function () {
    stappen += 1
    basic.showNumber(stappen)
})
let stappen = 0
stappen = 0
basic.showNumber(stappen)
basic.forever(function () {
	
})
