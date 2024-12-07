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


export function onlyFloatField(element){
    element.addEventListener("keypress", function (event) {            
        if (!/[0-9]|\.|,/.test(event.key) || /\.|,/.test(event.key) && element.value.includes('.') ) {
            event.preventDefault();  // Not a num or decimal point or we already have decimal point
        } 
        else if(event.key === ',')  
            commaToPointOnInput(event, this) // Place point instead of comma on current caret position
    })  
}

function commaToPointOnInput(evt, field){
    const val = field.value;
    evt = evt || window.event;

    // Ensure we only handle printable keys, excluding enter and space
    const charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
    let maxLength = field.maxLength || Infinity;
    if (charCode && charCode > 32 && val.length<maxLength) {
        const keyChar = String.fromCharCode(charCode);

        // Transform typed character
        const mappedChar = keyChar === "," ? "." : keyChar

        let start, end;
        if (typeof field.selectionStart == "number" && typeof field.selectionEnd == "number") {
            // Non-IE browsers and IE 9
            start = field.selectionStart;
            end = field.selectionEnd;
            field.value = val.slice(0, start) + mappedChar + val.slice(end);

            // Move the caret
            field.selectionStart = field.selectionEnd = start + 1;
        } else if (document.selection && document.selection.createRange) {
            // For IE up to version 8
            let selectionRange = document.selection.createRange();
            let textInputRange = field.createTextRange();
            let precedingRange = field.createTextRange();
            let bookmark = selectionRange.getBookmark();
            textInputRange.moveToBookmark(bookmark);
            precedingRange.setEndPoint("EndToStart", textInputRange);
            start = precedingRange.text.length;
            end = start + selectionRange.text.length;

            field.value = val.slice(0, start) + mappedChar + val.slice(end);
            start++;

            // Move the caret
            textInputRange = field.createTextRange();
            textInputRange.collapse(true);
            textInputRange.move("character", start - (field.value.slice(0, start).split("\r\n").length - 1));
            textInputRange.select();
        }

        evt.preventDefault();
    }
}
