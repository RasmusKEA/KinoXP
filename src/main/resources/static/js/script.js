let nowShowing = document.getElementById("nowShowing");
let comingSoon = document.getElementById("comingSoon");
document.getElementById("nowShowing").disabled = true;

const requestObject = {
  method : "GET",
  "content-type" : "application/json",
  redirect : "follow"
}

function fetchMovies() {
  fetch('http://localhost:8080/getAllMovies', requestObject)
      .then(response => response.json())
      .then(movies => showMoviesShowing(movies));
}

fetchMovies();

function showMoviesShowing(movies){
  const movieDiv = document.querySelector('#movieRow');

  movies.forEach(movie => {
    const movieElement = document.createElement('div');
    const pTagTitle = document.createElement('p');
    const pTagReleaseYear = document.createElement('span');
    const imgTagPoster = document.createElement("IMG");
    const genreTag = document.createElement('span');
    const bookBtn = document.createElement("BUTTON");

    pTagTitle.innerText = movie.movieTitle;
    pTagReleaseYear.innerText = movie.releaseYear;
    genreTag.innerText = movie.genre;
    bookBtn.innerHTML = "Book a ticket";

    //Måder at få fat i id på den film man gerne vil booke
    bookBtn.setAttribute("value", movie.id)
    bookBtn.id = movie.id;

    imgTagPoster.setAttribute("src", `../images/${movie.image}`);
    imgTagPoster.setAttribute("width", "100");
    imgTagPoster.setAttribute("height", "150");
    imgTagPoster.style.paddingTop = "5px";

    movieElement.className = "movieElement";
    genreTag.className = "genreTag";
    pTagReleaseYear.className = "releaseYear";
    bookBtn.className = "btn btn-outline-success my-2 my-sm-0 loginBtn bookBtn";

    movieElement.append(imgTagPoster);
    movieElement.append(pTagReleaseYear);
    movieElement.append(genreTag);
    movieElement.append(pTagTitle);
    movieElement.append(bookBtn);
    movieDiv.append(movieElement);

    //Testing af id-retrieval
    bookBtn.onclick = function (){
      location.href = '/booking';
      //bookingPage(movie.id);
      localStorage.setItem("movieid", movie.id);
    }

  });
}

nowShowing.onclick = function (){
  document.getElementById("nowShowing").disabled = true;
  document.getElementById("comingSoon").disabled = false;
  fetchMovies();
}

comingSoon.onclick = function (){
  document.getElementById("nowShowing").disabled = false;
  document.getElementById("comingSoon").disabled = true;
  document.querySelector('#movieRow').innerHTML = "";
}



