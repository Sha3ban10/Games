import { GameDetails } from "./GameDetails.js";
import UI from "./uiModule.js";


export class Games {
    constructor() {
        getGames("shooter");
        $('a.nav-link[href="#"]').click(function (e) {
            $('a.nav-link').removeClass("active")
            $(this).addClass("active");
            getGames($(e.target).html().toLowerCase())
        }
        )

    }
}


async function getGames(category) {
    $('.loading').removeClass('d-none')
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ccf63a48b1msh34d586ee3eb0ac1p120e15jsn3682dbeb55c3',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    }
    const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
    const data = await res.json();
    let ui = new UI();
    ui.displayGames(data)
    $('.loading').addClass('d-none')
    $('body').css('overflow', 'visible')
    ShowDeatails();
};

function ShowDeatails() {
    $('.card').click(function () {
        $('.loading').removeClass('d-none')
        $('.Games').addClass('d-none')
        $('.GameDetails').removeClass('d-none')
        const id = $(this).attr("id")
        new GameDetails(id);
    }
    )
}
