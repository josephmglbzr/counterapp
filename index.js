// external from HTML 
let countEl = document.getElementById("ppl-cnt")
let saveEl = document.getElementById("entries")
// declaring numbers that increment. Default is 0
let count = 0

//function for button increment and save
function increment(){
    count += 1 // increment the count which is the value 0 plus 1
    countEl.textContent = count // call the html using certain ID so the count would be display inside of it
}
function save(){
    let cntStr = count + " - "
    saveEl.textContent += cntStr
    count = 0 //once the button save clicked the numbers will reset to 0 
    countEl.textContent = count /* once the button save clicked the current count will display on the previous entries
     paragraph*/
}
