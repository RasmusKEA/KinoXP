let movieID = localStorage.getItem("movieid");
let userid = localStorage.getItem("userid");

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

let bookATicket = document.createElement('BUTTON');

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
    const hallTag = document.createElement('p')


    desc.innerText = "Lorem ipsum dauda";
    pTitle.innerText = booking.movieTitle;
    pReleaseYear.innerText = booking.releaseYear;
    spanGenre.innerText = booking.genre;
    hallTag.innerText = booking.hall;
    bookATicket.innerHTML = "Book a ticket";
    bookATicket.setAttribute("id", booking.id);

    pReleaseYear.style.paddingRight = "10px";

    imgPoster.setAttribute("src", `${booking.image}`);
    imgPoster.setAttribute("width", "300");
    imgPoster.setAttribute("height", "450");

    bookATicket.className = "btn btn-outline-success my-2 my-sm-0 loginBtn bookBtn";
    posterElement.className = "posterDiv";
    descElement.className = "descDiv";
    spanGenre.className = "spanGenre";

    posterElement.append(imgPoster);
    bookElement.append(posterElement);

    descElement.append(pTitle);
    descElement.append(pReleaseYear);
    descElement.append(spanGenre);
    descElement.append(desc);
    descElement.append(hallTag);
    descElement.append(bookATicket);

    bookElement.append(descElement);
    bookDiv.append(bookElement);

}


bookATicket.onclick = function (){
    //lav noget der tjekker om denne film er på brugerens liste inden, sådan at man kan disable knappen

    fetch(`http://localhost:8080/getUserById/${userid}`, requestObject)
        .then(response => response.json())
        .then(user => postman(user));

    function postman(user){
        let bmUpdate;
        if(user.bookedMovies === 'null' || user.bookedMovies === null){
            bmUpdate = `${movieID}, `
        }else{
            bmUpdate = `${user.bookedMovies}, ${movieID}`;
        }


        let newUser = {
            "id" : `${userid}`,
            "firstname" : `${user.firstname}`,
            "lastname" : `${user.lastname}`,
            "username" : `${user.username}`,
            "password" : `${user.password}`,
            "bookedMovies" : bmUpdate
        };

        let body = JSON.stringify(newUser);
        const URL = "http://localhost:8080/createUser";

        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: body
        };

        if(user.bookedMovies === null || user.bookedMovies === "null"){
            fetch(URL, requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log("success", data)
                })
                .catch((error) => {
                    console.log("Error:", error)
                });

        }else{
            let movieArr = user.bookedMovies.trim().split(",");
            if(movieArr.includes(user.bookedMovies)){
                fetch(URL, requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log("success", data)
                    })
                    .catch((error) => {
                        console.log("Error:", error)
                    });
            }else{
                window.alert("er der allerede lak shu hvor meget vil du se")
            }
        }


    }





}