import * as calc from './calculations.js'
import * as view from './view.js'

// calc.stats({
//     power: 15,
//     attack: 30,
//     delay: 1.5,
//     crit: 12,
//     critPower: 1.7,

//     powerAfter: 25,
//     attackAfter:35,
//     delayAfter:1,
//     critAfter:20,
//     critPowerAfter:2
// })


function calculateDiference() {
    const formBefore = document.querySelector(".before .stats")
    const formAfter = document.querySelector(".after .stats")
    const beforeStats = view.getStats(formBefore)
    const afterStats = view.getStats(formAfter)
    const stats = beforeStats
    stats.powerAfter = afterStats.power
    stats.attackAfter = afterStats.attack
    stats.critAfter = afterStats.crit
    stats.critPowerAfter = afterStats.critPower
    stats.delayAfter = afterStats.delay

    let totals = calc.stats(stats)
    let totalMessage = totals.message
    let boost = totals.totalBoost
    // view.showTotalMessage(totalMessage)
    view.showShortTotal(boost)
}

document.querySelector(".compare").addEventListener("click", () => {
    calculateDiference()
})
document.querySelector(".asLeft").addEventListener("mousedown", () => {
    view.asLeft()
})

document.querySelectorAll(".stat-value input").forEach(element => {
    view.onlyFloatField(element)    
});

