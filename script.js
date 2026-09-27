const email = "aphane095@gmail.com";

function maskedEmail(email){

    const atIndex = email.indexOf("@");
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);

    const firstChar = username[0];
    const lastChar = username[username.length-1];
    const maskedMiddle = "*".repeat(username.length - 2);
    
    return firstChar + maskedMiddle + lastChar + domain;
    
}

console.log(maskedEmail(email));