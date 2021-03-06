// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}


// Get the modal
const modal1 = document.getElementById("editModal");
// Get the button that opens the modal
const btn1 = document.getElementById("editBtn");

// Get the <span> element that closes the modal
const close = document.getElementsByClassName("close-modal")[0];


// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal1.style.display = "none";
}

function allBookings(){
    location.href = "/allbookings"
}

function getSingleMovie(idMovie){
    const requestObject = {
        method : "GET",
        "content-type" : "application/json",
        redirect : "follow"
    }

    fetch(`http://localhost:8080/getMovie/${idMovie}`, requestObject)
        .then(response => response.json())
        .then(booking => populateEditModal(booking));
}

function populateEditModal(movie){
    const title = document.getElementById("movietitleEdit");
    const genre = document.getElementById("genreEdit");
    const hall = document.getElementById("hallEdit")
    const releaseYear = document.getElementById("releaseyearEdit");
    const img = document.getElementById("imageEdit");
    const timeslot = document.getElementById("timeslotEdit");

    timeslot.value = movie.timeslot;
    title.value = movie.movieTitle;
    genre.value = movie.genre;
    hall.value = movie.hall;
    releaseYear.value = movie.releaseYear;
    img.value = movie.image;
}

// When the user clicks on the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
    const dropDownData = document.getElementById("movies");
    getSingleMovie(dropDownData.value);
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal || event.target === modal1) {
        modal.style.display = "none";
        modal1.style.display = "none";
    }
}

function createMovie() {

    const requestObject = {
        method : "GET",
        "content-type" : "application/json",
        redirect : "follow"
    }

    fetch(`http://localhost:8080/getAllMovies`, requestObject)
        .then(response => response.json())
        .then(movies => verifyTimeslot(movies));


}

function verifyTimeslot(movies){
    const movietitle = document.querySelector('#movietitle');
    const genre = document.querySelector('#genre');
    const releaseyear = document.querySelector('#releaseyear');
    const image = document.querySelector('#image');
    const hall = document.querySelector('#hall');
    const timeslot = document.querySelector('#timeslot');

    let newMovie = {
        "movieTitle": `${movietitle.value}`,
        "releaseYear": `${releaseyear.value}`,
        "genre": `${genre.value}`,
        "image": `${image.value}`,
        "image": `${image.value}`,
        "hall" : `${hall.value}`,
        "timeslot" : `${timeslot.value}`
    };

    const minurl = "http://localhost:8080/createMovie"

    let body = JSON.stringify(newMovie);

    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: body
    };

    let isMoviePlaying = false;

    fetch(minurl, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log("success", data)
        })
        .catch((error) => {
            console.log("Error:", error)
        });
    movies.forEach(movie =>{
        if(movie.hall === hall.value && movie.timeslot === timeslot.value){
            window.alert(`${movie.movieTitle} is already playing in this hall at that time`);
            isMoviePlaying = true;
        }
    })

    if(isMoviePlaying === false){
        if(hall.value !== "Select hall" && timeslot.value !== "Select timeslot" ){
            fetch(minurl, requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log("success", data)
                })
                .catch((error) => {
                    console.log("Error:", error)
                });

            location.reload();
            window.alert(`${movietitle.value} has been scheduled`);
            location.reload();
        }else{
            window.alert(`Please select hall and/or timeslot`);
        }

    }
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
        option.value = movie.id;
        console.log(movie.id);

        movieSelect.append(option);
    })
}

function editMovie(){
    const movieId = document.getElementById('movies');
    const movietitleEdit = document.querySelector('#movietitleEdit');
    const genreEdit = document.querySelector('#genreEdit');
    const hallEdit = document.querySelector('#hallEdit');
    const releaseyearEdit = document.querySelector('#releaseyearEdit');
    const imageEdit = document.querySelector('#imageEdit');
    const timeslotEdit = document.querySelector("#timeslotEdit");


    let newMovie = {
        "id": `${movieId.value}`,
        "movieTitle": `${movietitleEdit.value}`,
        "releaseYear": `${releaseyearEdit.value}`,
        "hall": `${hallEdit.value}`,
        "timeslot" : `${timeslotEdit.value}`,
        "genre": `${genreEdit.value}`,
        "image": `${imageEdit.value}`
    };

    const minurl = "http://localhost:8080/createMovie/"

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

function deleteMovie(){
    const movieId = document.getElementById('movies');

    let movieToDelete = {
        "id": `${movieId.value}`,
    };

    const minurl = `http://localhost:8080/deleteMovie/${movieId.value}`

    let body = JSON.stringify(movieToDelete);


    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: "DELETE",
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



