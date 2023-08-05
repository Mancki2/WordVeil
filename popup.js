


const addButton = document.querySelector("#getButton");

// word that was just inputed if any
let currWord = "";

// this is the function that defines what the EnterWord button does on "click"
addButton.addEventListener("click", () => {
  currWord = window.prompt("Enter word to be blocked");
  
  if(!currWord.includes(" ")){
    addWord(currWord);
  }else{
    window.alert("Must not include spaces/ seperate by commas only if including multiple words");
  }
  }
);

// should make the hidden div edditable
// document.querySelector("#wordList").contentEditable = true;

// function that refreshes the page
function refreshButtonFunc (){
  chrome.tabs.reload();
}

// getting the refresh button and adding an eventlistener to use the refresh function
const refreshButton = document.querySelector("#refreshPage");
refreshButton.addEventListener("click", refreshButtonFunc);

// this grabs the second button the open word list button and opens a html on "click"
const seeList = document.querySelector("#listPopup");
seeList.addEventListener("click", () => openPopup());



// fuction that opens a popup of size 500/300 using the ID of the html element as an argument
async function openPopup() {

  let list = await getWords();

  window.alert(list);
}

// this is where we grab the remove word button and add an event listener to run the removeWord() function when clicked
const removeButton = document.querySelector("#removeButton");
removeButton.addEventListener("click", () => {removeWord(window.prompt("Enter word to remove"))});



// These are for the on/off check
// event listner that check when a change has happened then check if on or off
// then changes the boolean in storage to flase or true based on check.




const onCheck = document.querySelector("#switch");
onCheck.addEventListener('change', async function(){
  if(this.checked){
    saveCheck(true);
  }else {
    saveCheck(false);
  }
  await getCheck();
  console.log(await getCheck());
})

// fucntion to check if checkBox is on or Off based on the local storage
// then makes it on or off, should be run every time the popup/interface is opened.
document.addEventListener('DOMContentLoaded', async function(){
  console.log(await getCheck());
  console.log("checking was done");

  if(onCheck.checked != await getCheck()){
    if(await getCheck){
      checkCheckbox();
      console.log(await getCheck());
    }else{
      uncheckCheckbox();
      console.log(await getCheck());
    }
  }
})


// Check the checkbox
function checkCheckbox() {
  onCheck.checked = true; 
}

// Uncheck the checkbox
function uncheckCheckbox() {
  onCheck.checked = false;
}
