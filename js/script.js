/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["I Feel Like I'm Drowning", "Gotta Go", "Nobody's Home", "Instagram"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var artists = ["Two Feet", "Chungha", "gnash", "Dean"];
var songLength = ["3:05", "3:41","3:11", "4:39"];
var imageLink = ["https://i.ytimg.com/vi/WkVvG4QTO9M/maxresdefault.jpg", "https://celebmafia.com/wp-content/uploads/2019/01/chungha-gotta-go-teaser-photos-2019-9_thumbnail.jpg", "https://i.ytimg.com/vi/hIoVAsfUyZg/maxresdefault.jpg", "https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/dean_2.jpg?itok=7H6cUY6W&mtime=1517264910"];
var link = ["https://www.youtube.com/embed/WkVvG4QTO9M", "https://www.youtube.com/embed/HlN2BXNJzxA", "https://www.youtube.com/embed/hIoVAsfUyZg", "https://www.youtube.com/embed/wKyMIrBClYw"];


// BELOW Use forEach Loop to display the data from each of your array's in the correct div

songs.forEach(function(element){
    $('#songs').append("<p>" + element + "</p>");
});
artists.forEach(function(element) {
    $("#artists").append("<p>" + element + "</p>");
});
songLength.forEach(function(element) {
   $("#lengths").append("<p>" + element + "</p>"); 
});
imageLink.forEach(function(img) {
    $("#images").append("<img src='" +img+ "'>");
});
link.forEach(function(element) {
    $("#links").append("<iframe src=" + element + "></iframe>");
    $("#cancel").append("<button id ='delete'>Delete</button>");
});

function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#links").empty();
    $("#artists").empty();
    $("#lengths").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
        var newSong = $("#song").val();
        var newArtist = $("#artist").val();
        var newLength = $("#length").val();
        var newImage = $("#image").val();
        var newLink = $("#link").val();
        
        songs.push(newSong);
        artists.push(newArtist);
        songLength.push(newLength);
        imageLink.push(newImage);
        link.push(newLink);

}
function displaySongInfo() {
    songs.forEach(function(element){
    $('#songs').append("<p>" + element + "</p>");
});
artists.forEach(function(element) {
    $("#artists").append("<p>" + element + "</p>");
});
songLength.forEach(function(element) {
   $("#lengths").append("<p>" + element + "</p>"); 
});
imageLink.forEach(function(img) {
    $("#images").append("<img src='" +img+ "'>");
});
link.forEach(function(element) {
    $("#links").append("<iframe src=" + element + "></iframe>");
});
    
    
    
    
}
$("#add").click(function() {
    addSongInfo();
    emptySongInfo();
    displaySongInfo();
});

