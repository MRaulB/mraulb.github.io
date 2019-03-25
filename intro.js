var summaryElement = document.getElementById("summary")
var color = "red";
summaryElement.style.color = "color"

function hidePage(page) {
    var el = document.getElementById(page);
    el.style.display = "none";
}
function showPage(page) {
    document.getElementById(page).style.display = "block";
}

function initMenu() {
    var links = document.querySelectorAll('#top-menu-bar a')
    console.info(links);
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = clickOnMenuItem;
    }
}

function clickOnMenuItem() {
    console.warn('clicked on menu', this);
    hideAllPages();
    var pageid = this.getAttribute('data-page');
    console.warn({ pageid });
    showPage(pageid);
}

function hideAllPages() {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none'
    }
}
initMenu();

function showSkills(skills) {
    skills.sort(function (a, b) {
        return b.endorsements - a.endorsements;
    });

    var htmlSkills = skills.map(function (skill) {
        var endorsedBy = skill.endorsedBy ? ` - ` + skill.endorsedBy : '';
        var endorsements = `<span class="endorsement">(${skill.endorsements})${endorsedBy}</span>`;
        return '<li>' + skill.name.toUpperCase() + endorsements + '</li>';
    });

    var ul = document.querySelector('#skills-page ul');
    ul.innerHTML = htmlSkills.join('');

}
hideAllPages();
showPage('skills-page');

fetch('Data/skills.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        showSkills(myJson);
    });

