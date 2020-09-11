var arrayAllGames = [
    {
        name: 'GTA5', description: 'Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013', img: '../assets/GTA-V.jpg', type: 'Violencia', plataform: 'PC', calification: 5,
        link: 'https://www.rockstargames.com/V/es', price: 530000, version: 5, bought: false
    },
    {
        name: 'Fornite', description: 'Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games, lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas. Fue anunciado en los Spike Video Game Awards en 2011', img: '../assets/fortnite.jpg', type: 'Disparo', plataform: 'PS4', calification: 6,
        link: 'https://www.epicgames.com/fortnite/es-ES/download', price: 120000, version: 2, bought: false
    },
    {
        name: 'Call of Duty', description: 'Call of Duty es una serie de videojuegos de disparos en primera persona, de estilo bélico, creada por Ben Chichoski, desarrollada principal e inicialmente por Infinity Ward, y distribuida por Activision.', img: '../assets/cod.jpg', type: 'Disparo', plataform: 'PS4', calification: 2,
        link: 'https://www.callofduty.com/', price: 980000, version: 8, bought: false
    },
]

function loopGames(array = arrayAllGames) {
    var wrapper = document.getElementById("loopGamesHome");
    for (let i = 0; i < array.length; i++) {
        var myHTML = `
        <div id="game_`.concat(i).concat(`" class='col-3' * ngFor='let item of allGames; let i = index' >
            <div class='card border-dark mb-3' style='max-width: 18rem;'>
                <div class='card-header'>
                    <h3>`.concat(array[i].name).concat(`</h3>
                </div>
                <img class='card-img-top' src='`.concat(array[i].img).concat(`' alt='Card image cap'>
                    <div class='card-body text-dark'>
                        <h5 class='card-title'>
                            
                </h5>
                    <p class='card-text'>
                    `.concat(array[i].description).concat(`
                    </p> 
                    <div class="row">
                        <div class="col">
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
                        </div>
                        <div class="col">
                            <button class="btn btn-block btn-primary" type="button" onClick="deleteGame(`.concat(i).concat(`)"> Eliminar </button>
                        </div>
                    </div>
            </div>
        </div>`))))))
        wrapper.innerHTML += myHTML
    }
}

$(document).on('click', '#btn_edit_game', function (param) {
    const id = param.originalEvent.srcElement.dataset.id
    $('#id_game').val(id);
    $('#title_game').val(arrayAllGames[id].name);
    $('#description_game').val(arrayAllGames[id].description);
    $('#img_game').val(arrayAllGames[id].img);
})

function editGame() {
    const ielementId = document.getElementById('id_game');
    const i = ielementId.attributes.id.ownerElement.value

    const idGame = `game_`.concat(i);
    const element_ = document.getElementById(idGame);
    const editGame = confirm('¿ Desea Editar '.concat(arrayAllGames[i].name).concat(' ?'));
    if (editGame) {
        const element = document.getElementById(`game_`.concat(i));
        arrayAllGames[i].name = element.childNodes[1].childNodes[1].childNodes[1].textContent
        arrayAllGames[i].description = element.childNodes[1].childNodes[5].childNodes[3].textContent
        arrayAllGames[i].img = element.childNodes[1].childNodes[3].src

        element.childNodes[1].childNodes[1].childNodes[1].textContent = $('#title_game').val()
        element.childNodes[1].childNodes[5].childNodes[3].textContent = $('#description_game').val()
        element.childNodes[1].childNodes[3].src = $('#img_game').val()
        $('#exampleModal').modal('hide')
    } else {
        alert('Acción Cancelada')
    }
}

function deleteGame(i) {
    const deleteGame = confirm('¿ Desea eliminar '.concat(arrayAllGames[i].name).concat(' ?'));
    if (deleteGame) {
        const idGame = `game_`.concat(i);
        const element = document.getElementById(idGame);
        element.remove();
        alert('Juego Eliminado');
    } else {
        alert('Acción Cancelada')
    }
}

function submitForm(event) {

    let menu = document.getElementById('loopGamesHome');
    while (menu.firstChild) {
        menu.removeChild(menu.firstChild);
    }
    event.preventDefault();

    console.log(event.target[0].value);//tit
    console.log(event.target[1].value);//desc
    console.log(event.target[2].value);//img


    arrayAllGames.push({
        name: event.target[0].value,
        description: event.target[1].value,
        img: '../assets/'.concat(event.target[2].value).concat('.jpg')
    });

    setTimeout(function () {
        loopGames(arrayAllGames);
    }, 300)
    $('#exampleModal1').modal('hide')
    return false;
}