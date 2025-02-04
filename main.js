const searchInput = document.getElementById("search-input")
const resultPlaylists = document.getElementById("result-playlists")
const resultArtist = document.getElementById("result-artist")

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayArtist(result))
}

function displayArtist(result) {

    if (result.length > 0) {
        for (const artist of result) {

        }
    }

}

searchInput.addEventListener("input", (e) => {
    e.preventDefault()

    const searchTerm = searchInput.value.toLowerCase()

    if (searchTerm === "") {
        resultPlaylists.classList.remove("hidden")
        resultArtist.classList.add("hidden")
        return
    }

    if (searchTerm !== "") {
        requestApi(searchTerm)
    }
})