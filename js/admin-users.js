var arrayAllUsers = [
    {
        email: 'juand.osorio@hotmail.com', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        password: '1234', rol: 'ADMIN'
    },
    {
        email: 'juand.osorio1@hotmail.com', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        password: '1234', rol: 'USER'
    },
    {
        email: 'juand.osorio2@hotmail.com', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        password: '1234', rol: 'USER'
    }
]

function loopGames(array = arrayAllUsers) {
    var wrapper = document.getElementById("tbody_Users");
    for (let i = 0; i < array.length; i++) {
        var myHTML = `
            <tr id="user_`.concat(i).concat(`">
                <th scope="row">`.concat(i).concat(`</th>
                <td>`.concat(arrayAllUsers[i].email).concat(`</td>
                <td>`.concat(arrayAllUsers[i].description).concat(`</td>
                <td>`.concat(arrayAllUsers[i].password).concat(`</td>
                <td>`.concat(arrayAllUsers[i].rol).concat(`</td>
                <td>
                    <button id="btn_edit_game"
                        data-id="`.concat(i).concat(`"
                        data-value2="some other value"
                        class="btn btn-block btn-primary" 
                        data-toggle="modal" 
                        data-target="#exampleModal" 
                        data-whatever="@mdo" 
                        type="button"> 
                            Editar 
                    </button>
                    <button type="button" class="btn btn-primary m-1" onClick="deleteGame(`.concat(i).concat(`)">Eliminar</button></td>
            </tr>
        `))))))))

        wrapper.innerHTML += myHTML
    }
}

$(document).on('click', '#btn_edit_game', function (param) {
    const id = param.originalEvent.srcElement.dataset.id
    $('#id_game').val(id);
    $('#title_game').val(arrayAllUsers[id].email);
    $('#description_game').val(arrayAllUsers[id].description);
    $('#pass_game').val(arrayAllUsers[id].password);
    $('#rol_game').val(arrayAllUsers[id].rol);
})

function editGame() {
    const ielementId = document.getElementById('id_game');  
    const i = ielementId.attributes.id.ownerElement.value

    const idGame = `user_`.concat(i);
    const element_ = document.getElementById(idGame);
    const editGame = confirm('¿ Desea Editar '.concat(arrayAllUsers[i].email).concat(' ?'));
    if (editGame) {
        debugger
        const element = document.getElementById(`user_`.concat(i));
        arrayAllUsers[i].email = element.cells[1].textContent
        arrayAllUsers[i].description = element.cells[2].textContent
        arrayAllUsers[i].password = element.cells[3].textContent 
        arrayAllUsers[i].rol = element.cells[4].textContent

        element.cells[1].textContent = $('#title_game').val()
        element.cells[2].textContent = $('#description_game').val()
        element.cells[3].textContent = $('#rol_game').val()
        element.cells[4].textContent= $('#pass_game').val()
        $('#exampleModal').modal('hide')
    } else {
        alert('Acción Cancelada')
    }
}

function deleteGame(i) {
    const deleteGame = confirm('¿ Desea eliminar '.concat(arrayAllUsers[i].email).concat(' ?'));
    if (deleteGame) {
        const idGame = `user_`.concat(i);
        const element = document.getElementById(idGame);
        element.remove();
        alert('Juego Eliminado');
    } else {
        alert('Acción Cancelada')
    }
}

function submitForm(event) {

    let menu = document.getElementById('loopUsers');
    while (menu.firstChild) {
        menu.removeChild(menu.firstChild);
    }
    event.preventDefault();

    console.log(event.target[0].value);//tit
    console.log(event.target[1].value);//desc
    console.log(event.target[2].value);//password


    arrayAllUsers.push({
        email: event.target[0].value,
        description: event.target[1].value,
        password: '../assets/'.concat(event.target[2].value).concat('.jpg')
    });

    setTimeout(function () {
        loopGames(arrayAllUsers);
    }, 300)
    $('#exampleModal1').modal('hide')
    return false;
}