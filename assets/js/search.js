var authKey = "63fe2e5072eb4683be3c8665a4a7f652";

var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=";

    var searchTerms = "rosevelt"
    var numResults = 0
    var startYear = 0
    var endYear = 0
    var articleCounter = 0
function runQuery(numArticles, queryURL) {


$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(result) {
    console.log(result.response.docs);
    for ( var i=0; i < numArticles; i++){
        articleCounter ++;

        var wellSection = $("<div class='well' id='article-well-'>");

    }
})};
//run search
function(event){
    var searchURL = queryURLBase + searchTerms;
    
    if (parseInt(startYear)) {
        searchURL = searchURL + "&begin_date=" + startYear + "0101";
    }
    
    if (parseInt(endYear)) {
        searchURL = searchURL + "&end_date=" + endYear + "0101";
    }
}