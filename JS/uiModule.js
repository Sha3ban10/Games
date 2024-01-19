export default class Ui {
    displayGames(api) {
        var box = ``;
        for (let i = 0; i < api.length; i++) {
            box += `
        <div class="col-md-3 ">
                        <div id="${api[i].id}" class="card h-100 bg-transparent text-white">
                            <img src="${api[i].thumbnail}" class="card-img-top p-2 rounded-4" alt="...">
                            <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center pb-2">
                                    <h5 class="card-title h6 small">${api[i].title}</h5>
                                    <span class="badge p-2 bg-info">free</span>
                                </div>
                              <p class="card-text text-center">${api[i].short_description}</p>
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <span class="badge badge-color bg-dark">${api[i].genre}</span>
                                <span class="badge badge-color bg-dark">${api[i].platform}</span>
                            </div>
                          </div>
                    </div>
        `
        }
        $('.GameData').html(`${box}`);
    }
    displayGamesDetails(result) {
        let box = `
            <div class="container p-4">
            <div class="d-flex justify-content-between fs-4 ">
                <p>Details Game</p>
                <i class="btn-close btn-close-white fs-6"></i>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <img src="${result.thumbnail}" alt="" style="width: 100%;">
                </div>
                <div class="col-md-8">
                    <h3>Title: <span> ${result.title}</span></h3>
                    <p>Category: <span class="badge badge-color bg-info text-dark"> ${result.genre}</span></p>
                    <p>Platform: <span class="badge badge-color bg-info text-dark"> ${result.platform}</span></p>
                    <p>Status: <span class="badge badge-color bg-info text-dark"> ${result.status}</span></p>
                    <p class="small">${result.description}</p>
                    <a class="btn btn-outline-danger" target="_blank" href="${result.game_url}">Show Game</a>
                </div>
            </div>
        </div>
            `
        $('.GameDetails').html(box)
    }
};





