function dorpdown() {

    let discoverE = document.getElementById("discover-E");
    let discoverS = document.getElementById("discover-S");
    discoverE.addEventListener("mouseleave", function () {
        let dropdownContentE = document.getElementById("dropdown-content-E");
        let dropdownContentS = document.getElementById("dropdown-content-S");
        dropdownContentE.style.display = "none";
    });
}

// function openLoginModal() {
//     document.getElementById("loginModal").style.display = "block";
// }

// function closeLoginModal() {
//     document.getElementById("loginModal").style.display = "none";
// }

function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

function handleLogin(event) {
    event.preventDefault();
    
    // Obtenemos el nombre de usuario ingresado en el formulario
    const username = document.getElementById("usernameInput").value;
    
    // Actualizamos el contenido del encabezado con el nombre de usuario
    document.getElementById("username").textContent = username;
    
    // Mostramos el elemento del nombre de usuario y ocultamos el de inicio de sesión
    document.getElementById("head_login").style.display = "none";
    document.getElementById("head_username").style.display = "block";
    
    // Cerramos la ventana flotante
    closeLoginModal();
}


let map = L.map("map").setView([49.15, 14.94], 3)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([37.3767, -5.9261]).addTo(map);
L.marker([38.9168, -6.3451]).addTo(map);
L.marker([37.1740, -3.5994]).addTo(map);
L.marker([41.3820, 2.1794]).addTo(map);
L.marker([52.5145, 13.3855]).addTo(map);
L.marker([52.4004, 13.0583]).addTo(map);
L.marker([50.0884, 14.4230]).addTo(map);
L.marker([47.4977, 19.0407]).addTo(map);
L.marker([42.6986, 23.3123]).addTo(map);


function showContent(city) {
    let mainContent = document.getElementById('main-content');
    mainContent.style.backgroundImage = 'none';

    let cityContents = document.getElementsByClassName('city-content');
    for (var i = 0; i < cityContents.length; i++) {
        cityContents[i].style.display = 'none';
    }

    let selectedCityContent = document.getElementById(city);
    selectedCityContent.style.display = 'block';

    let buttonInfo = selectedCityContent.querySelector('.buttonInformation');
    let addContent = selectedCityContent.querySelector('.addContent');

    buttonInfo.addEventListener('click', function () {
        if (addContent.style.display === 'none') {
            addContent.style.display = 'block';
        } else {
            addContent.style.display = 'none';
        }
    });
}