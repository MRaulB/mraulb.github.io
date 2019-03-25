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

 function initMenu() {
     var links = document.querySelectorAll('#top-menu-bar a')
    console.info(links); 
    for(var i = 0; i < links.length; i++){
        links[i].onclick = clickOnMenuItem;
    }
 }

 function   clickOnMenuItem() {
         console.warn('clicked on menu',this);
         hideAllPages();
         var pageid = this.getAttribute('data-page');
         console.warn({pageid});
         showPage(pageid);
 }

 function hideAllPages() {
     var pages = document.querySelectorAll('.page');
     for(var i =0; i < pages.length; i++){
         pages[i].style.display= 'none'
     }
 }
 initMenu();
 
 function showSkills() {
     var skills = [
         {name: 'html', endorsements: 8},
         {name: 'css', endorsements: 12},
         {name: 'javascript', endorsements: 20},
         {name: 'nodejs', endorsements: 3}
        ];

     var htmlSkills = skills.map(function(skill, index) {
         var endorsements =' <span class="endorsement">(' + skill.endorsements + ")</span>";
        return '<li>' + skill.name.toUpperCase() + endorsements + '</li>';
    });
       
     var ul = document.querySelector('#skills-page ul');
      ul.innerHTML = htmlSkills.join('');
       
}
hideAllPages();
showPage('skills-page');
 showSkills();

