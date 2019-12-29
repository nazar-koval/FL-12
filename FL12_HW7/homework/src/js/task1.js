// Your code goes here
let mail = prompt('Enter E-mail','');
let passwordDefault = {
    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'    
}
if(!mail){
    alert("Canceled.");
} else if(mail.length <= 5){
    alert("I don't know any emails having name length less than 5 symbols");
} else if(mail === 'user@gmail.com' || mail === 'admin@gmail.com'){
    let password = prompt('Enter password', '');
    if(!password){
        alert("Canceled.");
    } else if(password === passwordDefault[mail]){
        let choice = confirm('Do you want to change your password?');
        if(choice === true){
            let passwordOld = prompt('Enter old password for validation', '');
            if(!passwordOld){
                alert("Canceled.");
            } else if(passwordOld === password){
                let passwordNew = prompt('Enter new password', '');
                if(!passwordNew){
                    alert("Canceled");
                } else if(mail.length <= 6){
                    alert("It’s too short password. Sorry.");
                } else{
                    let newChangePass = prompt('Enter new password again for validation', '');
                    if (newChangePass === passwordNew){
                        alert("You have successfully changed your password.");
                    } else if(newChangePass !== passwordNew){
                        alert("You wrote the wrong password.");
                    }
                }
            } else if(passwordOld !== password){
                alert("Wrong old password!");
            }
        } else if(choice === false){
            alert("You have failed the change.");
        }
    } else if(password !== passwordDefault){
        alert("Wrong password");
    } 
} else if(mail !== 'user@gmail.com' || mail !== 'admin@gmail.com'){
    alert("I don’t know you");    
}