function clsc() {
    document.getElementById("dissc").innerText = "";
    document.getElementById("javcm").innerText = "";
}

function fact(x){
    var ans =  1;
    for(let i=1;i<=x;i++)ans*=i;
    return ans;
}

const fa = document.querySelector("#fact");
fa.onclick = function(){
    
    document.getElementById("dissc").innerText += "fact(";
    document.getElementById("javcm").innerText += "fact(";
    
}
const pa = document.querySelector("#bp");
pa.onclick = function(){
    
    document.getElementById("dissc").innerText += "pow(";
    document.getElementById("javcm").innerText += "Math.pow(";
    
}
const ea = document.querySelector("#e");
ea.onclick = function(){
    
    document.getElementById("dissc").innerText += "e";
    document.getElementById("javcm").innerText += "Math.E";
    
}
const pia = document.querySelector("#pi");
pia.onclick = function(){
    
    document.getElementById("dissc").innerText += "pi";
    document.getElementById("javcm").innerText += "Math.PI";
    
}

const numbu = document.querySelectorAll("#numpad button");

for (let i = 0; i < numbu.length; i++) {
    let it = numbu[i].innerText;
    numbu[i].onclick = function () {
        document.getElementById("dissc").innerText += it;
        document.getElementById("javcm").innerText += it;
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