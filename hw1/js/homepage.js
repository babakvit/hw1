const element = document.querySelector('article');
const MAX_LOAD = 2;

function onResponse(response){
    return response.json();
}

let j = 0;


function onJson(json){
    console.log(json);
    for (let i = 0; i< MAX_LOAD; i++){
        const articolo = document.querySelector('article');

        if (i + j >= json.length){
            const trg = document.querySelector("expandText");
            articolo.removeChild(trg);
            return;
        }
        
        //diachiarazione elementi
        const container = document.createElement('div');
        container.classList.add('post_container');
        container.dataset.id_film = json[i+j].id_film;
        
        const immagine_film = document.createElement('img');
        immagine_film.src = json[i+j].foto_film;
        immagine_film.classList.add("filmImage");
        
        //container per descrizioni ed altre info
        const info_container = document.createElement('div');
        info_container.classList.add("descriptionContainer");

        const descrizione = document.createElement('p');
        descrizione.textContent = json[i+j].descrizione;

        const titolo = document.createElement('h2');
        titolo.textContent = json[i+j].nome_film;

        const anno = document.createElement('h4');
        anno.textContent = "Anno di produzione: " + json[i+j].anno_uscita;

        const genere = document.createElement('h4');
        genere.textContent = "Genere: " + json[i+j].genere;

        const regista = document.createElement('h4');
        regista.textContent = "Regista: " + json[i+j].regista;
        
        //container per like e commento
        const containerCommentoLike = document.createElement('div');
        containerCommentoLike.classList.add("containerLikeComment");

        //creo l'icona con il commento e aggiungo il listener
        const commento = document.createElement('img');
        commento.src = "images/commento.png";
        commento.addEventListener('click', commentHandler);
        
        //creo l'icona con il like e aggiungo il listener
        const like = document.createElement('img');
        like.src = "images/like_vuoto.png";
        like.classList.add("likeCommento");
        //aggiungo anche un dataset al container per identificare il post

        like.dataset.id_film = json[i+j].id_film;
        like.addEventListener('click', likeHandler);

        //dichiaro un container per immagine e testo

        const imgText = document.createElement('div');
        imgText.classList.add("imgText");

        

        //appendo le info di testo nell'aposito container
        info_container.appendChild(titolo);
        info_container.appendChild(genere);
        info_container.appendChild(regista);
        info_container.appendChild(anno);
        info_container.appendChild(descrizione);
        
        //like e commento nel container
        containerCommentoLike.appendChild(like);
        containerCommentoLike.appendChild(commento);
        

        imgText.appendChild(immagine_film);
        imgText.appendChild(info_container);
        container.appendChild(imgText);
        container.appendChild(containerCommentoLike);
        
        articolo.appendChild(container);
        
        
    
    }

    posizioneExpandText();
}

fetch("http://localhost/hw1/homework_getfilms.php").then(onResponse).then(onJson);

function posizioneExpandText(){
    const container = document.querySelector('article');
    const link = document.createElement('a');
    link.classList.add("expandText");
    link.href = "#";
    link.textContent = "Expand text";
    link.addEventListener('click', handlerExpandText);
    container.appendChild(link);
}

function handlerExpandText(event){
    event.preventDefault();
    const trg = event.currentTarget;
    const cont = document.querySelector('article');
    cont.removeChild(trg);
    j += 2;
    fetch("http://localhost/hw1/homework_getfilms.php").then(onResponse).then(onJson);
}



//FUNZIONE GESTIONE LIKE

function likeHandler(event){
    fetch("http://localhost/hw1/homework_gestione.php?id_film="+event.currentTarget.dataset.id_film+"&choice=1");
    event.currentTarget.src = "images/like_full.png";
    event.currentTarget.removeEventListener('click', likeHandler);
    event.currentTarget.addEventListener('click', likeRemove);
}

function likeRemove(event){
    fetch("http://localhost/hw1/homework_gestione.php?id_film="+event.currentTarget.dataset.id_film+"&choice=2");
    event.currentTarget.src = "images/like_vuoto.png";
    event.currentTarget.removeEventListener('click', likeRemove);
    event.currentTarget.addEventListener('click', likeHandler);
}


//FUNZIONE GESTIONE COMMENTI

