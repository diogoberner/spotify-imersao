const searchInput = document.getElementById("search-input")
const resultPlaylists = document.getElementById("result-playlists")
const resultArtist = document.getElementById("result-artist")
const gridContainer = document.querySelector(".grid-container")

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayArtist(result))
}

function displayArtist(result) {

    let artistCard = ""
    if (result.length > 0) {
        for (const artist of result) {
            artistCard += `
            <div class="artist-card">
                        <div class="card-img">
                            <img src="${artist.urlImg}" class="artist-img" id="artist-img">
                            <div class="play">
                                <span class="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div class="card-text">
                            <a href="" class="vst" title="${artist.name}"></a>
                            <span class="artist-name" id="artist-name">${artist.name}</span>
                            <span class="artist-category">${artist.genre}</span>
                        </div>
                    </div>
            `

            gridContainer.innerHTML = artistCard
            resultPlaylists.classList.add("hidden")
            resultArtist.classList.remove("hidden")
        }
    }

}

searchInput.addEventListener("input", (e) => {
    e.preventDefault()

    const searchTerm = searchInput.value.trim().toLowerCase()

    if (searchTerm === "") {
        resultPlaylists.classList.remove("hidden")
        resultArtist.classList.add("hidden")
        return
    }

    requestApi(searchTerm)

})