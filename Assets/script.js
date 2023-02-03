const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=HsQKsBMeftCAiZmiLYg4PCgRjZA4Tqwo";

const submitBtn = $(".submit");
const prevBtn= $(".prev");
const nextBtn = $(".next");

submitBtn.on("click", function() {
    $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function(response) {
            console.log(response);
        });
});

