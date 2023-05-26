function createDiv(){
    const div = document.createElement("div");
    div.classList.add("error");
    return div;
}

function controllaNome(event) {
    const input = event.currentTarget;
    if (input.value.length === 0){
        input.classList.add("errore_input");
        let elem = createDiv();
        elem.textContent = "Non lasciare questo spazio vuoto";
        input.parentNode.appendChild(elem);
    }
}

function controllaCognome(event){
    const input = event.currentTarget;
    if (input.value.length === 0){
        input.classList.add("errore_input");
        let elem = createDiv();
        elem.textContent = "Non lasciare questo spazio vuoto";
        input.parentNode.appendChild(elem);
    }
}

function controllaUsername(event){
    const input = event.currentTarget;
    if (input.value.length === 0){
        input.classList.add("errore_input");
        let elem = createDiv();
        elem.textContent = "Non lasciare questo spazio vuoto";
        input.parentNode.appendChild(elem);
    }

    if (input.value.length > 50){
        input.classList.add("errore_input");
        let elem = createDiv();
        elem.textContent = "Username troppo lungo";
        input.parentNode.appendChild(elem);
    }

    if (!/^[a-zA-Z0-9_]{1,15}$/.test(username)) {
        // Codice da eseguire se il pattern non viene soddisfatto
        input.classList.add("errore_input");
        let elem = createDiv();
        elem.textContent = "Username non rispetta il pattern";
        input.parentNode.appendChild(elem);
      }
}

function controllaMail(event){
    if (!validateEmail(event.currentTarget.vlaue)){
        event.currentTarget.classList.add("errore_input");
        let elem = createDiv();
        elem.textContent = "Mail non valida";
        event.currentTarget.parentNode.appendChild(elem);
    }

    if (input.value.length === 0){
        event.currentTarget.classList.add("errore_input");
        let elem = createDiv();
        elem.textContent = "Non lasciare questo spazio vuoto";
        event.currentTarget.parentNode.appendChild(elem);
    }

}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function controllaPassword(event){
    if (event.currentTarget.value.length < 8){
        event.currentTarget.classList.add("errore_input");
        let elem = createDiv();
        elem.textContent = "Password troppo corta";
        event.currentTarget.parentNode.appendChild(elem);
    }
}





document.querySelector('.name input').addEventListener('blur', controllaNome);
document.querySelector('.surname input').addEventListener('blur', controllaCognome);
document.querySelector('.username input').addEventListener('blur', controllaUsername);
document.querySelector('.email input').addEventListener('blur', controllaMail);
document.querySelector('.password input').addEventListener('blur', controllaPassword);
//document.querySelector('.confirm_password input').addEventListener('blur', controllaConfermaPass);


