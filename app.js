// Q1

function q1() {
    alert("Question number 1 clicked!");
}
function q2() {
    document.getElementById("otherButton").style.display = "none";
}
function q4() {
    window.scrollTo(0, 0);
}
function q5() {
    var audio = document.getElementById("sound");
    audio.play();
}
function q6() {
    var google = 'https://google.com/';
    window.open(google, "_blank");
}
function q7() {
    alert("Question number 7 pressed!")
}
function q9() {
    var audio = document.getElementById("sound2");
    audio.play();
}
function q10() {
    alert("Question number 10 pressed!")
}
function q12() {
    window.open("https://google.com", "_blank");
}

function q13() {
    var input = document.getElementById("q13").value;
    console.log(input);
}
function q14() {
    var input = document.getElementById("agreement").value;
    console.log(input);
}
function q15() {
    var input = document.getElementById("country").value;
    console.log(input);
}
function q16() {
    var  paragraph = document.getElementById('paragraph');
    paragraph.setAttribute("id","para1");
}
function q17() {
    var select = document.getElementById("maritalstatus").value;
    if (select != 'married') {
        document.getElementById("status").value = "available"
    }
    else {
        document.getElementById("status").value = "unavailable"
    }
}
function q18() {
    var input = document.getElementById("string");
    if (input.value == "") {
        input.value = "String added!";
    }
    else {
        alert(input.value);
    }
}

function q19() {
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    if (fname && lname && email && pass) {
        alert("You're successfully registered!");
    }
    else {
        alert("One of the fields are missing data!");
    }
}