function commentHandler(event){
   event.currentTarget.removeEventListener('click', commentHandler);
   event.currentTarget.addEventListener('click', rimuoviCommenti);
   //risalgo dall'immagine al container ovvero il parent node
   const container = event.currentTarget.parentNode.parentNode;
   //scritta lascia un commento
   const leaveComment = document.createElement("div");
   leaveComment.classList.add("divLasciaCommento");
   leaveComment.textContent = "Lascia un commento";

   //creo il form
   const form = document.createElement("form");
   form.classList.add("commentoForm");
   form.setAttribute("method", "post");
   form.setAttribute("name", "comment_form");
   form.setAttribute("id", "comment_form");
   form.addEventListener('submit', submitCommentHandler);

   //aggiungo uno spazio per scrivere
   const textarea = document.createElement("textarea");
   textarea.classList.add("corpoCommento");
   textarea.setAttribute("name", "text");
   textarea.setAttribute("form", "comment_form");

   //submit button
   const button = document.createElement("input");
   button.setAttribute("type", "submit");
   button.setAttribute("value", "submit");
   button.classList.add("tastoPostaCommento");

   //appendo textarea e submit button al form
   form.appendChild(textarea);
   form.appendChild(button);

   container.appendChild(leaveComment);
   container.appendChild(form);
  
   fetch("http://localhost/hw1/homework_gestione.php?id_film="+
    event.currentTarget.parentNode.parentNode.dataset.id_film + "&choice=4").then(onResponse).then(onJsonCaricaAltriCommenti);


}

function rimuoviCommenti(event){
    
    for (const elem of event.currentTarget.parentNode.parentNode.querySelectorAll("div.div_commento")){
        console.log(elem);
        event.currentTarget.parentNode.parentNode.removeChild(elem);
    }
    event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode.parentNode.querySelector("#comment_form"));
    event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode.parentNode.querySelector("div.divLasciaCommento"));
    event.currentTarget.addEventListener('click', commentHandler);
}

function onJsonCaricaAltriCommenti(json){
    console.log(json);
    let post_cont;
    for (let i = 0; i < json.length; i++){
        for (const elem of document.querySelectorAll("div.post_container")){
            if (elem.dataset.id_film === json[i].id_film){
                post_cont = elem;
                break;
            }
        }
    const toAppend = document.createElement("div");
    toAppend.classList.add("div_commento");

    const divForNickAndDate = document.createElement("div");
    divForNickAndDate.classList.add("username_date");

    const username = document.createElement("div");
    username.textContent = json[i].username;

    const date = document.createElement("div");
    date.textContent = json[i].date_comment;

    const comment = document.createElement("p");
    comment.textContent = json[i].testo_commento;

    divForNickAndDate.appendChild(username);
    divForNickAndDate.appendChild(date);

    toAppend.appendChild(divForNickAndDate);
    toAppend.appendChild(comment);

    post_cont.appendChild(toAppend);
    }
    
}





function submitCommentHandler(event){
    const id_film = event.currentTarget.parentNode.dataset.id_film;
    const text = encodeURI(event.currentTarget.text.value);
    fetch("http://localhost/hw1/homework_gestione.php?id_film="+id_film+"&text_mess="+text+"&choice=3");

}


document.querySelector("div.nav_menu_container").addEventListener("click", gestioneMenuMobile);


function gestioneMenuMobile(event){
    disableScroll();
    event.currentTarget.classList.add("hidden");
    const body = document.querySelector("body");
    const schermataMenu = document.createElement("div");
    schermataMenu.classList.add("schermataMenu");

    let arr = [];
    for (let i = 0; i < 4; i++){
        arr[i] = document.createElement("a");
        arr[i].classList.add("opzioneMenu");
    }
    const chiudi = document.createElement("img");
    chiudi.classList.add("chiudi");
    chiudi.src = "images/chiudi.png";
    chiudi.addEventListener('click', chiudiMenuMobile);

    arr[0].textContent = "Profilo";
    arr[0].href = "homework_profile.php";

    arr[1].textContent = "Watchlist";
    arr[1].href = "homework_watchlist.php";

    arr[2].textContent = "Soundtrack";
    arr[2].href = "homework_soundtrack.php";

    arr[3].textContent = "Logout";
    arr[3].href = "homework_logout.php";

    schermataMenu.appendChild(chiudi);
    for (let i = 0; i < 4; i++){
        schermataMenu.appendChild(arr[i]);
    }

    body.appendChild(schermataMenu);

}

function chiudiMenuMobile(event){
    console.log(event.currentTarget.parentNode);
    document.querySelector("body").removeChild(event.currentTarget.parentNode); 
    document.querySelector("div.nav_menu_container").classList.remove("hidden");
    enableScroll();
}

function disableScroll() {
    // Salva la posizione corrente dello scorrimento
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
    // Imposta le proprietà CSS per bloccare lo scorrimento
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.documentElement.scrollTop = scrollTop;
    document.documentElement.scrollLeft = scrollLeft;
  }
  
  // Sblocca lo scorrimento della pagina
function enableScroll() {
    // Ripristina le proprietà CSS per consentire lo scorrimento
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
  }