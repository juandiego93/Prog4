var arrayAllGames = [
    {
        name: 'GTA5', description: 'Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013', img: 'assets/GTA-V.jpg', type: 'Violencia', plataform: 'PC', calification: 5,
        link: 'https://www.rockstargames.com/V/es', price: 530000, version: 5, bought: false
    },
    {
        name: 'Fornite', description: 'Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games, lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas. Fue anunciado en los Spike Video Game Awards en 2011', img: 'assets/fortnite.jpg', type: 'Disparo', plataform: 'PS4', calification: 6,
        link: 'https://www.epicgames.com/fortnite/es-ES/download', price: 120000, version: 2, bought: false
    },
    {
        name: 'Call of Duty', description: 'Call of Duty es una serie de videojuegos de disparos en primera persona, de estilo bélico, creada por Ben Chichoski, desarrollada principal e inicialmente por Infinity Ward, y distribuida por Activision.', img: 'assets/cod.jpg', type: 'Disparo', plataform: 'PS4', calification: 2,
        link: 'https://www.callofduty.com/', price: 980000, version: 8, bought: false
    },
    {
        name: 'Hitman', description: 'Hitman es una serie de videojuegos de sigilo disponible en la mayoría de los formatos modernos. La trama de los videojuegos gira en torno a un hombre llamado Agente 47, que es el producto de experimentos de mejoras genéticas y creación de superhombres, especialmente diseñado para asesinar cuando se lo contrata.', img: 'assets/hitman.jpg', type: 'Estrategia', plataform: 'PC', calification: 4,
        link: 'https://www.callofduty.com/', price: 150000, version: 2, bought: false
    },
    {
        name: 'Tony Hawks', description: 'Tony Hawk es una serie de videojuegos de deportes y aventura extrema avalado por el skater profesional Tony Hawk y publicado por Activision. La serie fue desarrollada principalmente para consolas domésticas por Neversoft, y para dispositivos móviles por Vicarious Visions', img: 'assets/th.jpg', type: 'Deportes Extremos', plataform: 'Xbox', calification: 4,
        link: 'https://www.epicgames.com/store/es-ES/product/tony-hawks-pro-skater-1-and-2/deluxe-edition', price: 909000, version: 3, bought: false
    },
    {
        name: 'Agent', description: 'Agent es un videojuego actualmente en desarrollo por el estudio británico Rockstar North exclusivamente para PlayStation 3.', img: 'assets/agent.jpg', type: 'Violencia', plataform: 'PS3', calification: 5,
        link: 'https://www.rockstargames.com/es/games/agent', price: 930000, version: 1, bought: false
    },
    {
        name: 'Minecraft', description: 'Minecraft es un videojuego de construcción, de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson, ​ y posteriormente desarrollado por su empresa, Mojang AB.', img: 'assets/mine.jpeg', type: 'Espacio', plataform: 'PC', calification: 5,
        link: 'https://www.minecraft.net/es-es', price: 930000, version: 1, bought: false
    },
    {
        name: 'World of Warcraft', description: 'World of Warcraft es un videojuego de rol multijugador masivo en línea desarrollado por Blizzard Entertainment. Es el cuarto juego lanzado establecido en el universo fantástico de Warcraft, el cual fue introducido por primera vez por Warcraft: Orcs & Humans en 1994.', img: 'assets/wow.jpg', type: 'Espacio', plataform: 'PC', calification: 5,
        link: 'https://worldofwarcraft.com/es-es/', price: 930000, version: 1, bought: false
    },
    {
        name: 'Dota 2', description: 'Dota 2 es un videojuego perteneciente al género de Arena de batalla en línea ARTS, también conocido como MOBA, lanzado el 9 de julio del año 2013. El juego fue desarrollado por la empresa Valve Corporation.', img: 'assets/d2.jpg', type: 'Espacio', plataform: 'PC', calification: 5,
        link: 'https://es.dota2.com/', price: 930000, version: 1, bought: false
    },
    {
        name: 'DOOM', description: 'Doom es un videojuego de disparos en primera persona desarrollado por id Software y publicado por Bethesda Softworks. Es el cuarto título de la serie principal y la primera gran entrega desde Doom 3 en 2004', img: 'assets/do.jpeg', type: 'Espacio', plataform: 'PC', calification: 5,
        link: 'https://bethesda.net/es/game/doom', price: 930000, version: 1, bought: false
    },
    {
        name: 'The last of Us 2', description: 'The Last of Us Part II es un videojuego de acción-aventura y horror de supervivencia desarrollado por Naughty Dog, publicado por Sony en exclusiva para la PlayStation 4 el 19 de junio de 2020. ​', img: 'assets/ou.jpg', type: 'Espacio', plataform: 'PC', calification: 5,
        link: 'https://www.thelastofus.playstation.com/', price: 930000, version: 1, bought: false
    },
    {
        name: 'Cyberpunk', description: 'Cyberpunk 2077 es un futuro videojuego desarrollado y publicado por CD Projekt, que se lanzará para Microsoft Windows, PlayStation 4 y Xbox One el 19 de noviembre de 2020, y posteriormente en PlayStation 5, Xbox Series X y Google Stadia', img: 'assets/cp.jpg', type: 'Espacio', plataform: 'PC', calification: 5,
        link: 'https://www.cyberpunk.net/co/es/', price: 930000, version: 1, bought: true
    },
]

function loopGames() {
    console.log(arrayAllGames.length);
    var wrapper = document.getElementById("loopGamesHome");
    for (let i = 0; i < arrayAllGames.length; i++) {
        var myHTML = `
        <div class='col-3' * ngFor='let item of allGames; let i = index' >
            <div class='card border-dark mb-3' style='max-width: 18rem;'>
                <div class='card-header'>
                    <h3>`.concat(arrayAllGames[i].name).concat(`</h3>
                </div>
                <img class='card-img-top' src='`.concat(arrayAllGames[i].img).concat(`' alt='Card image cap'>
                    <div class='card-body text-dark'>
                        <h5 class='card-title'>
                            <a href='`.concat(arrayAllGames[i].link).concat(`' target='_blank'>Comprar aquí</a>
                </h5>
                    <p class='card-text'>
                    `.concat(arrayAllGames[i].description).concat(`
                    </p>
            </div>
        </div>`))));
        wrapper.innerHTML += myHTML
    }
}