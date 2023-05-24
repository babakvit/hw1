function onResponse(response){
    return response.json();
}

function onJson(json){
    console.log(json);

    document.querySelector("img.profile_picture").src = json[4];

    let arr = document.querySelectorAll("article h2");
    
    for (const elem of arr){
        switch(elem.dataset.campo){
            case "nome_utente":
                elem.textContent = "Username: " + json[0];
                break;
            case "nome":
                elem.textContent = "Nome: " + json[1];
                break;
            case "cognome":
                elem.textContent = "Cognome: " + json[2];
                break;
            case "email":
                elem.textContent = "Email: " + json[3];
                break;
            default: break;
        }
    }


    

     
}


fetch("http://localhost/hw1/homework_gestione.php?choice=5").then(onResponse).then(onJson);

//CAMBIO DI FOTO PROFILO

const form = document.forms['change_foto'];
form.addEventListener('submit', cambioFoto);

function cambioFoto(event){
    event.preventDefault();
    console.log(form.change_foto.value);
    if (form.change_foto.value.length === 0){
        alert("Non hai selezionato la foto");
        event.preventDefault();
    }
}