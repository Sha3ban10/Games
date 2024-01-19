import { UI } from "./UI.JS";

export class GameDetails {
    constructor(id) {
        getGameDetail(id);
        
    }
}

async function getGameDetail(id) {
    $('.loading').removeClass('d-none')
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ccf63a48b1msh34d586ee3eb0ac1p120e15jsn3682dbeb55c3',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            
        }
    }
    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    const result = await response.json();
    let ui = new UI;
    ui.displayGamesDetails(result);
    $('.loading').addClass('d-none')
    $('body').css('overflow', 'visible')
    ShowGames();
};

function ShowGames() {
    $('.btn-close').click(function () {
        $('.GameDetails').addClass('d-none')
        $('.Games').removeClass('d-none')
    }
    )
}
