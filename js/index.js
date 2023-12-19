const liveToastDOM = document.querySelector("#liveToast");
const taskDOM = document.querySelector("#task");
const listDOM = document.querySelector("#list");
const successToast = document.querySelector(".toast.success");
const errorToast = document.querySelector(".toast.error");
const closeDOM = document.querySelector(".close");

function newElement() {
    if (taskDOM.value === "") {
        showErrorToast(); // If the list empty show error message
    }
    else {
        addItem(taskDOM.value); // Add list
        showSuccessToast(); // Show success message
    }
    taskDOM.value = ""; // Clear the text area after adding list
}
function addItem(task) {
    const li = document.createElement("li"); // Creating list element
    li.innerHTML = `${task}`; // Add written task to inner html of li
    listDOM.appendChild(li); // Append list element to list document

    const spanDOM = document.createElement('span'); // Creating X button to delete list elements
    spanDOM.className = 'close';
    spanDOM.textContent = '\u00D7';
    li.appendChild(spanDOM);
    
    spanDOM.onclick = () => {
        li.style.display = 'none'; // Deleting list element
    };

}

listDOM.addEventListener('click', (event) => { // Adding checked design to list element when it is clicked
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
});

/* SUCCESS TOAST FUNC */
function showSuccessToast() {
    $(".success").toast("show")

    setTimeout(() => {
        $(".success").toast("hide");
    }, 4000);
    
    closeDOM.onclick = () => {
        $(".success").toast("hide");
    }

}

/* ERROR TOAST FUNC */
function showErrorToast() {
    $(".error").toast("show");

    setTimeout(() => {
        $(".error").toast("hide");
    }, 4000);

    closeDOM.onclick = () => {
        $(".error").toast("hide");
    }

}