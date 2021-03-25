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
    const date = document.createElement("INPUT");
    const timeslot = document.createElement('p');

    timeslot.innerText = ` ${booking.timeslot}`;

    date.setAttribute("type", "date");
    date.id = "dateElm";
    desc.innerText = "Lorem ipsum dauda";
    pTitle.innerText = booking.movieTitle;
    pTitle.id = "movieTitleID"
    pReleaseYear.innerText = booking.releaseYear;
    spanGenre.innerText = booking.genre;
    hallTag.innerText = `${booking.hall}`;
    bookATicket.innerHTML = "Book a ticket";
    bookATicket.setAttribute("id", booking.id);

    hallTag.id = "hallTag";
    timeslot.id = "timeslot";


    pReleaseYear.style.paddingRight = "10px";

    imgPoster.setAttribute("src", `${booking.image}`);
    imgPoster.setAttribute("width", "300");
    imgPoster.setAttribute("height", "450");

    date.className = "inputDate";
    bookATicket.className = "btn btn-outline-success my-2 my-sm-0 loginBtn bookingBtn";
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
    descElement.append(timeslot);
    descElement.append(date);
    descElement.append(bookATicket);

    bookElement.append(descElement);
    bookDiv.append(bookElement);

}


bookATicket.onclick = function (){
    //lav noget der tjekker om denne film er på brugerens liste inden, sådan at man kan disable knappen

    if(document.getElementById("dateElm").value === "" || document.getElementById("dateElm").value === null){
        window.alert("Please select a date");
    }else{
        let newBooking = {
            "userid" : `${userid}`,
            "date" : `${document.getElementById("dateElm").value}`,
            "movieid" : `${movieID}`,
            "movieTitle" : `${document.getElementById("movieTitleID").innerHTML}`,
            "movieHall" : `${document.getElementById("hallTag").innerHTML}`,
            "movieTimeslot" : `${document.getElementById("timeslot").innerHTML}`
        };

        let body = JSON.stringify(newBooking);
        const URL = "http://localhost:8080/newBooking";

        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: body
        };

        fetch(URL, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("success", data)
            })
            .catch((error) => {
                console.log("Error:", error)
            });
    }
}