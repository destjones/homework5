let currentDay = $("#currentDay").text(luxon.DateTime.local().toFormat("ff"));
let currentTime = parseInt(luxon.DateTime.local().toFormat("H"));
console.log(currentTime)
for (let i = 9; i < 18; i++) {
  $(".container").append(buildTimeSlot(i));
}
// individual time block build
function buildTimeSlot(hour) {
  const $timeSlot = $("<div>")
    .attr("id", hour)
    .attr("class", "row time-block hour");
  // time block hour
  const $timeLabel = $("<div>").attr("class", "col-md-1");
  if (hour > 12) {
    $timeLabel.text(hour - 12 + "PM");
  } else if (hour === 12){
    $timeLabel.text(hour + "PM");
  } else {
    $timeLabel.text(hour + "AM");
  }
  // button
  const $textArea = $("<textarea>").attr("class", "col-md-10 description");
  // creates the button to be able to save the contents
  const $btn = $("<button>")
    .attr("class", "btn saveBtn col-md-1")
    .append($("<i>").attr("class", "fas fa-save"));

  $timeSlot.append($timeLabel, $textArea, $btn);
  
  return $timeSlot;
}
// where we will store values
const notes = {
    9:"",
    10:"",
    11:"",
    12:"",
    13:"",
    14:"",
    15:"",
    16:"",
    17:"",
}


// localStorage.setItem("user",JSON.stringify(notes))


for (let i = 9; i < 18; i++) {
  $(`#${i} .description`).val(localStorage.getItem(i));
}



// listens for the save button to be clicked on
$(".saveBtn").on("click", function(e){
    // only functions on click for the save button
    // if (!e.target.matches(".saveBtn"))return;
    var data = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id")
    // for (let i = 9; i < 18; i++){
    //     let currentKey  = notes[i - 9]
        localStorage.setItem(time, data)
    //     console.log(currentKey)
    // }
})

// color for time blocks
function timeColor(){
  $(".row").forEach(function(){
   if (i < currentTime){
   $(this).addClass(".past")
  }else if ( i === currentTime){
    $(this).addClass(".present")
  }else if  ( i > currentTime) {
    $(this).addClass(".future")
  }
});
}

var refresh = setInterval(timeColor, 1000)
