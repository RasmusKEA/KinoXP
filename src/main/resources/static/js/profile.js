let userid = localStorage.getItem("userid");

const requestObject = {
    method : "GET",
    "content-type" : "application/json",
    redirect : "follow"
}

fetch(`http://localhost:8080//bookings/${userid}`, requestObject)
    .then(response => response.json())
    .then(movie => profileView(movie));

function loadProfile(user){


    moviearr.forEach(movie => {

        fetch(`http://localhost:8080/getMovie/${movie}`, requestObject)
            .then(response => response.json())
            .then(booking => {
                if(booking.movieTitle === "" || booking.movieTitle === undefined){
                    return;
                }else{
                    profileView(booking);
                }
            });
    } )
}

function profileView(movie) {

    const tableDiv = document.querySelector("#tablebody");

    movie.forEach(movie => {
        const tableHead = document.createElement("th");
        const tableRow = document.createElement("tr");
        const tableData = document.createElement("td");
        const tableData1 = document.createElement("td");
        const tableData2 = document.createElement("td");
        const deleteButton = document.createElement("button");
        const editButton = document.createElement("button");

        tableHead.innerText = movie.movieTitle;
        tableData.innerText = movie.movieHall;
        tableData1.innerText = movie.movieTimeslot;

        deleteButton.className = "btn btn-outline-success my-2 my-sm-0 loginBtn deleteBtn";
        editButton.className = "btn btn-outline-success my-2 my-sm-0 loginBtn editBtn";

        deleteButton.innerHTML = "Delete";
        editButton.innerHTML = "Edit";

        deleteButton.setAttribute("id", movie.id); //skal være booking id som bliver slettet
        editButton.setAttribute("id", movie.id);

        tableData2.append(editButton);
        tableData2.append(deleteButton);
        tableRow.append(tableHead);
        tableRow.append(tableData);
        tableRow.append(tableData1);
        tableRow.append(tableData2);
        tableDiv.append(tableRow);

        deleteButton.onclick = function(){

                let movieIDdelete = deleteButton.id;

                let newUser = {
                    "id" : `${movieIDdelete}`
                };

                let body = JSON.stringify(newUser);
                const URL = `http://localhost:8080/deleteBooking/${movieIDdelete}`;

                const requestOptions = {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: "DELETE",
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
                location.reload();

            }
    })
}


