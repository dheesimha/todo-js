// Add click listener to add note button 

let notesCollection = new Array();

document.getElementById("addBtn").addEventListener("click", addNoteFunc)
document.getElementById("notes").addEventListener("click", deleteMessage)

function addNoteFunc() {
    let currentText;
    currentText = document.getElementById("currentText").value
    // console.log("Add button was clicked")
    console.log(currentText)

    if (currentText != "") {
        notesCollection.push(currentText);
        console.log(notesCollection)


        let z = document.createElement("li")
        z.innerHTML = currentText
        document.querySelector("#notes").appendChild(z)
        // document.write(`<ul>${note}</ul>`)

        document.getElementById("currentText").value = ""

    }


}





function deleteMessage(e) {
    console.log("A note was deleted")
    console.log(e)
    console.log(e.target.innerHTML + " was deleted")
    // e.target.innerHTML = `<strike>${e.target.innerHTML}</strike>`
    if (e.target.className == "strike") {
        e.target.className = ""
    }

    else {
        e.target.className = "strike"
    }
}



