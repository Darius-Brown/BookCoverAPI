$(document).ready(function() {


    function getBooks() {
        let search = document.getElementById("search").value;
        var apply = document.getElementById("apply");
        console.log(search);
        const apiKey = "AIzaSyAPhGOrnFvJb8JfYysnrGrAH9wYppYy-V4";

        $.ajax({
            url:
                "https://www.googleapis.com/books/v1/volumes?q="+
                search+
                "&key="+
                apiKey,
            dataType: "json",

            success: function (book) {
                console.log(book);
                for(var i = 0; i < book.items.length; i++) {
                    console.log(book.items[i].volumeInfo.title);
                    apply.innerHTML += "<h3>" + book.items[i].volumeInfo.title + "<h3>";
                    apply.innerHTML += "<img src='" + book.items[i].volumeInfo.imageLinks.thumbnail + "'>";

                }
            },
            type: "GET"
        });
    }
    var submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', getBooks, false);


});