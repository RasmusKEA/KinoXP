let administration = document.getElementById("administration");

administration.onclick = function administration(){
    location.href = "/admin";
}

const requestObject = {
    method : "GET",
    "content-type" : "application/json",
    redirect : "follow"
}

fetch(`http://localhost:8080/getAllBookings`, requestObject)
    .then(response => response.json())
    .then(booking => allBookings(booking));

function allBookings(booking) {

    const tableDiv = document.querySelector("#tablebody");

    booking.forEach(booking => {
        const tableHead = document.createElement("th");
        const tableRow = document.createElement("tr");
        const tableData = document.createElement("td");
        const tableData1 = document.createElement("td");
        const tableData2 = document.createElement("td");
        const tableData3 = document.createElement("td");
        const tableData4 = document.createElement("td");

        tableHead.innerText = booking.id;
        tableData.innerText = booking.movieid;
        tableData1.innerText = booking.movieTitle;
        tableData2.innerText = booking.date;
        tableData3.innerText = booking.movieTimeslot;
        tableData4.innerText = booking.userid;

        tableRow.append(tableHead);
        tableRow.append(tableData);
        tableRow.append(tableData1);
        tableRow.append(tableData2);
        tableRow.append(tableData3);
        tableRow.append(tableData4);
        tableDiv.append(tableRow);

    })
}
