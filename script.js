// Add click listener to add note button 

document.getElementById("addBtn").addEventListener("click", addNoteFunc)

function addNoteFunc() {
    let currentText;
    currentText = document.getElementById("currentText").innerHTML
    // console.log("Add button was clicked")
    console.log(currentText)
}
