function openModal(text) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-text").innerText = text;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}