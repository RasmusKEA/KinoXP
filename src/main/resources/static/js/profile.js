let userid = localStorage.getItem("userid");
let idToEdit;

const requestObject = {
    method : "GET",
    "content-type" : "application/json",
    redirect : "follow"
}

fetch(`http://localhost:8080/bookings/${userid}`, requestObject)
    .then(response => response.json())
    .then(movie => profileView(movie));

function profileView(movie) {

    const tableDiv = document.querySelector("#tablebody");

    movie.forEach(movie => {
        const tableHead = document.createElement("th");
        const tableRow = document.createElement("tr");
        const tableData = document.createElement("td");
        const tableData1 = document.createElement("td");
        const tableData2 = document.createElement("td");
        const tableData3 = document.createElement("td");
        const deleteButton = document.createElement("button");
        const editButton = document.createElement("button");

        tableHead.innerText = movie.movieTitle;
        tableData.innerText = movie.movieHall;
        tableData1.innerText = movie.movieTimeslot;
        tableData3.innerText = movie.date;

        deleteButton.className = "btn btn-outline-success my-2 my-sm-0 loginBtn deleteBtn";
        editButton.className = "btn btn-outline-success my-2 my-sm-0 loginBtn editBtn";

        deleteButton.innerHTML = "Delete";
        editButton.innerHTML = "Edit";

        editButton.id = movie.id;

        deleteButton.setAttribute("id", movie.id); //skal være booking id som bliver slettet
        editButton.setAttribute("id", movie.id);

        tableData2.append(editButton);
        tableData2.append(deleteButton);
        tableRow.append(tableHead);
        tableRow.append(tableData);
        tableRow.append(tableData1);
        tableRow.append(tableData3);
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
                window.alert("You are about to delete your booking")
                location.reload();
            }

        let modal = document.getElementById("myModal");
        let span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        editButton.onclick = function() {
            modal.style.display = "block";
            idToEdit = editButton.id;
            console.log(idToEdit);
            let date = document.getElementById("dateEdit");
            date.value = movie.date;

            let editSubmitBtn = document.getElementById("editSubmitBtn");
            editSubmitBtn.onclick = function editSubmit(){
                console.log(idToEdit);
                let newBooking = {
                    "id" : `${idToEdit}`,
                    "date" : `${document.getElementById("dateEdit").value}`,
                    "userid" : `${userid}`,
                    "movieid" : `${movie.movieid}`,
                    "movieTitle" : `${movie.movieTitle}`,
                    "movieHall" : `${movie.movieHall}`,
                    "movieTimeslot" : `${movie.movieTimeslot}`

                };

                const minurl = "http://localhost:8080/newBooking"

                let body = JSON.stringify(newBooking);

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
                window.alert("Your booking has been updated");
                location.reload();
            }
        }
    })




}


