const titleEl = document.getElementById("title");
let flag = true;

titleEl.addEventListener("click", (e) => {
    if (flag) {
        titleEl.innerHTML = "Hola Mundo";
        titleEl.classList.remove("textEn");
        titleEl.classList.add("textEs");
    }        
    else {
        titleEl.innerHTML = "Hello World";
        titleEl.classList.remove("textEs");
        titleEl.classList.add("textEn");
    }

    flag = !flag;
})
