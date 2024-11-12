function verify() {
    console.log("a, b")
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    console.log(a, b)

    if (a*1500 === b) {
        result = "Да, денег хватит ровно."
        check = true;
    }

    else if (a*1500 < b) {
        result = "Да, денег хватит и ещё останется."
        check = true;
    }

    else {
        result = "Нет, денег не хватит."
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Можно отправить только положительный результат")
    }
}

let result;
let check;

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)