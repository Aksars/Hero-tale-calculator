export function getStats(form) {
    let attack = form.querySelector(".attack input"); attack = attack.value || attack.placeholder
    let power = form.querySelector(".power input"); power = power.value || power.placeholder
    let crit = form.querySelector(".crit input"); crit = crit.value || crit.placeholder
    let critPower = form.querySelector(".critPower input"); critPower = critPower.value || critPower.placeholder
    let delay = form.querySelector(".delay input"); delay = delay.value || delay.placeholder

    return { attack: Number(attack), power: Number(power), crit: Number(crit), critPower: Number(critPower).toFixed(2), delay: Number(delay) }
}

export function showTotalMessage(message) {
    console.log(message)
    const mesageContainer = document.querySelector(".total-boost")
    mesageContainer.innerHTML = message
}

export function showShortTotal(boost) {
    boost = boost >= 0 ? "+" + boost : boost
    boost += "%"
    const mesageContainer = document.querySelector(".total-boost")
    mesageContainer.innerHTML = boost
}
export function asLeft() {
    const leftForm = document.querySelector(".before .stats")
    const rightForm = document.querySelector(".after .stats")
    const stats = getStats(leftForm)
    setStats(rightForm, stats)

}

function setStats(form, stats) {
    form.querySelector(".attack input").value = stats.attack
    form.querySelector(".power input").value = stats.power
    form.querySelector(".crit input").value = stats.crit
    form.querySelector(".critPower input").value = stats.critPower
    form.querySelector(".delay input").value = stats.delay

}