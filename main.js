import * as calc from './lib.js'

// calc.powerBoost(29, 57, 9)
// calc.attackBoost(29, 57, 0.24,9)
// calc.critBoost({ crit: 32, critAfter: 44, critPower: 1.83, critPowerAfter:1.83 })

// calc.attackBoost(29, 57, 0.24, 0)
// calc.attackBoost(50.6, 80, 0.03, 1)
// calc.attackBoost(22,42, 1.02, 1)
// calc.powerBoost(22,42,  1)
// calc.critBoost({ crit: 62.7, critAfter: 67.3, critPower: 2.31,})
calc.stats({
    power: 15,
    attack: 30,
    delay: 1.5,
    crit: 12,
    critPower: 1.7,
    
    powerAfter: 25,
    attackAfter:35,
    delayAfter:1,
    critAfter:20,
    critPowerAfter:2
})