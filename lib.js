
export function powerBoost(power, attack, boost = 1) {
    printSeperator()
    let empower, beforeBoostDmg, afterBoostDmg = 0

    beforeBoostDmg = Math.pow(power + attack, 2.1) / 100 + power
    printStats({ power: power, attack: attack, dmg: beforeBoostDmg })

    power = power + boost
    afterBoostDmg = Math.pow(power + attack, 2.1) / 100 + power
    printStats({ power: power, attack: attack, dmg: afterBoostDmg, powBoost: boost })

    empower = ((afterBoostDmg / beforeBoostDmg) -1 ) *100
    printStats({ totalBoost: empower })

}
export function attackBoost(power, attack, delay, boost = 1) {
    printSeperator()
    let empower, beforeBoostDmg, afterBoostDmg,
        beforeBoostSpeed, afterBoostSpeed, speedBoost, totalBoost = 0

    beforeBoostDmg = Math.pow(power + attack, 2.1) / 100 + power
    beforeBoostSpeed = delay + Math.pow(0.99, attack)
    printStats({ power: power, attack: attack, dmg: beforeBoostDmg, speed: beforeBoostSpeed })

    attack = attack + boost
    afterBoostDmg = Math.pow(power + attack, 2.1) / 100 + power
    afterBoostSpeed = delay + Math.pow(0.99, attack)
    printStats({ power: power, attack: attack, dmg: afterBoostDmg, weaponBoost: boost, speed: afterBoostSpeed })

    empower = (afterBoostDmg / beforeBoostDmg - 1) * 100
    speedBoost = (beforeBoostSpeed / afterBoostSpeed - 1) * 100
    totalBoost = empower + speedBoost
    printStats({ empower: empower, speedBoost: speedBoost, totalBoost: totalBoost })
}
export function critBoost({ crit, critAfter = crit, critPower, critPowerAfter = critPower }) {
    printSeperator()
    let critPowBefore = (crit * (critPower - 1) ) /100 + 1
    printStats({critChance:crit,critPower:critPower, crit: critPowBefore })

    let critPowAfter = (critAfter * (critPowerAfter - 1) )/100 + 1 
    let critEfective =  (critPowAfter/critPowBefore -1)*100
    printStats({critChance:critAfter,critPower:critPowerAfter, crit: critPowAfter, critEfective: critEfective })
}

function printStats({ power, attack, dmg, speed, powerBoost, weaponBoost, empower, speedBoost, totalBoost, delay: delay,critChance:critChance,critPower:critPower, crit: crit, critEfective: critEfective }) {


    if (power) {
        if (!powerBoost) {
            console.log(`Сила`, power)
        } else {
            console.log(`Сила +${powerBoost}`, power)
        }
    }

    if (attack) {
        if (!weaponBoost) {
            console.log("Оружие", attack)
        } else {
            console.log(`Оружие +${weaponBoost}`, attack)
        }
    }
    critChance? console.log("Шанс крита ", critChance, "%") : ""
    critPower? console.log("Сила крита ", critPower) : ""
    crit ? console.log("Итоговый множитель крита ", round(crit, 4), ) : ""
    delay ? console.log("Задержка атаки ", delay) : ""
    dmg ? console.log("Сила удара", round(dmg, 4)) : ""
    speed ? console.log("Скорость атаки ", round(speed, 4)) : ""
    if (delay || dmg || speed || crit) {
        console.log(" ")
    }

    empower ? console.log("Прирост силы", round(empower, 5) , "%") : ""
    speedBoost ? console.log("Прирост скор", round(speedBoost, 5) , "%") : ""
    totalBoost ? console.log("Общ  прирост", round(totalBoost, 5)  , "%") : ""
    critEfective ? console.log("Прирост от крита", round(critEfective, 5) , "%") : ""

}

function printSeperator() {
    console.log(" ")
    console.log(" ")
    console.log(" ")
}

function round(num, places){ 
    return Math.round(num * Math.pow(10, places)) / Math.pow(10, places)
}


function statsCalculation({power, attack, delay, boost = 1}){

}