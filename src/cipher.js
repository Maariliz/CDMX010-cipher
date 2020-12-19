const cipher = {
  encode (offsetNew,oldMessage){
      let texto; 
      let newMessage = [];
          
      for (let i = 0; i < oldMessage.length; i++){
          
          if(oldMessage.charCodeAt(i)>= 65 && oldMessage.charCodeAt(i)<=90){
              texto = String.fromCharCode((oldMessage.charCodeAt(i)-65+offsetNew)%26+65);
              newMessage.push(texto)
            
          }
      }
            return newMessage.join("");
  },

     decode (offsetNew2,oldMessage2){
        let texto2; 
        let newMessage2 = [];
            for (let i = 0; i < oldMessage2.length; i++){
            
            if(oldMessage2.charCodeAt(i)>= 65 && oldMessage2.charCodeAt(i)<=90){
                texto2 = String.fromCharCode((oldMessage2.charCodeAt(i)+65-offsetNew2)%26+65);
                newMessage2.push(texto2)
               
            }
        }
        return newMessage2.join("");
    },
};

export default cipher;


