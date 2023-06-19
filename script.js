function dorpdown() {

    let discoverE = document.getElementById("discover-E");
    let discoverS = document.getElementById("discover-S");
    discoverE.addEventListener("mouseleave", function () {
        let dropdownContentE = document.getElementById("dropdown-content-E");
        let dropdownContentS = document.getElementById("dropdown-content-S");
        dropdownContentE.style.display = "none";
    });
}

function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("usernameInput").value;

    document.getElementById("username").textContent = username;
    document.getElementById("head_login").style.display = "none";
    document.getElementById("head_username").style.display = "block";

    closeLoginModal();
}


let map = L.map("map").setView([49.15, 14.94], 3)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([37.3767, -5.9261]).addTo(map).bindPopup("Sevilla");
L.marker([38.9168, -6.3451]).addTo(map).bindPopup("Mérida");
L.marker([37.1740, -3.5994]).addTo(map).bindPopup("Granada");
L.marker([41.3820, 2.1794]).addTo(map).bindPopup("Barcelona");
L.marker([52.5145, 13.3855]).addTo(map).bindPopup("Berlín");
L.marker([52.4004, 13.0583]).addTo(map).bindPopup("Postdam");
L.marker([50.0884, 14.4230]).addTo(map).bindPopup("Praga");
L.marker([47.4977, 19.0407]).addTo(map).bindPopup("Budapest");
L.marker([42.6986, 23.3123]).addTo(map).bindPopup("Sofía");


function showContent(city) {
    let mainContent = document.getElementById('main-content');
    mainContent.style.backgroundImage = 'none';

    let cityContents = document.getElementsByClassName('city-content');
    for (let i = 0; i < cityContents.length; i++) {
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
