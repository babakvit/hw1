const form = document.forms['request_spotify_form'];
form.addEventListener('submit', requestHandler);

function requestHandler(event){
    event.preventDefault();
    const cerca = encodeURI(form.cerca_sound.value);
    fetch("http://localhost/hw1/get_info_spotify.php?cerca="+cerca).then(onResponse).then(onJson);
}

function onResponse(response){
    return response.json();
}

function onJson(json){
    console.log(json);
    const container = document.querySelector("div.container_sounds");
    container.innerHTML = '';
    const MAX_ELEM = 10;
    const array = json.playlists.items;
    //creiamo 10 elementi messi in 2 righe
    for (let i = 0; i < MAX_ELEM; i++){
        const img = document.createElement('img');
        img.classList.add("playlist_img");
        img.src = array[i].images[0].url;

        const text = document.createElement('div');
        text.classList.add("playlist_name");
        text.textContent = array[i].name;

        const main = document.createElement("div");
        main.classList.add("playlist");
        main.dataset.url = array[i].external_urls.spotify;
        main.addEventListener('click', goToLinkSpotify);

        main.appendChild(img);
        main.appendChild(text);
        container.appendChild(main);
    }
}

function goToLinkSpotify(event){
    window.open(event.currentTarget.dataset.url, '_blank');
}