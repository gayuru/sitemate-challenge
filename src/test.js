var clickMeButton = document.getElementById('clickButton');

var favDialog = document.getElementById('favDialog');
var outputBox = document.querySelector('output');
var confirmBtn = document.getElementById('confirmBtn');
var cancelBtn = document.getElementById('cancelBtn');
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
// cancelBtn.addEventListener('click', function(){
//     outputBox.value = `You just clicked "Cancel"`;
// });

// confirmBtn.addEventListener('click', function(){
//     outputBox.value = `You just clicked "Yes"`;
// });


// // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
// favDialog.addEventListener('close', function onClose() {
//   outputBox.value = "You just clicked Yes" ;
// });

