const input = document.getElementById("input")
function reserveString(str) {
    return str.split("").reverse().join("")
}
function check() {
    const value = input.value
    const reverse = reserveString(value)

    if (value === reverse) {
        alert("PALINDROME")
    } else {
        alert("Not Today!")
    }
    input.value = ""
}
