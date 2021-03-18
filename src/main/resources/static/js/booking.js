let movieID = localStorage.getItem("movieid");

const requestObject = {
    method : "GET",
    "content-type" : "application/json",
    redirect : "follow"
}

function bookingPage(movieID){

   fetch(`http://localhost:8080/getMovie/${movieID}`, requestObject)
            .then(response => response.json())
            .then(booking => bookMovie(booking));

}

bookingPage(movieID);


function bookMovie(booking) {

    console.log(booking);
    const bookDiv = document.querySelector('#bookDiv');

    const bookElement = document.createElement('div');
    const posterElement = document.createElement('div');
    const descElement = document.createElement('div');
    const pTitle = document.createElement('h1');
    const pReleaseYear = document.createElement('span');
    const imgPoster = document.createElement('IMG');
    const spanGenre = document.createElement('span');
    const desc = document.createElement('p');

    desc.innerText = "Lorem ipsum dauda";

    pTitle.innerText = booking.movieTitle;
    pReleaseYear.innerText = booking.releaseYear;
    spanGenre.innerText = booking.genre;

    pReleaseYear.style.paddingRight = "10px";

    imgPoster.setAttribute("src", `../images/${booking.image}`);
    imgPoster.setAttribute("width", "300");
    imgPoster.setAttribute("height", "450");

    posterElement.className = "posterDiv";
    descElement.className = "descDiv";
    spanGenre.className = "spanGenre";

    posterElement.append(imgPoster);
    bookElement.append(posterElement);
    descElement.append(pTitle);
    descElement.append(pReleaseYear);
    descElement.append(spanGenre);
    descElement.append(desc);
    bookElement.append(descElement);
    bookDiv.append(bookElement);
}