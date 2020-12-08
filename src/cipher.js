const cipher = {    
let string = document.getElementById("message").value;
let disp = document.getElementById("displacement").value;
let newMessage = "";
//console.log (string);
for(let i=0; i< string.length; i++) {console.log(string.charCodeAt (i)),
}
let offset = string.charCodeAr(i)
if (offset >= 65&& offset <= 90){ 
  newMessage += string.fromCharCode(offset-65+disp)%26+65
}

        
  // ...
  /*var */
// 
}
export default cipher;
/*let string ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let offset = document.getElementById("displacement").value;
console.log (string);

for(let i = 0; i < string.length; i++) { console.log(string.charCodeAt (i));
}
