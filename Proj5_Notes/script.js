// Konstanta yang digunakan untuk memanggil tempat penyimpanan input field dan button create
const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".container button");

// Variabel yang digunakan untuk memanggil semua input field
let notes = document.querySelectorAll(".inputBox");

// Sebuah function yang digunakan untuk menampulkan hasil konten yang terdapat di input field
const showNotes = () => {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
// Pemanggilan langsung yang dilakukan supaya konten yang telah tersimpan sebelumnya langsung ditampilkan
showNotes();

// Sebuah function yang digunakan untuk menyimpan hasil konten di input field ke dalam localStorage
const updateStorage = () => {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener untuk pembuatan input field ketika button create di click 
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.classList = "inputBox";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

// Event listener untuk menentukan aksi yang akan dilakukan berdasarkan element yang di click
notesContainer.addEventListener("click", (e) => {
    // Apabila element yang di click adalah img, maka input field akan dihapus
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    // Apabila element yang di click adalah area dari input field, maka konten yang ditulis akan masuk ke fungsi
    // update storage 
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".inputBox");
        // Ketika cursor telah mengclick area di luar input field maka data konten akan tersimpan
        notes.forEach(note => {
            note.onkeyup = () => {
                updateStorage();
            }
        })
    }
})

// Sebuah fungsi yang digunakan supaya ketika user menekan tombol enter pada area input, akan terjadi line break.
document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})