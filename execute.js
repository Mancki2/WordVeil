
console.log("I RAN SCRIPT");

async function printWords(){
  let words = await getWords();
  console.log(words);
}

printWords();

  // Get all text nodes on the webpage
  let allTextNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

  let replacementWord = "-------";

async function wordViel(){

  let block = await getWords();
  // Traverse through all text nodes per element in array:
  for (let i = 0; i <=block.length; i++){

    while (allTextNodes.nextNode()) {
      let textNode = allTextNodes.currentNode;
      let regex = new RegExp('\\b' + block[i] + '\\b', 'gi'); // Match whole word, case-insensitive
      let replacedText = textNode.textContent.replace(regex, replacementWord);
      textNode.textContent = replacedText;

    }

      allTextNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

  }
}

// RUNING MAIN FUNCTION THAT changes words on page based on array in chrome.storage (it uses getWords() which is a method that get words from storage)
async function userCheck(){
  console.log("runing userCheck")
  if(await getCheck() == true){
    wordViel();
    console.log("was true")
  }else{
    console.log("check is off");
  }

}

//runing check to see if checkbox is on or off then ruing wordViel inside
userCheck();















