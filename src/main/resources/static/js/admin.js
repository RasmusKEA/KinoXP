const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

const modal1 = document.getElementById("editModal");
const btn1 = document.getElementById("editBtn");
const span1 = document.getElementsByClassName("close1")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function (){
    modal.style.display = "block";
}

span.onclick = function (){
    modal.style.display = "none";
}

window.onclick = function (event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}

btn1.onclick = function() {
    modal.style.display = "block";
    const movieSelect = document.getElementById("movies");
    console.log(movieSelect.value);

    
}

span1.onclick = function (){
    modal.style.display = "block";
}

span1.onclick = function (){
    modal.style.display = "none";
}

window.onclick = function (event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}
function createMovie() {


    const movietitle = document.querySelector('#movietitle');
    const genre = document.querySelector('#genre');
    const releaseyear = document.querySelector('#releaseyear');
    const image = document.querySelector('#image');

    let newMovie = {
        "movieTitle": `${movietitle.value}`,
        "releaseYear": `${releaseyear.value}`,
        "genre": `${genre.value}`,
        "image": `${image.value}`
    };

    const minurl = "http://localhost:8080/deleteMovie"

    let body = JSON.stringify(newMovie);

    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: body
    };


    fetch(minurl, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log("success", data)
        })
        .catch((error) => {
            console.log("Error:", error)
        });

    location.reload();
}

const requestObject = {
    method : "GET",
    "content-type" : "application/json",
    redirect : "follow"
}

fetch(`http://localhost:8080/getAllMovies`, requestObject)
    .then(response => response.json())
    .then(movie => populateSelect(movie));

function populateSelect(movie){
    const movieSelect = document.getElementById("movies");
    movie.forEach(movie => {
        const option = document.createElement('option');

        option.setAttribute("id", movie.id);
        option.innerText = movie.movieTitle;
        option.value = movie.movieTitle;

        movieSelect.append(option);
    })
}


