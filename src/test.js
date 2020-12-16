var clickMeButton = document.getElementById('clickButton');

var favDialog = document.getElementById('favDialog');
var outputBox = document.querySelector('output');
var modalTitle = document.getElementById('title');

function showPopup(val){
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
    title.innerHTML = val;
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
}

function buttonClick(val){
  outputBox.value = `You just clicked "${val}"`;
}


