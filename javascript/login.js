if(localStorage.sessionTest){
    window.location.href = "/pages/index.html";
}
const login = () => {
   
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const alertSucces= document.getElementById('alertSucces');
    const alertError= document.getElementById('alertError');

    const sessionTest = localStorage.sessionTest ? JSON.parse(localStorage.sessionTest) : null;
    if(sessionTest){
        window.location.href = "/pages/login.html";
        return
    }

    const databaseTest = localStorage.databaseTest ? JSON.parse(localStorage.databaseTest) : null ;
    const finder = databaseTest.find(item => item.email == emailInput);

    if(finder?.email != emailInput){
        alertSucces.textContent = "";
        alertError.textContent = "Information incorrect";
        return
    }

    if(finder.password != passwordInput){
        alertSucces.textContent = "";
        alertError.textContent = "Information incorrect";
        return
    }

    localStorage.setItem('sessionTest', JSON.stringify(finder));
    
    alertSucces.textContent = "Connexion effectuée avec succès"

    setTimeout(() => {
        window.location.href = "/pages/index.html";
    }, 1000);
}

document.getElementById('submit').addEventListener('click', login)