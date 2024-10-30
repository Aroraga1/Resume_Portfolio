const choose = document.getElementById("choose");
const body = document.body;

const generate = () => {
    switch (choose.value) {
        case "red": body.style.backgroundColor ="#fc0303";
        break;

        case "blue": body.style.backgroundColor ="#4E80DF";
        break;

        case "green": body.style.backgroundColor = "#2E9639";
        break;
    
        case "pink": body.style.backgroundColor ="#E362B7";
        break;

        case "yellow": body.style.backgroundColor = "#D9E362";
        break;
     
        default: body.style.backgroundColor ="#000000";
        break;
    
}
};



