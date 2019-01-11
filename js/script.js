/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["I Feel Like I'm Drowning", "Gotta Go", "Nobody's Home", "Instagram"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var artists = ["Two Feet", "Chungha", "gnash", "Dean"];
var songLength = ["3:05", "3:41","3:11", "4:39"];
var imageLink = ["https://i.ytimg.com/vi/WkVvG4QTO9M/maxresdefault.jpg", "https://celebmafia.com/wp-content/uploads/2019/01/chungha-gotta-go-teaser-photos-2019-9_thumbnail.jpg", "https://i.ytimg.com/vi/hIoVAsfUyZg/maxresdefault.jpg", "https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/dean_2.jpg?itok=7H6cUY6W&mtime=1517264910"];
var link = ["https://www.youtube.com/watch?v=WkVvG4QTO9M", "https://www.youtube.com/watch?v=HlN2BXNJzxA", "https://www.youtube.com/watch?v=hIoVAsfUyZg", "https://www.youtube.com/watch?v=wKyMIrBClYw"];


// BELOW Use forEach Loop to display the data from each of your array's in the correct div



function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
