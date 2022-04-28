var currentHour = moment().format('H')
var past = $('.past');
var present = $('.present');
var future = $('.future');


var currentDate = moment().format('dddd MMMM Do, YYYY');
$("#currentDay").text(currentDate);




var timeDisplayEl = $('#currentHour');
function displayTime() {
    timeDisplayEl.text(currentHour);
}



function pastTimeSlot() {
    for(var i = currentHour - 1; i >= 9; i--){
        if(i >= 9 && i <= 17){
            document.getElementById(i).classList.add('past');
        }
    }
}


function currentTimeSlot() {
    if(currentHour >= 9 && currentHour <= 17){
        document.getElementById(currentHour).classList.add('present');
    }
}


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

    localStorage.setItem('text', JSON.stringify(inputField));
}


function saveInput() {

    var inputValue = JSON.parse(localStorage.getItem('text'));

    if (inputValue !== null) {
        inputText.text(inputValue.inputText);
        inputText2.text(inputValue.inputText2);
        inputText3.text(inputValue.inputText3);
        inputText4.text(inputValue.inputText4);
        inputText5.text(inputValue.inputText5);
        inputText6.text(inputValue.inputText6);
        inputText7.text(inputValue.inputText7);
        inputText8.text(inputValue.inputText8);
        inputText9.text(inputValue.inputText9);
    }

    else{
        return;
    }
};

saveBtn.on('click', function(event){
    event.preventDefault();
    window.alert('Appointment Saved');
    console.log(event.target)
    saveInput();
    getInput();
});

function maintain() {
    saveInput();
}

maintain();