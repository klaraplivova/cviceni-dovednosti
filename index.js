function updateSkill (id, number) {
    let skill = document.querySelector(id)
    let value = skill.querySelector(".skill__value")
    let progress = skill.querySelector(".skill__progress")

    value.textContent = number + " / 100"

    progress.style.width = number + "%"
}

const html = prompt("Jak Vám jde HTML? (Zadejte číslo od 0 do 100)")
const css = prompt("Jak Vám jde CSS? (Zadejte číslo od 0 do 100)")
const js = prompt("Jak Vám jde JavaScript? (Zadejte číslo od 0 do 100)")

updateSkill("#skill1", html)
updateSkill("#skill2", css)
updateSkill("#skill3", js)