
function controllaNome(event) {
    if (event.currentTarget.value.length === 0){
        event.currentTarget.classList.add("errore_input");
        const elem = event.currentTarget.parentNode.querySelector("div");
        elem.classList.remove("hidden");
        elem.querySelector("span").textContent = "Attenzione! Non lasciare questo spazio vuoto";
    } else {
        const elem = event.currentTarget.parentNode.querySelector("div");
        elem.classList.add("hidden");
        event.currentTarget.classList.remove("errore_input");
    }
}

function controllaCognome(event){
    if (event.currentTarget.value.length === 0){
        event.currentTarget.classList.add("errore_input");
        const elem = event.currentTarget.parentNode.querySelector("div");
        elem.classList.remove("hidden");
        elem.querySelector("span").textContent = "Attenzione! Non lasciare questo spazio vuoto";
    } else {
        const elem = event.currentTarget.parentNode.querySelector("div");
        elem.classList.add("hidden");
        event.currentTarget.classList.remove("errore_input");
    }
}

function onResponse(response){
    if (response.ok) {
        return response.json(); // Parsing the response as JSON
      } else {
        throw new Error('Request failed');
      }
}

function controllaUsername(event){

    if (event.currentTarget.value.length === 0){
        event.currentTarget.classList.add("errore_input");
        const elem = event.currentTarget.parentNode.querySelector("div");
        elem.classList.remove("hidden");
        elem.querySelector("span").textContent = "Attenzione! Non lasciare questo spazio vuoto";
    } else {
        if (event.currentTarget.value.length > 50){
            event.currentTarget.classList.add("errore_input");
            const elem = event.currentTarget.parentNode.querySelector("div");
            elem.classList.remove("hidden");
            elem.querySelector("span").textContent = "Attenzione! Username non deve superare 50 caratteri";
        } else{
            if (!/^[a-zA-Z0-9_]{1,50}$/.test(event.currentTarget.value)) {
                event.currentTarget.classList.add("errore_input");
                const elem = event.currentTarget.parentNode.querySelector("div");
                elem.classList.remove("hidden");
                elem.querySelector("span").textContent = "Attenzione! Username deve rispettare il pattern";
              } else {
                /*const elem = event.currentTarget.parentNode.querySelector("div");
                elem.classList.add("hidden");
                event.currentTarget.classList.remove("errore_input");*/
                const input = encodeURI(event.currentTarget.value);
                fetch("http://localhost/hw1/homework_gestione.php?choice=6&username=" + input).then(onResponse).then(onUsernameCheck);

            }
        }
    }

}



function onUsernameCheck(json){
    if (json){
        document.querySelector(".username input").classList.add("errore_input");
        document.querySelector(".username div").classList.remove("hidden");
        document.querySelector(".username div span").textContent = "Questo username già esiste";
    } else{
        document.querySelector(".username input").classList.remove("errore_input");
        document.querySelector(".username div").classList.add("hidden");
    }
}

function controllaMail(event){
    
    if (event.currentTarget.value.length === 0){
        event.currentTarget.classList.add("errore_input");
        const elem = event.currentTarget.parentNode.querySelector("div");
        elem.classList.remove("hidden");
        elem.querySelector("span").textContent = "Attenzione! Non lasciare questo spazio vuoto";
    } else {
        if (!validateEmail(event.currentTarget.value)){
            event.currentTarget.classList.add("errore_input");
            const elem = event.currentTarget.parentNode.querySelector("div");
            elem.classList.remove("hidden");
            elem.querySelector("span").textContent = "Attenzione! La mail non è valida";
        } else {
            /*const elem = event.currentTarget.parentNode.querySelector("div");
            elem.classList.add("hidden");
            event.currentTarget.classList.remove("errore_input");*/
            const input = encodeURI(event.currentTarget.value);
            fetch("http://localhost/hw1/homework_gestione.php?choice=7&email=" + input).then(onResponse).then(onEmailCheck);
        }
    }

}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function onEmailCheck(json){
    if (json){
        document.querySelector(".email input").classList.add("errore_input");
        document.querySelector(".email div").classList.remove("hidden");
        document.querySelector(".email div span").textContent = "Questa mail è già in uso";
    } else{
        document.querySelector(".email input").classList.remove("errore_input");
        document.querySelector(".email div").classList.add("hidden");
    }
}

function controllaPassword(event){
   

    if (event.currentTarget.value.length === 0){
        event.currentTarget.classList.add("errore_input");
        const elem = event.currentTarget.parentNode.querySelector("div");
        elem.classList.remove("hidden");
        elem.querySelector("span").textContent = "Attenzione! Non lasciare questo spazio vuoto";
    } else {
        if (event.currentTarget.value.length < 8){
            event.currentTarget.classList.add("errore_input");
            const elem = event.currentTarget.parentNode.querySelector("div");
            elem.classList.remove("hidden");
            elem.querySelector("span").textContent = "Attenzione! La password deve avere minimo 8 caratteri";
        } else {
            const elem = event.currentTarget.parentNode.querySelector("div");
            elem.classList.add("hidden");
            event.currentTarget.classList.remove("errore_input");
        }
    }

}

function controllaConfermaPass(event){

    if (event.currentTarget.value.length === 0){
        event.currentTarget.classList.add("errore_input");
        const elem = event.currentTarget.parentNode.querySelector("div");
        elem.classList.remove("hidden");
        elem.querySelector("span").textContent = "Attenzione! Non lasciare questo spazio vuoto";
    } else {
        if (event.currentTarget.value !== document.querySelector(".password input").value){
           
            event.currentTarget.classList.add("errore_input");
            const elem = event.currentTarget.parentNode.querySelector("div");
            elem.classList.remove("hidden");
            elem.querySelector("span").textContent = "Attenzione! Le password non coincidono";
        } else {
            const elem = event.currentTarget.parentNode.querySelector("div");
            elem.classList.add("hidden");
            event.currentTarget.classList.remove("errore_input");
        }
    }

}

function allowCheck(event){
    if (!document.querySelector(".allow input").checked){
        event.preventDefault();
        document.querySelector("#allow_err").classList.remove("hidden");
        document.querySelector(".allow input").classList.add("errore_input");
        document.querySelector("#allow_err span").textContent = "Devi accettare le condizioni per procedere";
    } else{
        document.querySelector("#allow_err").classList.add("hidden");
        document.querySelector(".allow input").classList.remove("errore_input");
    }
}



document.querySelector('.name input').addEventListener('blur', controllaNome);
document.querySelector('.surname input').addEventListener('blur', controllaCognome);
document.querySelector('.username input').addEventListener('blur', controllaUsername);
document.querySelector('.email input').addEventListener('blur', controllaMail);
document.querySelector('.password input').addEventListener('blur', controllaPassword);
document.querySelector('.confirm_password input').addEventListener('blur', controllaConfermaPass);
document.querySelector(".submit input").addEventListener('click', allowCheck);


