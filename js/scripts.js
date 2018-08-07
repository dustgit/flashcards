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
  createLayout("#card-area",layout)
  addCards()

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
function createLayout(container,layoutArray) {
  var rows = layoutArray.length
  for (var r=0;r<rows;r++) {
    var columns = layoutArray[r].length
    // make the row divs
    $(container).append(`<div id="row-`+r+`" class="row" style="text-align:left"></div>`)
    // grab the row div you just made
    var newRow = $('#row-'+r)
    // put the columns in
    for (var c=0;c<columns;c++) {
      var columnWidth = layoutArray[r][c]
      newRow.append(`<div id="column-`+r+`-`+c+`" class="bordered col-md-`+columnWidth+`" style="text-align:right"></div>`)
    }
  }
}
function addCards() {
  var cardsNeeded = 18
  var rows = layout.length
  for (var r=0;r<rows;r++) {
    var columns = layout[r].length
    for (var c=0;c<columns;c++) {
      var sectionID = "#column-"+r+"-"+c
      var cardHTML = `<div class="panel panel-default flashcard word-side"><div class="panel-body"><div id="changeable-text-`+r+"-"+c+`"></div></div></div>`
      $(sectionID).html(cardHTML)
      $("#changeable-text-"+r+"-"+c).html("WORD " + r + " " + c)

    }
  }
}
