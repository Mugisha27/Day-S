var currentHour = moment().format('H')
var past = $('.past');
var present = $('.present');
var future = $('.future');


var currentDate = moment().format('dddd MMMM Do, YYYY');
$("#currentDay").text(currentDate);


// Placeholder

var timeDisplayEl = $('#currentHour');
function displayTime() {
    timeDisplayEl.text(currentHour);
}


// styling time-blocks for hours that have alread passed
function pastTimeSlot() {
    for(var i = currentHour - 1; i >= 9; i--){
        if(i >= 9 && i <= 17){
            document.getElementById(i).classList.add('past');
        }
    }
}

// styling time-blocks for the current hour
function currentTimeSlot() {
    if(currentHour >= 9 && currentHour <= 17){
        document.getElementById(currentHour).classList.add('present');
    }
}

// styling time-blocks for hours that haven't alread passed
function futureTimeSlot() {
    for(var j = +currentHour + 1; j <= 17; j++){
        if(j <= 17){
            document.getElementById(j).classList.add('future');
        }
    }
}

pastTimeSlot()
currentTimeSlot()
futureTimeSlot()
displayTime()

var inputText = $('textarea[name="input-box"]');
var inputText2 = $('textarea[name="input-box1"]');
var inputText3 = $('textarea[name="input-box2"]');
var inputText4 = $('textarea[name="input-box3"]');
var inputText5 = $('textarea[name="input-box4"]');
var inputText6 = $('textarea[name="input-box5"]');
var inputText7 = $('textarea[name="input-box6"]');
var inputText8 = $('textarea[name="input-box7"]');
var inputText9 = $('textarea[name="input-box8"]');

var saveBtn = $('.saveBtn');
var save1 = $('#save1');

// Get Input Function
function getInput() {

    var inputField = {
        inputText: inputText.val(),
        inputText2: inputText2.val(),
        inputText3: inputText3.val(),
        inputText4: inputText4.val(),
        inputText5: inputText5.val(),
        inputText6: inputText6.val(),
        inputText7: inputText7.val(),
        inputText8: inputText8.val(),
        inputText9: inputText9.val(),
    };