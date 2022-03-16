/* main nav initialization and handler */

{
  const navOpenBtn = document.getElementById("navopen");
  const navCloseBtn = document.getElementById("navclose");
  const navigation = document.querySelector(".navigation");

  function navOpenClose(event) {
    event.preventDefault();
    if (!navigation.classList.contains("active")) {
      navigation.classList.add("active");
      navCloseBtn.classList.add("active");
      navOpenBtn.classList.remove("active");
    } else {
      navigation.classList.remove("active");
      navCloseBtn.classList.remove("active");
      navOpenBtn.classList.add("active");
    }
  }
  newFunction();
  function newFunction() {
    navCloseBtn.addEventListener("click", navOpenClose);
    navOpenBtn.addEventListener("click", navOpenClose);
  }
}

/* set skill data dynamically */
{
  function setSkillLevel() {
    const skillLevel = document.querySelectorAll(".indicator .line");

    skillLevel.forEach((skill) => {
      let spanElem = skill.querySelector("span");
      skill.style.width = `${skill.dataset.skill}%`;
      spanElem.innerText = `${skill.dataset.skill}%`;
    });
  }
  setSkillLevel();
}
