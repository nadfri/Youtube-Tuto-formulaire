form.onsubmit = () =>{

    output.innerHTML = `Bonjour ${username.value}, 
    ton email est ${mail.value} 
    et ton mot de passe est ${pass.value}.`;

    return false;
}