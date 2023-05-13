let countPep = document.getElementById("count-pep");
let incrementCount = document.getElementById("increment");
let saveCount = document.getElementById("save");
let entriesCount = document.getElementById("entries");
let count = 0;

// console.log(countPep);
function incrementCounter() {
    count = count + 1;
    console.log(count);
    countPep.innerHTML = count;
}

// console.log(entriesCount);
function entriesCounter() {
    entriesCount.innerHTML += `${count} - `;
}

// console.log(saveCount);
function saveCounter() {
    console.log(`Save = ${count}`);
    entriesCounter();
    countPep.innerHTML = 0;
    count = 0;
}