button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);

//выведется 2 алерта. сначала с 1, потом с 2.