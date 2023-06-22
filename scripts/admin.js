if (!adminLoaded) {
  let form = document.getElementById('entry-form');
  let entryContent = document.getElementById('entry-content');
  let newEntry = document.getElementById("new-entry");
}

function agregarItem() {
  let title = document.getElementById('title-input').value;
  let photo = document.getElementById('photo-input').files[0];
  let content = document.getElementById('content-input').value;

  let newItem = {
    title: title,
    photo: "",
    content: content,
  };

  if (photo) {
    newItem.photo = photo.name;
    guardarImagenLocal(photo);
  }

  let storedItems = JSON.parse(localStorage.getItem("items")) || [];
  storedItems.push(newItem);
  localStorage.setItem("items", JSON.stringify(storedItems));

  appendItemToList(newItem);
  clearFormFields();

}

function appendItemToList(item) {

  console.log("Agregando item a la lista:", item);
  let listaItem = document.createElement("li");
  let elementoTitulo = document.createElement("h2");
  elementoTitulo.textContent = item.title;

  let elementoImagen = document.createElement("img");
  elementoImagen.src = obtenerImagenLocal(item.photo) || elementoImagen.src;
  elementoImagen.alt = item.title;

  let elementoDescripcion = document.createElement("p");
  elementoDescripcion.textContent = item.content;

  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.id = "btn-eliminar";
  botonEliminar.addEventListener("click", function () {
    eliminarItem(item);
  });

  let botonModificar = document.createElement("button");
  botonModificar.textContent = "Modificar";
  botonModificar.id = "btn-modificar";
  botonModificar.addEventListener("click", function () {
    modificarItem(item);
  });

  listaItem.appendChild(elementoTitulo);
  listaItem.appendChild(elementoImagen);
  listaItem.appendChild(elementoDescripcion);
  listaItem.appendChild(botonEliminar);
  listaItem.appendChild(botonModificar);
  document.getElementById("entry-content").appendChild(listaItem);
}

function modificarItem(item) {
  let listItem = document.createElement("li");

  let titleInput = document.createElement("input");
  titleInput.value = item.title;
  listItem.appendChild(titleInput);

  let contentInput = document.createElement("textarea");
  contentInput.value = item.content;
  listItem.appendChild(contentInput);

  let saveButton = document.createElement("button");
  saveButton.textContent = "Guardar";
  saveButton.addEventListener("click", function () {
    let updatedTitle = titleInput.value;
    let updatedContent = contentInput.value;

    if (updatedTitle !== "" && updatedContent !== "") {
      item.title = updatedTitle;
      item.content = updatedContent;

      let storedItems = JSON.parse(localStorage.getItem("items")) || [];
      let updatedItems = storedItems.map(function (el) {
        if (
          el.title === item.title &&
          el.photo === item.photo &&
          el.content === item.content
        ) {
          return item;
        }
        return el;
      });

      localStorage.setItem("items", JSON.stringify(updatedItems));
      limpiarListaItems();
      updatedItems.forEach(function (item) {
        appendItemToList(item);
      });
    }
  });
  listItem.appendChild(saveButton);

  let cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancelar";
  cancelButton.addEventListener("click", function () {
    limpiarListaItems();
    cargarItems();
  });

  listItem.appendChild(cancelButton);

  document.getElementById("entry-content").appendChild(listItem);
}

function guardarImagenLocal(imagen) {
  let reader = new FileReader();
  reader.onload = function (event) {
    localStorage.setItem(imagen.name, event.target.result);
  };
  reader.readAsDataURL(imagen);
}

function obtenerImagenLocal(nombreImagen) {
  return localStorage.getItem(nombreImagen);
}

function clearFormFields() {
  document.getElementById("title-input").value = "";
  document.getElementById("photo-input").value = "";
  document.getElementById("content-input").value = "";
}

function eliminarItem(item) {
  let storedItems = JSON.parse(localStorage.getItem("items")) || [];
  let filteredItems = storedItems.filter(function (el) {
    return (
      el.title !== item.title ||
      el.photo !== item.photo ||
      el.content !== item.content
    );
  });

  localStorage.setItem("items", JSON.stringify(filteredItems));
  limpiarListaItems();
  filteredItems.forEach(function (item) {
    appendItemToList(item);
  });
}

function limpiarListaItems() {
  console.log("Limpiando lista de items");
  let listaItems = document.getElementById("entry-content");
  listaItems.innerHTML = "";
}

function cargarItems() {
  let storedItems = JSON.parse(localStorage.getItem("items")) || [];
  let listaItems = document.getElementById("entry-content");
  storedItems.forEach(function (item) {
    let listItem = document.createElement("li");
    let elementoTitulo = document.createElement("h2");
    elementoTitulo.textContent = item.title;
    let elementoImagen = document.createElement("img");
    elementoImagen.src = obtenerImagenLocal(item.photo) || elementoImagen.src;
    elementoImagen.alt = item.title;
    let elementoDescripcion = document.createElement("p");
    elementoDescripcion.textContent = item.content;
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function () {
      eliminarItem(item);
    });

    let botonModificar = document.createElement("button");
    botonModificar.textContent = "Modificar";
    botonModificar.addEventListener("click", function () {
      modificarItem(item);
    });

    listItem.appendChild(elementoTitulo);
    listItem.appendChild(elementoImagen);
    listItem.appendChild(elementoDescripcion);
    listItem.appendChild(botonEliminar);
    listItem.appendChild(botonModificar);
    listaItems.appendChild(listItem);
  });
}


cargarItems();

adminLoaded = true;