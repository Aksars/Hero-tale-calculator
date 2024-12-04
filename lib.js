
export function powerBoost(power, attack, boost = 1) {
    printSeperator()
    let empower, beforeBoostDmg, afterBoostDmg = 0

    beforeBoostDmg = Math.pow(power + attack, 2.1) / 100 + power
    printStats({ power: power, attack: attack, dmg: beforeBoostDmg })

    power = power + boost
    afterBoostDmg = Math.pow(power + attack, 2.1) / 100 + power
    printStats({ power: power, attack: attack, dmg: afterBoostDmg, powBoost: boost })

    empower = afterBoostDmg / beforeBoostDmg
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
    printStats({ power: power, attack: attack,  dmg: afterBoostDmg, weaponBoost: boost, speed: afterBoostSpeed })

    empower = (afterBoostDmg / beforeBoostDmg - 1) * 100
    speedBoost = (beforeBoostSpeed / afterBoostSpeed - 1) * 100
    totalBoost = empower + speedBoost
    printStats({ empower: empower, speedBoost: speedBoost, totalBoost: totalBoost })
}


function printStats({ power, attack, dmg, speed, powerBoost, weaponBoost, empower, speedBoost, totalBoost, delay: delay }) {

    
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
    delay ? console.log("Задержка атаки ", delay) : ""
    dmg ? console.log("Сила удара", dmg) : ""
    speed ? console.log("Скорость атаки ", speed) : ""
    if(delay||dmg||speed){   
    console.log(" ")}
   
    empower ? console.log("Прирост силы", empower, "%") : ""
    speedBoost ? console.log("Прирост скор", speedBoost, "%") : ""
    totalBoost ? console.log("Общ  прирост", totalBoost, "%") : ""
    
}

function printSeperator() {
    console.log(" ")
    console.log(" ")
    console.log(" ")
}



