function developper(button) {
    const parent = button.parentElement; // le <li>
    const list = parent.querySelector('.underlist');
    if (list.style.display === "block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
}