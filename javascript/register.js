if(localStorage.sessionTest){
    window.location.href = "/pages/index.html";
}

const register = ()=> {
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const passwordCInput = document.getElementById('password_c').value;
    const alertSucces= document.getElementById('alertSucces');
    const alertError= document.getElementById('alertError');

    
    if(passwordInput.replaceAll(' ', '').length < 4 && passwordCInput != passwordInput ){
        alertSucces.textContent = "";
        alertError.textContent = "Mot de passe non identique";
        return
    }

    if(nameInput.replaceAll(' ', '').length < 4){
        alertSucces.textContent = "";
        alertError.textContent = "Nom non valide";
        return
    }

    if(emailInput.replaceAll(' ', '').length < 2){
        alertSucces.textContent = "";
        alertError.textContent = "Email non valide"; 
        return
    }

    alertError.textContent = "";

    const databaseTest = localStorage.databaseTest ? JSON.parse(localStorage.databaseTest) : [] ;
    if(databaseTest.find(item => item.email == emailInput)) return alertSucces.textContent = "Ce utilisateur existe déjà";
    const data = {
            id: databaseTest.length + 1,
            name: nameInput,
            email: emailInput,
            password: passwordInput,
            createdat: new Date(),
            updatedat: new Date(),

        }


    databaseTest.push(data);

    localStorage.setItem('databaseTest', JSON.stringify(databaseTest));

    alertSucces.textContent = "Inscription effectuée avec success"

    setTimeout(() => {
        window.location.href = "/pages/login.html";
    }, 1000);
    

}

document.getElementById('submit').addEventListener('click', register)
