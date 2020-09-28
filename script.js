form.onsubmit = () =>{

    output.textContent = `Bonjour ${username.value}, 
    ton email est ${mail.value} 
    et ton mot de passe est ${pass.value}.`;

    return false;
    //e.preventDefault();
}