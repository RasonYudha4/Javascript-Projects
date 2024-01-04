const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".container button");
let notes = document.querySelectorAll(".inputBox");

const showNotes = () => {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

const updateStorage = () => {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.classList = "inputBox";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    } else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".inputBox");
        notes.forEach(note => {
            note.onkeyup = () => {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})