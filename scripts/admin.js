const form = document.getElementById('entry-form');
const entryContent = document.getElementById('entry-content');
const newEntry = document.getElementById("new-entry");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title-input').value;
    const content = document.getElementById('content-input').value;
    const photo = document.getElementById('photo-input').files[0];

    const reader = new FileReader();
    reader.onload = function (e) {
        const photoURL = e.target.result;

        const entryHTML = `
      <div class="post">
        <h3>${title}</h3>
        <img src="${photoURL}" alt="Foto" width="100%">
        <p>${content}</p>
        <div class="post-buttons">
          <button class="edit-button">Editar</button>
          <button class="delete-button">Eliminar</button>
          <button class="send-button">Enviar</button>
        </div>
      </div>
    `;

        entryContent.insertAdjacentHTML('beforeend', entryHTML);
        form.reset();
    };

    if (photo) {
        reader.readAsDataURL(photo);
    }

    form.style.display = 'none';
    newEntry.style.display = 'none';
});

entryContent.addEventListener('click', function (event) {
    const target = event.target;

    if (target.classList.contains('edit-button')) {
        const post = target.closest('.post');
        const titleElement = post.querySelector('h3');
        const contentElement = post.querySelector('p');

        const editFormHTML = `
        <form class="edit-form">
          <input type="text" class="edit-title-input" value="${titleElement.textContent}">
          <textarea class="edit-content-input">${contentElement.textContent}</textarea>
          <button type="submit" class="save-button">Guardar</button>
        </form>
      `;

        const editForm = post.querySelector('.edit-form');
        if (editForm) {
            return;
        }

        post.insertAdjacentHTML('beforeend', editFormHTML);

        const saveButton = post.querySelector('.save-button');
        saveButton.addEventListener('click', function (event) {
            event.preventDefault();

            const editTitleInput = post.querySelector('.edit-title-input');
            const editContentInput = post.querySelector('.edit-content-input');

            titleElement.textContent = editTitleInput.value;
            contentElement.textContent = editContentInput.value;

            editForm.style.display = 'none';
        });
    } else if (target.classList.contains('delete-button')) {
        const post = target.closest('.post');
        post.remove();

        console.log('Eliminar');

    }
});

