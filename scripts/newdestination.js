function cargarItemsEnPagina() {
    let storedItems = JSON.parse(localStorage.getItem("items")) || [];
    let listaItems = document.getElementById("new-destination-content");

    storedItems.forEach(function (item) {
        let listItem = document.createElement("li");
        let tituloElement = document.createElement("h2");
        tituloElement.textContent = item.title;

        let imagenElement = document.createElement("img");
        imagenElement.src = obtenerImagenLocal(item.photo) || "";
        imagenElement.alt = item.title;

        let descripcionElement = document.createElement("p");
        descripcionElement.textContent = item.content;
        listItem.appendChild(tituloElement);
        listItem.appendChild(imagenElement);
        listItem.appendChild(descripcionElement);
        listaItems.appendChild(listItem);
    });
}

cargarItemsEnPagina();