let palette = document.querySelectorAll("#palette");
let currentColor = document.querySelector("#current-color");
let main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    div.classList.add("cell")
    main.append(div)
}

