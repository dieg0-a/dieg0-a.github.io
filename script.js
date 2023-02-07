function toggleSubSectionVisible(subsection_element_name) {
    var element = document.getElementById(subsection_element_name);
    if(element.style.visibility == "hidden")
    {
        element.style.visibility = "visible";
        element.style.maxHeight = null;
    }
    else
    {
        element.style.visibility = "hidden";
        element.style.maxHeight = 0;
    }
  }

document.getElementById("contact_button").addEventListener("click", function toggleContact() {toggleSubSectionVisible("contact_subsection")});
document.getElementById("skills_button").addEventListener("click", function toggleSkills() {toggleSubSectionVisible("skills_subsection")});
document.getElementById("languages_button").addEventListener("click", function toggleLanguages() {toggleSubSectionVisible("languages_subsection")});