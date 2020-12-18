import cipher from './cipher.js';
let btn1 = document.getElementById("btnEncode");
let oldMessage = document.getElementById("originalMessage");
let offsetNew = document.getElementById("displacement");
btn1.addEventListener("click", function () {
    let texto = cipher.encode(parseInt(offsetNew.value), oldMessage.value);
    
    document.getElementById("input3").innerHTML = texto;
});
let btn2 = document.getElementById("btnDecode");
let oldMessage2 = document.getElementById("originalMessage");
let offsetNew2 = document.getElementById("displacement");

btn2.addEventListener("click", function () {
    let texto2 = cipher.decode(parseInt(offsetNew2.value), oldMessage2.value);
    
    document.getElementById("input3").innerHTML = texto2;
});


console.log(cipher);
console.log("código de Mariliz");