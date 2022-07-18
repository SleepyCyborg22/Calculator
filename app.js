function clsc() {
    document.getElementById("dissc").innerText = "";
    document.getElementById("javcm").innerText = "";
}

const numbu = document.querySelectorAll("#numpad button");

for (let i = 0; i < numbu.length; i++) {
    let it = numbu[i].innerText;
    if (it != 'Back' && it != 'CE') {
        numbu[i].onclick = function () {
            document.getElementById("dissc").innerText += it;
            document.getElementById("javcm").innerText += it;
        }
    }
    else {
        numbu[i].onclick = function () {

        }
    }
}

const opbus = document.querySelectorAll("#opbu button");

for (let i = 0; i < opbus.length; i++) {
    let it = opbus[i].innerText;
    if (it != 'CE') {
        opbus[i].onclick = function () {
            document.getElementById("dissc").innerText += it;
            document.getElementById("javcm").innerText += it;
        }
    }

}

const mabus = document.querySelectorAll("#mabuo button");

for (let i = 0; i < mabus.length; i++) {
    let it = mabus[i].innerText;
    if (it != '^' && it!='!' && it!='!' && it!='!') {
        mabus[i].onclick = function () {
            document.getElementById("dissc").innerText += it + "(";
            document.getElementById("javcm").innerText += "Math." + it + "(";
        }
    }

}





function abra() {
    var ds = document.getElementById("javcm").innerText;
    var an = eval(ds);
    document.getElementById("javcm").innerText = an;
    document.getElementById("dissc").innerText = an;
}