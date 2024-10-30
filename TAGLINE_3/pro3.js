const container = document.querySelector(".container");
const text_entry = document.getElementById("text_entry");
const yess = () => {
    const div = document.createElement("div");
    div.innerText =`Hey, i'm ${entry.value}`;
    div.setAttribute("class", "output");
    container.append(div);
};
