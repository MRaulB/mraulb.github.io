console.info("my first js file");

var name="Raul";
var employed=false;

console.warn("employed");
console.warn(employed);

console.info("name");
console.info(name);

name="Bogdan";

console.info("name");
console.info(name);

console.log("before welcome message");
function getWelcomeMSG() {
    console.log("inside welcome message");
    return "Welcome to my site";
}
console.log("after welcome message");

function getColor() {
    var date = new Date();
    console.log(date.getMinutes());
    if (date.getMinutes() > 16) {
        return "green"
    }
    return "red";
}
// first example
function hideHomePage() {
   var el = document.getElementById("home-page");
   el.style.display= "none";
}
function showSkillsPage() {
    document.getElementById("skills-page").style.display="block";
}
function clickOnSkills(){
   // hideHomePage();
   // showSkillsPage();
   hidePage("home-page");
   showPage("skills-page");

}
//first example end
var welcome=getWelcomeMSG();
console.info(welcome);

var summaryElement = document.getElementById("summary")
console.info("summaryElement", summaryElement)
var color="red";
summaryElement.style.color="color"

//summaryElement.style.color = "blue";

function hidePage(page) {
    var el = document.getElementById(page);
    el.style.display= "none";
 }
 function showPage(page) {
     document.getElementById(page).style.display="block";
 }
function clickOnSkills(){
    hidePage("home-page");
    hidePage("languages-page");
    hidePage("about-page");
    showPage("skills-page");
}