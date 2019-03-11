function getWelcomeMSG() {
    console.log("inside welcome message");
    return "Welcome to my site";
}
console.log("after welcome message");

var welcome=getWelcomeMSG();
console.info(welcome);

var summaryElement = document.getElementById("summary")
console.info("summaryElement", summaryElement)
var color="red";
summaryElement.style.color="color"

function hidePage(page) {
    var el = document.getElementById(page);
    el.style.display= "none";
 }
 function showPage(page) {
     document.getElementById(page).style.display="block";
 }
