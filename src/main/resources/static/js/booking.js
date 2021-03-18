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
    const pTitle = document.createElement('p');
    const pReleaseYear = document.createElement('p');
    const imgPoster = document.createElement('IMG');
    const spanGenre = document.createElement('span');

    pTitle.innerText = booking.movieTitle;
    pReleaseYear.innerText = booking.releaseYear;
    spanGenre.innerText = booking.genre;

    imgPoster.setAttribute("src", `../images/${booking.image}`);
    imgPoster.setAttribute("width", "100");
    imgPoster.setAttribute("height", "150");

    bookElement.append(pTitle);
    bookElement.append(pReleaseYear);
    bookElement.append(imgPoster);
    bookElement.append(spanGenre);
    bookDiv.append(bookElement);
}