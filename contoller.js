import * as calc from './calculations.js'
import * as view from './view.js'

// calc.powerBoost(29, 57, 9)
// calc.attackBoost(29, 57, 0.24,9)
// calc.critBoost({ crit: 32, critAfter: 44, critPower: 1.83, critPowerAfter:1.83 })

// calc.attackBoost(29, 57, 0.24, 0)
// calc.attackBoost(50.6, 80, 0.03, 1)
// calc.attackBoost(22,42, 1.02, 1)
// calc.powerBoost(22,42,  1)
// calc.critBoost({ crit: 62.7, critAfter: 67.3, critPower: 2.31,})
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


// document.getElementById("your_input_id").onkeypress = function(event) {
   
//     if (!/[0-9]|.|,/.test(event.key)) {
//         event.preventDefault();  // Что за незаконный вторженец? Не цифра!
//     }else     
//         commaToPointOnInput(event, this)
// };

