console.log("65024782_T02");
const display = document.getElementById("display");

function getValue(id) {
  if (document.getElementById(id).value == "") {
    return "null";
  } else {
    return document.getElementById(id).value;
  }
}

function submit() {
  var output = "";
  var name = getValue("name");
  var surname = getValue("surname");
  var DOB = getValue("DOB");
  var language = getValue("language");
  if (
    name == "null" ||
    surname == "null" ||
    DOB == "null" ||
    language == "null"
  ) {
    display.style.color = "red";
    if (name == "null") {
      output += "Insert Name <br>";
    }
    if (surname == "null") {
      output += "Insert Surname <br>";
    }
    if (DOB == "null") {
      output += "Insert Birth Date <br>";
    }
    if (language == "null") {
      output += "Select Language <br>";
    }
    display.innerHTML = output;
  } else {
    output += name + "," + surname + "," + DOB + "," + language;
    display.style.color = "green";
    display.innerHTML = output;
  }
}

function highlight(item) {
  item.classList.toggle("highlight");
}

function removehightlight(item) {
  item.classList.remove("highlight");
}
