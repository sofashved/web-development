function verify() {
    console.log("a")
    let a = parseFloat(elementA.innerText);
    console.log(a)

    if (a > 0) {
    result = "Это число положительное."
    document.getElementById("result").innerText =  result;
    }
    else if (a === 0) {
    result = "Это число ноль."
    document.getElementById("result").innerText =  result;
    }
    else {
    result = "Это число отрицательное."
    document.getElementById("result").innerText =  result;
    }
}

const elementA = document.getElementById("a");
const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);