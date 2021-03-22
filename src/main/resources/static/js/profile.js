let userid = localStorage.getItem("userid");

const requestObject = {
    method : "GET",
    "content-type" : "application/json",
    redirect : "follow"
}

fetch(`http://localhost:8080/getUserById/${userid}`, requestObject)
    .then(response => response.json())
    .then(user => loadProfile(user));

function loadProfile(user){

    console.log(user.bookedMovies);
    let moviearr = user.bookedMovies.trim().split(",");

    moviearr.forEach(movie => {

        fetch(`http://localhost:8080/getMovie/${movie}`, requestObject)
            .then(response => response.json())
            .then(booking => profileView(booking));


    } )


}

function profileView(movie) {

    const tableDiv = document.querySelector("#tablebody");

    const tableHead = document.createElement("th");
    const tableRow = document.createElement("tr");
    const tableData = document.createElement("td");
    const tableData1 = document.createElement("td");

    tableHead.innerText = movie.movieTitle;
    tableData.innerText = movie.genre;
    tableData1.innerText = movie.releaseYear;

    tableRow.append(tableHead);
    tableRow.append(tableData);
    tableRow.append(tableData1);
    tableDiv.append(tableRow);




}