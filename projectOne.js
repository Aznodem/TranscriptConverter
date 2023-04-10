
function convertToHtmlList() {
    // Get the text from the text box
    var text = document.getElementById("text-box").value;
    // Split the text into sentences using a regular expression
    var sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
    // Create an empty HTML list
    var htmlList = '<ul id="myUL">';
    // Loop through each sentence and add it to the HTML list as a list item
    for (var i = 0; i < sentences.length; i++) {
    htmlList += "<li><a href=\"#\">" + sentences[i] + "</a></li>";
    }
    // Close the HTML list
    htmlList += "</ul>";
    // Set the HTML of the output div to the HTML list
    document.getElementById("output").innerHTML = htmlList;
  }

  //the search function
 
 function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function sendData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      document.getElementById("sentimentbox").value = "Sentiment: " + response.sentiment + "\n" + 
                                                     "Polarity: " + response.polarity + "\n" + 
                                                     "Subjectivity: " + response.subjectivity;
    }
  };
  var text = document.getElementById("text-box").value;
  xhttp.open("POST", "/sentiment", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("text=" + text);
}