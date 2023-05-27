let film_arr;
fetch("http://localhost/hw1/get_liked_films.php").then(onResponse).then(onJson);

function onResponse(response){
    return response.json();
}

function onJson(json){
    console.log(json);
    film_arr = json;
    for (const elem of film_arr){
        const container_general = document.querySelector("article.watchlist");

        const container = document.createElement("div");
        container.classList.add("watchlistContainer");
        container.dataset.id_film = elem.id_film;
        container.addEventListener('click', gestioneOnClick);

        const image = document.createElement('img');
        image.src = elem.foto_film; 
        image.classList.add("watchlistImg");

        const text = document.createElement("div");
        text.textContent = elem.nome_film;
        text.classList.add("watchlistText");
        
        container.appendChild(image);
        container.appendChild(text);
        container_general.appendChild(container);
    }
}

//questa funzione serve per aprire la finestra modale quando viene cliccato uno dei container
//della watchlist

function gestioneOnClick(event){
    const modalView = document.querySelector("#modal-view");
    modalView.classList.remove("hidden");
    modalView.addEventListener('click', removeModalHandler);

    let information_to_add;
    
    for (const elem of film_arr){
        if (elem.id_film === event.currentTarget.dataset.id_film){
            information_to_add = elem;
            break;
        }
    }  
    //qua creo il post da mettere sulla modale 

    //diachiarazione elementi
    const container = document.createElement('div');
    container.classList.add('post_container');
    container.dataset.id_film = information_to_add.id_film;
    
    const immagine_film = document.createElement('img');
    immagine_film.src = information_to_add.foto_film;
    immagine_film.classList.add("filmImage");
    
    //container per descrizioni ed altre info
    const info_container = document.createElement('div');
    info_container.classList.add("descriptionContainer");

    const descrizione = document.createElement('p');
    descrizione.textContent = information_to_add.descrizione;

    const titolo = document.createElement('h2');
    titolo.textContent = information_to_add.nome_film;

    const anno = document.createElement('h4');
    anno.textContent = "Anno di produzione: " + information_to_add.anno_uscita;

    const genere = document.createElement('h4');
    genere.textContent = "Genere: " + information_to_add.genere;

    const regista = document.createElement('h4');
    regista.textContent = "Regista: " + information_to_add.regista;

    const imgText = document.createElement('div');
    imgText.classList.add("imgText");

    //saasdasdnaksdkjas

    const containerCommentoLike = document.createElement('div');
    containerCommentoLike.classList.add("containerLikeComment");

        
        //creo l'icona con il like e aggiungo il listener
        const like = document.createElement('img');
        like.src = "images/elimina.png";
        like.classList.add("likeCommento");
        //aggiungo anche un dataset al container per identificare il post

        like.dataset.id_film = information_to_add.id_film;
        like.addEventListener('click', cancelHandler);

        containerCommentoLike.appendChild(like);
        


    //appendo le info di testo nell'aposito container
    info_container.appendChild(titolo);
    info_container.appendChild(genere);
    info_container.appendChild(regista);
    info_container.appendChild(anno);
    info_container.appendChild(descrizione);

    imgText.appendChild(immagine_film);
    imgText.appendChild(info_container);
    container.appendChild(imgText);
    container.appendChild(containerCommentoLike);

    modalView.appendChild(container);

}

//gestione della rimozione della finestra modale
function removeModalHandler(event){
    event.currentTarget.classList.add("hidden");
    event.currentTarget.innerHTML = '';
}


function cancelHandler(event){
    //rimuovo il post dalla watchlist in database
    
    fetch("http://localhost/hw1/homework_gestione.php?id_film="+event.currentTarget.dataset.id_film +"&choice=2").then(onResponse).then(onJsonRemove);

}

function onJsonRemove(json){
    location.reload(true);
   
}


