var checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("row").style.display = "block";
    } else {
        document.getElementById("row").style.display = "none";
    }
});