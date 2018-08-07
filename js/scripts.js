var layout =
[
  [4,4,4],
  [4,4,4],
  [4,4,4],
  [4,4,4],
  [4,4,4],
  [4,4,4]
]
var definitions =
{
  JavaScript : "a vegetable",
  Operator : "also a vegetable",
  Variable : "not a dog",
  
}

$(document).ready(function(){
  $('.flashcard').click(function(){
    if ($(this).hasClass("word-side")) {
      $(this).removeClass("word-side")
      $(this).addClass("definition-side")
    } else {
      $(this).removeClass("definition-side")
      $(this).addClass("word-side")
    }
  })
})
// function createLayout(container,layoutArray) {
//   var rows = layoutArray.length
//   for (var r=0;r<rows;r++) {
//     var columns = layoutArray[r].length
//     // make the row divs
//     $(container).append(`<div id="row-`+r+`" class="row" style="text-align:left"></div>`)
//     // grab the row div you just made
//     var newRow = $('#row-'+r)
//     // put the columns in
//     for (var c=0;c<columns;c++) {
//       var columnWidth = layoutArray[r][c]
//       console.log("col wid is " + columnWidth)
//       newRow.append(`<div id="column-`+r+`-`+c+`" class="bordered col-md-`+columnWidth+`" style="text-align:right"></div>`)
//     }
//   }
// }
// function insertCards() {
//   var panelArray = document.getElementsByClassName("flashcard word-side")
//   for (var e=0;e<panelArray.length;e++) {
//     var panel = panelArray[e]
//     var wordList = Object.keys(definitions)
//     var word = wordList[e]
//     $('#'+panel.id).html(word)
//   }
//   console.log(panelArray)
// }
