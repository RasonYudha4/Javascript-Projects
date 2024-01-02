const inputBox = document.querySelector("#box");
const list = document.querySelector("#list-container");
const add = document.querySelector(".row button");


add.addEventListener("click", () => {
    if(inputBox.value == ""){
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
})

list.addEventListener("click", (e) => {
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

const saveData = () => {
    localStorage.setItem("data", list.innerHTML);
}

const showTask = () => {
    list.innerHTML = localStorage.getItem("data");
}

showTask();