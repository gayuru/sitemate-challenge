var clickMeButton = document.getElementById('clickButton');
var favDialog = document.getElementById('favDialog');
var outputBox = document.querySelector('output');
var confirmBtn = document.getElementById('confirmBtn');
var cancelBtn = document.getElementById('cancelBtn');

// "Update details" button opens the <dialog> modally
clickMeButton.addEventListener('click', function onOpen() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});

// selectEl.addEventListener('change', function onSelect(e) {
//   confirmBtn.value = selectEl.value;
// });

cancelBtn.addEventListener('click', function(){
    outputBox.value = "You just clicked Cancel";
});

confirmBtn.addEventListener('click', function(){
    outputBox.value = "You just clicked Yes";
});


// // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
// favDialog.addEventListener('close', function onClose() {
//   outputBox.value = "You just clicked Yes" ;
// });

