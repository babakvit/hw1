document.querySelector("div.nav_menu_container").addEventListener("click", gestioneMenuMobile);


function gestioneMenuMobile(event){
    disableScroll();
    event.currentTarget.classList.add("hidden");
    const body = document.querySelector("body");
    const schermataMenu = document.createElement("div");
    schermataMenu.classList.add("schermataMenu");

    let arr = [];
    for (let i = 0; i < 5; i++){
        arr[i] = document.createElement("a");
        arr[i].classList.add("opzioneMenu");
    }
    const chiudi = document.createElement("img");
    chiudi.classList.add("chiudi");
    chiudi.src = "images/chiudi.png";
    chiudi.addEventListener('click', chiudiMenuMobile);

    arr[0].textContent = "Home";
    arr[0].href = "homework_home.php";

    arr[1].textContent = "Profilo";
    arr[1].href = "homework_profile.php";

    arr[2].textContent = "Watchlist";
    arr[2].href = "homework_watchlist.php";

    arr[3].textContent = "Soundtrack";
    arr[3].href = "homework_soundtrack.php";

    arr[4].textContent = "Logout";
    arr[4].href = "homework_logout.php";

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